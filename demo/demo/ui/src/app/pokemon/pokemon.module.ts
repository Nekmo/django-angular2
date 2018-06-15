import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {DjangoModule} from "angular-django";
import {RouterModule} from "@angular/router";
import {DjangoListModule} from "angular-django/list/list.module";
import {HttpClientModule} from "@angular/common/http";


const routes = [
    // {
    //     path     : 'create',
    //     component: CreateComponent,
    // },
    {
        path     : '',
        component: ListComponent,
    },
    // {
    //     path     : ':mainProjectId/update',
    //     component: UpdateComponent,
    // },
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
        DjangoListModule,
    ],
    declarations: [ListComponent]
})
export class PokemonModule { }
