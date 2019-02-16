import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs.router.module';

import {TabsPage} from './tabs.page';
import {Tab1SubPageModule} from '../tab1-sub-page/tab1-sub-page.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab1SubPageModule,
        TabsPageRoutingModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
