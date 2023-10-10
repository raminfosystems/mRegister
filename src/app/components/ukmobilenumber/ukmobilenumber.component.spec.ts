import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UkmobilenumberComponent } from './ukmobilenumber.component';

describe('UkmobilenumberComponent', () => {
  let component: UkmobilenumberComponent;
  let fixture: ComponentFixture<UkmobilenumberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UkmobilenumberComponent, IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UkmobilenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Todo: Add tests for the component
  it('should render input text box', () => {
    const fixture = TestBed.createComponent(UkmobilenumberComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ion-input')).toBeTruthy();
  });

  // Check if the input can take only numbers
  it('should take only numbers', () => {
    const fixture = TestBed.createComponent(UkmobilenumberComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ion-input').type).toBe('text');
  });

  // Check if maskito is applied
  it('should apply maskito', () => {
    const fixture = TestBed.createComponent(UkmobilenumberComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ion-input').maskito).toBeTruthy();
  });


});
