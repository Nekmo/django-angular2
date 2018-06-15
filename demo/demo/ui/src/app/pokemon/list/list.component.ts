import { Component, OnInit } from '@angular/core';
import {PokemonApi} from "../../api.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    columns: string[] = ['id', 'identifier', 'height', 'weight', 'base_experience', 'order', 'is_default'];

    constructor(public queryset: PokemonApi) {
    }

    ngOnInit() {
    }

}
