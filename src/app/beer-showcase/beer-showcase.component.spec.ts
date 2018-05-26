import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerShowcaseComponent } from './beer-showcase.component';

describe('BeerShowcaseComponent', () => {
  let component: BeerShowcaseComponent;
  let fixture: ComponentFixture<BeerShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
