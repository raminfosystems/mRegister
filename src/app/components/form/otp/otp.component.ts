import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-otp',
  standalone: true,
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  @ViewChildren('otpField')
  otpFields!: QueryList<ElementRef>;
  currentIndex: number = 0;

  constructor() {
  }

  // Prevent cross site request forgery
  ngOnInit() {
    const token = this.generateCsrfToken();
    this.setCsrfToken(token);

  }

  generateCsrfToken() {
    // Generate a random CSRF token
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  setCsrfToken(token: string) {
    // Set the CSRF token in a cookie or header
    // Replace 'csrfToken' with the name of your CSRF token
    document.cookie = `csrfToken=${token}; path=/`;
    // Or set it as a header in your HTTP requests
    // Replace 'X-CSRF-Token' with the name of your CSRF token header
    // axios.defaults.headers.common['X-CSRF-Token'] = token;
  }

  onKeyUp(event: any, input: any, index: number) {
    const inputValue = event.target.value;
    this.currentIndex = index;
    // First check if the key code is backspace or escape character.
    if (event.keyCode === 8 || event.keyCode === 27) {
      //if it is a first box and has values then just clear the input box
      if (index == 0 && inputValue.length > 0) {
        //clear values
        event.target.value = '';
      }

      if ((index > 0 && index <= 5) && inputValue.length == 0) {
        const previousInput = this.otpFields.toArray()[index - 1];
       inputValue.readonly = true;
        previousInput.nativeElement.readonly = false;
        previousInput.nativeElement.focus();
      } else {
        // Clear the current value
        event.target.value = '';
      }
    }


    if (inputValue && inputValue.length === 1 && /^[0-9]$/.test(inputValue)) {
      if (index < 5) {
        const nextInput = this.otpFields.toArray()[index + 1];
        inputValue.readonly = true;
        nextInput.nativeElement.readonly = false;
        nextInput.nativeElement.focus();
        this.currentIndex = index + 1;
      } else {
        //You are on the 6th input box,
        // and now you need to trigger to validate the OTP
        this.validateOtp();
      }
    }

  }


  validateOtp() {
    // Call your service here to validate the entered number
  }


}
