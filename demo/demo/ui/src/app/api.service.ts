import {Injectable, Injector} from '@angular/core';
import { ApiService } from 'angular-django/api.service';
import {Field, SerializerService} from 'angular-django/serializer.service';
import {HttpClient} from "@angular/common/http";


///////////////////////////////////////
// Region API
///////////////////////////////////////
export class Region extends SerializerService {
     @Field() url: string;
     @Field() identifier: string;
     @Field() id: number;
}

@Injectable({
  providedIn: 'root'
})
export class RegionApi extends ApiService {

    url = '/api/regions/';
    serializer = Region;

    constructor(http: HttpClient,
                injector: Injector) {
        super(http, injector);
    }
}


///////////////////////////////////////
// Generation API
///////////////////////////////////////
export class Generation extends SerializerService {
     @Field() url: string;
     @Field() identifier: string;
     @Field() main_region: string;
     @Field() id: number;

     getName() {
         return this.identifier;
     }
}

@Injectable({
  providedIn: 'root'
})
export class GenerationApi extends ApiService {

    url = '/api/generations/';
    serializer = Generation;

    constructor(http: HttpClient,
                injector: Injector) {
        super(http, injector);
    }
}


///////////////////////////////////////
// Specie API
///////////////////////////////////////
export class Specie extends SerializerService {
     @Field() url: string;
     @Field() growth_rate: GrowthRate;
     @Field() shape: Shape;
     @Field() habitat: Habitat;
     @Field() generation: Generation;
     @Field() identifier: string;
     @Field() color: string;
     @Field() gender_rate: number;
     @Field() capture_rate: number;
     @Field() base_happiness: number;
     @Field() is_baby: boolean;
     @Field() hatch_counter: number;
     @Field() has_gender_differences: boolean;
     @Field() forms_switchable: boolean;
     @Field() order: number;
     @Field() conquest_order: number;
     @Field() evolves_from_specie: string;
     @Field() id: number;
}


///////////////////////////////////////
// Pokemon API
///////////////////////////////////////
export class Pokemon extends SerializerService {
     @Field() url: string;
     @Field() specie: Specie;
     @Field() identifier: string;
     @Field() height: number;
     @Field() weight: number;
     @Field() base_experience: number;
     @Field() order: number;
     @Field() is_default: boolean;
     @Field() id: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonApi extends ApiService {

    url = '/api/pokemon/';
    serializer = Pokemon;

    constructor(http: HttpClient,
                injector: Injector) {
        super(http, injector);
    }
}


///////////////////////////////////////
// Habitat API
///////////////////////////////////////
export class Habitat extends SerializerService {
     @Field() url: string;
     @Field() identifier: string;
     @Field() id: number;
}

@Injectable({
  providedIn: 'root'
})
export class HabitatApi extends ApiService {

    url = '/api/habitats/';
    serializer = Habitat;

    constructor(http: HttpClient,
                injector: Injector) {
        super(http, injector);
    }
}


///////////////////////////////////////
// Shape API
///////////////////////////////////////
export class Shape extends SerializerService {
     @Field() url: string;
     @Field() identifier: string;
     @Field() id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShapeApi extends ApiService {

    url = '/api/shares/';
    serializer = Shape;

    constructor(http: HttpClient,
                injector: Injector) {
        super(http, injector);
    }
}



@Injectable({
  providedIn: 'root'
})
export class SpecieApi extends ApiService {

    url = '/api/species/';
    serializer = Specie;

    constructor(http: HttpClient,
                injector: Injector) {
        super(http, injector);
    }
}


///////////////////////////////////////
// GrowthRate API
///////////////////////////////////////
export class GrowthRate extends SerializerService {
     @Field() url: string;
     @Field() identifier: string;
     @Field() formula: string;
     @Field() id: number;
}

@Injectable({
  providedIn: 'root'
})
export class GrowthRateApi extends ApiService {

    url = '/api/growth_rates/';
    serializer = GrowthRate;

    constructor(http: HttpClient,
                injector: Injector) {
        super(http, injector);
    }
}
