import { Component, OnInit } from '@angular/core';
import {DjangoForm, DjangoFormService} from "angular-django/form/django-form.service";
import {PokemonApi} from "../../api.service";

@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.css']
})
export class FormServiceComponent implements OnInit {

    public djangoForm: DjangoForm;

  constructor(
      public api: PokemonApi,
      public djangoFormService: DjangoFormService,
  ) { }

  ngOnInit() {

      this.djangoForm = this.djangoFormService.getFilter(this.api, [
          // 'specie__generation',
          'specie__identifier',
          'specie__generation',
      ]);

  }

}
