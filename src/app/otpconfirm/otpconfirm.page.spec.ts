import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtpconfirmPage } from './otpconfirm.page';

describe('OtpconfirmPage', () => {
  let component: OtpconfirmPage;
  let fixture: ComponentFixture<OtpconfirmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpconfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
