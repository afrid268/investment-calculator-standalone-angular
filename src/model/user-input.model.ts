export interface userInput
{
  initialInvestments : number;
  annualInvestments : number;
  expectedReturn : number;
  duration : number
}

export interface InvestmentYearResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}