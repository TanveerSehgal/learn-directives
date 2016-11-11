import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
    selector: '[mySD]',
})

export default class MyStructuralDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) {}

    @Input() set mySD(show: boolean) {
        if (!show) this.viewContainerRef.clear();
        else this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
}