import { Component, OnInit, Input, Output } from '@angular/core';

import { Market } from '../../models/market';

import { MarketsService } from '../../services/markets.service';

@Component({
    selector: 'app-buy-market',
    templateUrl: './buy-market.component.html',
    styleUrls: ['./buy-market.component.css']
})
export class BuyMarketComponent implements OnInit {
    @Input() market: Market;

    constructor(private marketsService: MarketsService) { }

    ngOnInit() {
    }

    buy(quantity: string | number) {
        quantity = Number(quantity);
        console.log(this.marketsService.buy(this.market, quantity));
    }
}
