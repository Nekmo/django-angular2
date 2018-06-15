import { Injectable } from '@angular/core';
import { ApiService } from 'angular-django/api.service';
import {Field, SerializerService} from 'angular-django/serializer.service';
import {HttpClient} from "@angular/common/http";

///////////////////////////////////////
// Pokemon API
///////////////////////////////////////
export class Pokemon extends SerializerService {
     @Field() url: string;
     @Field() identifier: string;
     @Field() height: number;
     @Field() weight: number;
     @Field() base_experience: number;
     @Field() order: number;
     @Field() is_default: boolean;
     @Field() specie: string;
     @Field() id: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonApi extends ApiService {

    url = '/api/pokemon/';
    serializer = Pokemon;

    constructor(http: HttpClient) {
        super(http);
    }
}
