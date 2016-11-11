import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import mySD from './my-structural-directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        mySD
    ],
    exports: [
        mySD
    ]
})

export default class CustomModule {}
