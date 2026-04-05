import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestments = signal('0');
  enteredAnnualInvestments = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {
    debugger;
    console.log('UserInputComponent initialized');
  }

  onFormSubmit() {
    debugger;
    console.log('Form submitted with values:');
    this.investmentService.calculateInvestmentResults({
      initialInvestments: +this.enteredInitialInvestments(),
      annualInvestments: +this.enteredAnnualInvestments(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    });

    this.enteredInitialInvestments = signal('0');
    this.enteredAnnualInvestments = signal('0');
    this.enteredExpectedReturn = signal('5');
    this.enteredDuration = signal('10');
  }
}
