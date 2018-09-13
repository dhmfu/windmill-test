import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

    constructor(private marketsService: MarketsService) { }

    ngOnInit() {
        this.market = this.item.market;
        this.quantity = this.item.quantity;
    }

    sell(quantity: string | number): void {
        quantity = Number(quantity);

        if(this.marketsService.sell(this.market, quantity)) {
            this.quantity -= quantity;
        }
        if(this.quantity == 0) {
            this.outOfItem.emit(this.market.id);
        }
    }

}
