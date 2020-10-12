import { Component, AfterViewInit, Inject, ViewChild, ElementRef, Renderer2, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-sphere',
    templateUrl: './sphere.component.html',
    styleUrls: ['./sphere.component.scss']
})
export class SphereComponent implements AfterViewInit  {

    public isBrowser: boolean;

    constructor(public renderer: Renderer2, @Inject(PLATFORM_ID) platformId: Object, private _ngZone: NgZone) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    timerExicution = 0;

    @ViewChild("particlesphere") Particlesphere: ElementRef;

    ngAfterViewInit (): void {
        this._ngZone.runOutsideAngular(() => {
            for (let i = 0; i <= 375; i++) {
                let el = this.renderer.createElement("div");
                let main_el = this.Particlesphere.nativeElement;
                this.renderer.addClass(el, "c");
                this.renderer.appendChild(main_el, el)
                main_el.appendChild(el)
            }
            setTimeout(function () {
                let elements = Array.from(document.getElementsByClassName("c"));

                elements.forEach((element, i) => {
                    if (i < 350) {
                        setTimeout(function () { element["classList"].add('active'); }, 8 * i);
                    }
                });
            }, 8000);
        });
    }

}
