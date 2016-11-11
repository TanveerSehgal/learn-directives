import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import mySD from './my-structural-directive';
import myAD from './my-attribute-directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        mySD,
        myAD
    ],
    exports: [
        mySD,
        myAD
    ]
})

export default class CustomModule {}
