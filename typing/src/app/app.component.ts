import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomtext = lorem.sentence();
  typedText = '';
  showSuccessMsg = false;

  inputChange(value: string) {
    this.typedText = value;
    if (this.typedText === this.randomtext) {
      this.showSuccessMsg = true;
    }
  }

  compare(randomChar: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    if (enteredLetter === randomChar) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  }
}
