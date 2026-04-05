import { Injectable, signal } from '@angular/core';
import type { userInput } from './model/user-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultData = signal<
    | {
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
      }[]
    | undefined
  >(undefined);

  calculateInvestmentResults(data: userInput) {
    debugger;
    console.log('Calculating investment results with data:');
    const { initialInvestments, annualInvestments, expectedReturn, duration } =
      data;
    const annualData = [];
    let investmentValue = initialInvestments;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestments;
      const totalInterest =
        investmentValue - annualInvestments * year - initialInvestments;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestments,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestments + annualInvestments * year,
      });
    }

    this.resultData.set(annualData);
  }
}
