import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {DjangoModule} from "angular-django";
import {RouterModule} from "@angular/router";
import {DjangoListModule} from "angular-django/list/list.module";
import {HttpClientModule} from "@angular/common/http";
import { FormComponent } from './form/form.component';
import {DjangoFormModule} from "angular-django/form/form.module";


const routes = [
    {
        path     : 'create',
        component: FormComponent,
    },
    {
        path     : '',
        component: ListComponent,
    },
    {
        path     : ':pokemonId/update',
        component: FormComponent,
    },
    // {
    //     path     : ':mainProjectId',
    //     component: DetailComponent,
    // },

];


@NgModule({
    imports: [
        RouterModule.forChild(routes),

        CommonModule,

        HttpClientModule,
        DjangoModule,
        DjangoFormModule,
        DjangoListModule,
    ],
    declarations: [ListComponent, FormComponent]
})
export class PokemonModule { }
