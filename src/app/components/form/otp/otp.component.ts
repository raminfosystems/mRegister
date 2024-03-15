import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  standalone: true,
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent  implements OnInit {

  constructor() { }

  // Prevent cross site request forgery
  ngOnInit() {
    const token = this.generateCsrfToken();
    this.setCsrfToken(token);
  }

  generateCsrfToken() {
    // Generate a random CSRF token
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return token;
  }

  setCsrfToken(token: string) {
    // Set the CSRF token in a cookie or header
    // Replace 'csrfToken' with the name of your CSRF token
    document.cookie = `csrfToken=${token}; path=/`;
    // Or set it as a header in your HTTP requests
    // Replace 'X-CSRF-Token' with the name of your CSRF token header
    // axios.defaults.headers.common['X-CSRF-Token'] = token;
  }

  // prevent adding more than 1 digit in the input field
  onInput(event: any) {
    if (event.target.value.length > 1) {
      event.target.value = event.target.value.slice(0, 1);
    }
  }


  
}
