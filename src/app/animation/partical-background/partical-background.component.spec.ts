import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticalBackgroundComponent } from './partical-background.component';

describe('ParticalBackgroundComponent', () => {
  let component: ParticalBackgroundComponent;
  let fixture: ComponentFixture<ParticalBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticalBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticalBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
