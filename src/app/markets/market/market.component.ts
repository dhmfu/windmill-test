import { Component, OnInit, Input, Output } from '@angular/core';

import { Market } from '../../models/market';

import { UserService } from '../../services/user.service';
import { MarketsService } from '../../services/markets.service';

@Component({
    selector: 'app-market',
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
    @Input() market: Market;

    constructor(
        private userService: UserService,
        private marketsService: MarketsService
    ) { }

    ngOnInit() {
    }

    buy(quantity: string | number) {
        quantity = Number(quantity);
        console.log(this.marketsService.buy(this.market, quantity));
    }
}
