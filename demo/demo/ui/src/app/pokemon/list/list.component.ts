import { Component, OnInit } from '@angular/core';
import {PokemonApi} from "../../api.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    columns: (string | {})[];

    constructor(public queryset: PokemonApi) {
        queryset.options().subscribe(() => {
            this.columns = [
                'id', 'identifier',
                {column: 'specie__generation__identifier', label: queryset.getLabel('specie__generation')},
                'height', 'weight', 'base_experience', 'order',
                'is_default'
            ];
        });
    }

    ngOnInit() {
    }

}
