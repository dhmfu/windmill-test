import { Component, OnInit } from '@angular/core';

import { MarketsService } from '../services/markets.service';
import { UserService } from '../services/user.service';

import { Market } from '../models/market';

@Component({
    selector: 'app-markets',
    templateUrl: './markets.component.html',
    styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {
    markets: Market[];
    visibleMarkets: Market[];
    categories: string[] = [];
    get userBalance(): number {
        return this.userService.getBalance();
    }

    constructor(
        private marketsService: MarketsService,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.marketsService.getMarkets().then(markets => {
            this.markets = markets;
            this.visibleMarkets = [ ...this.markets ];
            this.categories = Array.from(new Set(this.markets.map(
                market => market.category
            )));
        });
    }

    private filterMarkets(pattern: RegExp): void {
        this.visibleMarkets = this.markets.filter(market => {
            return pattern.test(market.category);
        });
    }

}
