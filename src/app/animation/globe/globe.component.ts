import { Component, OnInit, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Globe } from "../../../assets/js/globe.js";

@Component({
    selector: 'app-globe',
    templateUrl: './globe.component.html',
    styleUrls: ['./globe.component.scss']
})
export class GlobeComponent implements OnInit {

    /**
     * IN THIS @class Globe is imported from "../../globe.js". to use that just
     * create @object of that class pass the element 
     * you want to add globe in and then run function 
     * load() and play()
     * @function load is used to load the canvas in the
     * DOM that you provided.
     * @function run rander the globe and starts the animation.
     */
    public isBrowsers: boolean;
    constructor(@Inject(PLATFORM_ID) platformId: Object, private _ngZone: NgZone) {
        this.isBrowsers = isPlatformBrowser(platformId);
    }

    ngOnInit(): void {
        this._ngZone.runOutsideAngular(() => {
            if(this.isBrowsers){
                setTimeout(() => {
                    var _globe = new Globe();
                    _globe.el = document.querySelector(".js-globe");
                    _globe.load();
                    _globe.play();
                }, 500);
            }
        });
    }
}
