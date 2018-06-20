import { Component, OnInit } from '@angular/core';
import {GenerationApi, PokemonApi} from "../../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    instanceId: number;
    instance: any;
    fields: any[];

    constructor(public api: PokemonApi,
                public generationApi: GenerationApi,
                public route: ActivatedRoute) { }

    ngOnInit() {
        this.fields = [
            ['identifier'], ['height', 'weight', 'base_experience'], ['order', 'is_default'],
            ['specie__identifier',
                {'field': 'specie__generation', 'queryset': this.generationApi},
                'specie__is_baby'],
        ];

        this.instanceId = +this.route.snapshot.paramMap.get('pokemonId');
        if(this.instanceId) {
            this.api.get(this.instanceId).subscribe((instance) => {
                this.instance = instance;
            });
        }
    }

}
