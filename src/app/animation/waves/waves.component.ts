import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ViewChild, ElementRef, NgZone } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PerspectiveCamera, Scene, Color, ShaderMaterial, BufferAttribute, BufferGeometry, Points, WebGLRenderer } from 'three';

@Component({
    selector: 'app-waves',
    templateUrl: './waves.component.html',
    styleUrls: ['./waves.component.scss']
})

export class WavesComponent implements OnInit {

  public isBrowser: boolean;

  width: number = 100;
  height: number = 100;

  particalParams = {
      fpsLimit: 140,
      "particles": {
          "number": {
              "value": 43,
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#d8d8d8"
          },
          "shape": {
              "type": "circle",
              "stroke": {
                  "width": 0,
                  "color": "#000000"
              },
              "polygon": {
                  "nb_sides": 5
              },
              "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
              }
          },
          "opacity": {
              "value": 0.7,
              "random": true,
              "anim": {
                  "enable": true,
                  "speed": 0.5,
                  "opacity_min": 0,
                  "sync": true
              }
          },
          "size": {
              "value": 1,
              "random": true,
              "anim": {
                  "enable": false,
                  "speed": 60,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "top",
              "random": false,
              "straight": true,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": false,
                  "mode": "repulse"
              },
              "onclick": {
                  "enable": false,
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 167.83216783216784,
                  "line_linked": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              },
              "push": {
                  "particles_nb": 4
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true


  };




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

  @ViewChild('tasknote') elem: ElementRef;

  ngOnInit(): void {
      this._ngZone.runOutsideAngular(() => {
          if(this.isBrowser){
              const timerr = setTimeout(() => {
                  this.container = this.rnd.selectRootElement(this.elem.nativeElement);
          
                  this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
                  this.camera.position.y = - 50;
                  this.camera.position.z = 300;
          
                  this.scene = new Scene();
          
                  let numParticles = this.AMOUNTX * this.AMOUNTY;
          
                  let positions = new Float32Array(numParticles * 3);
                  let scales = new Float32Array(numParticles);
          
                  let i = 0, j = 0;
          
                  for (var ix = 0; ix < this.AMOUNTX; ix++) {
          
                      for (var iy = 0; iy < this.AMOUNTY; iy++) {
          
                          positions[i] = ix * this.SEPARATION - ((this.AMOUNTX * this.SEPARATION) / 2); // x
                          positions[i + 1] = 0; // y
                          positions[i + 2] = iy * this.SEPARATION - ((this.AMOUNTY * this.SEPARATION) - 10); // z
          
                          scales[j] = 0.05;
          
                          i += 3;
                          j++;
          
                      }
          
                  }
          
                  let geometry = new BufferGeometry();
                  geometry.setAttribute('position', new BufferAttribute(positions, 3));
                  geometry.setAttribute('scale', new BufferAttribute(scales, 1));
          
                  let material = new ShaderMaterial({
          
                      uniforms: {
                          color: { value: new Color(0xffffff) },
                      },
                      vertexShader: this.document.getElementById('vertexshader').textContent,
                      fragmentShader: this.document.getElementById('fragmentshader').textContent
          
                  });
          
                  this.particles = new Points(geometry, material);
                  this.scene.add(this.particles);
          
                  this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
                  this.renderer.setPixelRatio(window.devicePixelRatio);
                  this.renderer.setSize(window.innerWidth, window.innerHeight);
                  this.renderer.setClearColor (0x181818, 1);
                  this.container.appendChild(this.renderer.domElement);
          
                  // this.container.addEventListener('pointermove', this.onPointerMove.bind(this), false);
                  window.addEventListener('resize', this.onWindowResize.bind(this), false);
          
                  this.animate();
              }, 500);
          }
      });
  }

  onWindowResize() {

      this.renderer.setSize(window.innerWidth, window.innerHeight);

  }

  onPointerMove(event) {

      if (event.isPrimary === false) return;

      this.mouseX = event.clientX - this.windowHalfX;
      this.mouseY = event.clientY - this.windowHalfY;

  }

  render() {
      
      this.camera.lookAt(this.scene.position);

      var positions = this.particles.geometry.attributes.position.array;
      var scales = this.particles.geometry.attributes.scale.array;

      var i = 0, j = 0;

      for (var ix = 0; ix < this.AMOUNTX; ix++) {

          for (var iy = 0; iy < this.AMOUNTY; iy++) {

              positions[i + 1] = (Math.sin((ix + this.count) * 0.6) * 20) + (Math.sin((iy + this.count) * 0.5) * 20) - 200;

              scales[j] = (Math.sin((ix + this.count) * 0.3) + 1) * 2 +
                  (Math.sin((iy + this.count) * 0.5) + 1) * 2;

              i += 3;
              j++;

          }

      }

      this.particles.geometry.attributes.position.needsUpdate = true;
      this.particles.geometry.attributes.scale.needsUpdate = true;

      this.renderer.render(this.scene, this.camera);

      this.count += 0.1;

  }

  animate() {

      requestAnimationFrame(this.animate.bind(this));

      this.render();

  }
}