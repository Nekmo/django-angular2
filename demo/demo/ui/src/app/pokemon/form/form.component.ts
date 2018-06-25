import {Component, OnInit, ViewChild} from '@angular/core';
import {GenerationApi, PokemonApi, SpecieApi} from "../../api.service";
import {ActivatedRoute} from "@angular/router";
import {DjangoFormComponent} from "angular-django/form/django-form/django-form.component";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    instanceId: number;
    instance: any;
    fields: any[];

    @ViewChild('djangoForm') djangoForm: DjangoFormComponent;

    constructor(public api: PokemonApi,
                public specieApi: SpecieApi,
                public generationApi: GenerationApi,
                public route: ActivatedRoute) { }

    ngOnInit() {
        this.fields = [
            ['identifier'], ['height', 'weight', 'base_experience'], ['order', 'is_default'],
            [{'text': 'Specie', 'widget': 'title'}],
            [
                {'field': 'specie__id', 'type': 'hidden'},
                {
                    'field': 'specie__identifier', 'widget': 'search-input', 'textInput': true,
                    'queryset': this.specieApi, 'selectedItem': ($event) => { this.specieSelected($event) }
                },
                {'field': 'specie__generation', 'queryset': this.generationApi, 'default': null},
                'specie__is_baby'
            ],
        ];

        this.instanceId = +this.route.snapshot.paramMap.get('pokemonId');
        if(this.instanceId) {
            this.api.get(this.instanceId).subscribe((instance) => {
                this.instance = instance;
            });
        }
    }

    specieSelected(specie) {
        Object.entries(this.djangoForm.form.controls).forEach(([key, inputValue]) => {
            if(key.startsWith('specie__')) {
                if(key == 'specie__identifier') {
                    return
                }
                let newKey = key.split('__').splice(1).join('__');
                let val;
                if(specie) {
                    val = specie.getValue(newKey);
                } else {
                    val = this.djangoForm.getDefaultValue(key);
                    val = (val === undefined ? '' : val);
                }
                inputValue.patchValue(val);
            }
        });
    }

}
