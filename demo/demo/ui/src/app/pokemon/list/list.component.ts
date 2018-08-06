import { Component, OnInit } from '@angular/core';
import {PokemonApi} from "../../api.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    columns: (string | {})[];

    constructor(public queryset: PokemonApi,
                public router: Router) {
    }

    ngOnInit() {
        this.queryset.options().subscribe(() => {
            this.columns = [
                'id', 'identifier',
                {column: 'specie__generation__identifier', label: this.queryset.getLabel('specie__generation')},
                'height',
                {column: 'weight', label: 'weight'},
                'base_experience', 'order',
                'is_default'
            ];
        });

    }

    goToItem(row) {
        this.router.navigate([`/pokemon/${row.id}/update`])
    }
}
