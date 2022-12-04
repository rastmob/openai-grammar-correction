import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammerCorrectionComponent } from './grammer-correction.component';

describe('GrammerCorrectionComponent', () => {
  let component: GrammerCorrectionComponent;
  let fixture: ComponentFixture<GrammerCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammerCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrammerCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
