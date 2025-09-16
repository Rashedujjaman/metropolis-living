import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  email = '';
  currentYear = new Date().getFullYear();

  onSubscribe() {
    if (this.email.trim()) {
      // Handle newsletter subscription
      console.log('Subscribing email:', this.email);
      alert('Thank you for subscribing to our newsletter!');
      this.email = '';
    }
  }
}
