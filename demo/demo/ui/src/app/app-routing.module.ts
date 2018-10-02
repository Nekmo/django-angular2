import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path        : 'pokemon',
        loadChildren: './pokemon/pokemon.module#PokemonModule'
    },
    {
        path        : 'form',
        loadChildren: './form-demo/form-demo.module#FormDemoModule'
    },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),

        CommonModule,
    ],
    declarations: [],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
