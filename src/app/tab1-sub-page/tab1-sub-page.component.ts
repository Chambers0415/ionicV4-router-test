import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-tab1-sub-page',
    templateUrl: './tab1-sub-page.component.html',
    styleUrls: ['./tab1-sub-page.component.scss']
})
export class Tab1SubPageComponent implements OnInit, OnDestroy {

    constructor() {
        console.log('Tab1SubPageComponent');
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        console.log('Tab1SubPageComponentDes');
    }

}
