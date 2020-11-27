import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sphere',
    templateUrl: './sphere.component.html',
    styleUrls: ['./sphere.component.scss']
})
export class SphereComponent implements OnInit {

    public isBrowser: boolean;

    constructor() {
        const body = <HTMLDivElement> document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = "../assets/js/sphere.js";
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    }

    ngOnInit(): void {
    }

}
