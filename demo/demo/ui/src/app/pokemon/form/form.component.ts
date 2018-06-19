import { Component, OnInit } from '@angular/core';
import {PokemonApi} from "../../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    instanceId: number;
    instance: any;
    fields = [
        ['identifier'], ['height', 'weight', 'base_experience'], ['order', 'is_default'],
        ['specie__identifier', 'specie__generation'],
    ];

    constructor(public api: PokemonApi,
                public route: ActivatedRoute) { }

    ngOnInit() {
        this.instanceId = +this.route.snapshot.paramMap.get('pokemonId');
        if(this.instanceId) {
            this.api.get(this.instanceId).subscribe((instance) => {
                this.instance = instance;
            });
        }
    }

}
