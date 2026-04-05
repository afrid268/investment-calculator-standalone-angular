import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-inv-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './inv-result.component.html',
  styleUrl: './inv-result.component.css',
})
export class InvResultComponent {
  constructor(private investmentService: InvestmentService) {
    console.log('InvResultComponent initialized');
    debugger;
  }

  _results = computed(() => {
    debugger;
    return this.investmentService.resultData();
  });
}
