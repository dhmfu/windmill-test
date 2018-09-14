import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { StockItem } from '../../models/stock';
import { Market } from '../../models/market';

import { MarketsService } from '../../services/markets.service';

@Component({
    selector: 'app-sell-market',
    templateUrl: './sell-market.component.html',
    styleUrls: ['./sell-market.component.css']
})
export class SellMarketComponent implements OnInit {
    @Input() item: StockItem;
    @Output() outOfItem: EventEmitter<number> = new EventEmitter();

    market: Market;
    quantity: number;

    constructor(
        private marketsService: MarketsService,
        public snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.market = this.item.market;
        this.quantity = this.item.quantity;
    }

    sell(quantityInput: HTMLInputElement): void {
        const quantity = Number(quantityInput.value);

        if(this.marketsService.sell(this.market, quantity)) {
            this.quantity -= quantity;
            this.snackBar.open('Item(s) was successfully sold', 'OK', {
                duration: 2000
            });
            quantityInput.value = '';

            if(this.quantity == 0) {
                this.outOfItem.emit(this.market.id);
            }
        }
    }

}
