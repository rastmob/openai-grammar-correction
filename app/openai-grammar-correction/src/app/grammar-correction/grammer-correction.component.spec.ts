import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarCorrectionComponent } from './grammer-correction.component';

describe('GrammarCorrectionComponent', () => {
  let component: GrammarCorrectionComponent;
  let fixture: ComponentFixture<GrammarCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammarCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrammarCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
