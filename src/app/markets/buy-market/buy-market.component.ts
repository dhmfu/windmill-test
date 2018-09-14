import { Component, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Market } from '../../models/market';

import { MarketsService } from '../../services/markets.service';

@Component({
    selector: 'app-buy-market',
    templateUrl: './buy-market.component.html',
    styleUrls: ['./buy-market.component.css']
})
export class BuyMarketComponent {
    @Input() market: Market;
    @Input() userBalance: number;

    constructor(
        private marketsService: MarketsService,
        public snackBar: MatSnackBar
    ) { }

    maxQuantity(): number {
        return Math.floor(this.userBalance / this.market.price);
    }

    buy(quantityInput: HTMLInputElement) {
        if(this.marketsService.buy(this.market, Number(quantityInput.value))) {
            quantityInput.value = '';
            this.snackBar.open('Item(s) was successfully bought', 'OK', {
                duration: 2000
            });
        }
    }

    onKeyPress(event: KeyboardEvent): void {
        if(!event.key.match(/\d/)) event.preventDefault();
    }
}
