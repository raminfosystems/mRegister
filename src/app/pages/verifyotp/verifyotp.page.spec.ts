import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyotpPage } from './verifyotp.page';

describe('VerifyotpPage', () => {
  let component: VerifyotpPage;
  let fixture: ComponentFixture<VerifyotpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerifyotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
