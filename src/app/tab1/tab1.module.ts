import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {Tab1SubPageComponent} from '../tab1-sub-page/tab1-sub-page.component';
import {Tab1SubPageModule} from '../tab1-sub-page/tab1-sub-page.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        // Tab1SubPageModule,
        RouterModule.forChild([
            {
                path: '',
                component: Tab1Page,
            },

        ])
    ],
    declarations: [Tab1Page]
})
export class Tab1PageModule {
}
