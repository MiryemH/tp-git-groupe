import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantPresentationComponent } from './composant-presentation.component';

describe('ComposantPresentationComponent', () => {
  let component: ComposantPresentationComponent;
  let fixture: ComponentFixture<ComposantPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
