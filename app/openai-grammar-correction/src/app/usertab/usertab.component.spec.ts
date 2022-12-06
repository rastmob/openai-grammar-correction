import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertabComponent } from './usertab.component';

describe('UsertabComponent', () => {
  let component: UsertabComponent;
  let fixture: ComponentFixture<UsertabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
