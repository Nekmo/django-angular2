import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonApi} from "../../api.service";
import {Router} from "@angular/router";
import {MediaMatcher} from "@angular/cdk/layout";
import {DjangoFilterService, DjangoFilter} from "angular-django/list/django-filter.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

    columns: (string | {})[];

    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    private filter: DjangoFilter;

    constructor(public queryset: PokemonApi,
                public router: Router,
                public changeDetectorRef: ChangeDetectorRef,
                public media: MediaMatcher,
                public djangoFilter: DjangoFilterService) {

        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
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
        this.filter = this.djangoFilter.getFilter(this.queryset, [
            // 'specie__generation',
            'specie__generation',
        ]);
    }

    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    goToItem(row) {
        this.router.navigate([`/pokemon/${row.id}/update`])
    }
}
