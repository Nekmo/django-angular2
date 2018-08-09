import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonApi} from "../../api.service";
import {Router} from "@angular/router";
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

    columns: (string | {})[];

    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;


    constructor(public queryset: PokemonApi,
                public router: Router,
                public changeDetectorRef: ChangeDetectorRef,
                public media: MediaMatcher) {

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

    }

    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    goToItem(row) {
        this.router.navigate([`/pokemon/${row.id}/update`])
    }
}
