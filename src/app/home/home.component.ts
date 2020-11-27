import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, HostListener } from '@angular/core';
import { GlobeComponent } from '../animation/globe/globe.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild('parent', {read: ViewContainerRef}) target: ViewContainerRef;
  componentRef: ComponentRef<any>;

  loading: boolean = false;
  globeInitial: number = 0;

  public isBrowsers: boolean;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
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

  addElement(){
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if(this.globeInitial == 0){
      let childComponent = this.componentFactoryResolver.resolveComponentFactory(GlobeComponent);
      this.componentRef = this.target.createComponent(childComponent);
    }
    this.globeInitial++;
  }

}
