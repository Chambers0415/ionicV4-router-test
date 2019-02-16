import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1SubPageComponent} from '../tab1-sub-page/tab1-sub-page.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,],
    declarations: [ Tab1SubPageComponent]
})
export class Tab1SubPageModule {
}
