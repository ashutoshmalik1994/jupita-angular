import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ViewChild, ElementRef, NgZone } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import * as THREE from "../../assets/js/three.js";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public isBrowser: boolean;


  SEPARATION: number = 40;
  AMOUNTX: number = 130;
  AMOUNTY: number = 35;

  container: any;
  camera: any;
  scene: any;
  renderer: any;

  particles: any; particle: any; count: number = 0;

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  mouseX: number = 0;
  mouseY: number = 0;

  timerExicutions = 0;

  constructor(private rnd: Renderer2, @Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) platformId: Object, private _ngZone: NgZone) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @ViewChild('tasknote', { read: ElementRef, static: false }) elem: ElementRef;

  ngOnInit(): void {
    this._ngZone.runOutsideAngular(() => {
      if (this.isBrowser) {
        const timerr = setTimeout(() => {
          this.loadScript('../assets/js/particle.js');
          this.container = this.rnd.selectRootElement(this.elem.nativeElement);

          this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 10000);
          this.camera.position.y = 150; //changes how far back you can see i.e the particles towards horizon
          this.camera.position.z = 300; //This is how close or far the particles are seen

          this.camera.rotation.x = 0.35;

          this.scene = new THREE.Scene();

          this.particles = new Array();

          var PI2 = Math.PI;
          var material = new THREE.SpriteCanvasMaterial({

            color: '#d8d8d8', //changes color of particles
            program: function (context) {

              context.beginPath();
              context.arc(0, 0, 0.05, 0, PI2, true);
              context.fill();

            }

          });

          var i = 0;

          for (var ix = 0; ix < this.AMOUNTX; ix++) {

            for (var iy = 0; iy < this.AMOUNTY; iy++) {

              this.particle = this.particles[i++] = new THREE.Sprite(material);
              this.particle.position.x = ix * this.SEPARATION - ((this.AMOUNTX * this.SEPARATION) / 2);
              this.particle.position.z = iy * this.SEPARATION - ((this.AMOUNTY * this.SEPARATION) - 10);
              this.scene.add(this.particle);

            }

          }

          this.renderer = new THREE.CanvasRenderer({ alpha: true });
          this.renderer.setSize(window.innerWidth, window.innerHeight);
          this.renderer.setClearColor(0x000000, 0);
          this.container.appendChild(this.renderer.domElement);

          window.addEventListener('resize', this.onWindowResize.bind(this), false);
          this.animate();
        }, 500);
      }
    });
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  onWindowResize() {

    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);

  }
  render() {

    var i = 0;

    for (var ix = 0; ix < this.AMOUNTX; ix++) {

      for (var iy = 0; iy < this.AMOUNTY; iy++) {

        this.particle = this.particles[i++];
        this.particle.position.y = (Math.sin((ix + this.count) * 0.5) * 20) + (Math.sin((iy + this.count) * 0.5) * 20);
        this.particle.scale.x = this.particle.scale.y = (Math.sin((ix + this.count) * 0.3) + 2) * 4 + (Math.sin((iy + this.count) * 0.5) + 1) * 4;

      }

    }

    this.renderer.render(this.scene, this.camera);
    this.count += 0.1;

  }

  animate() {

    requestAnimationFrame(this.animate.bind(this));

    this.render();

  }

}
