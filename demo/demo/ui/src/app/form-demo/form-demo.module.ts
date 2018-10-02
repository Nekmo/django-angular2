import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormServiceComponent } from './form-service/form-service.component';
import {RouterModule} from "@angular/router";
import {DjangoFormModule} from "angular-django/form/form.module";
import {DjangoListModule} from "angular-django/list/list.module";
import {DjangoModule} from "angular-django";
import {MatInputModule, MatInput} from "@angular/material";


const routes = [
    {
        path     : '',
        component: FormServiceComponent,
    },

];


@NgModule({
    imports: [
        MatInputModule,

        RouterModule.forChild(routes),
        DjangoModule,
        DjangoFormModule,
        DjangoListModule.forRoot(),

        CommonModule
    ],
    declarations: [FormServiceComponent],

})
export class FormDemoModule { }
