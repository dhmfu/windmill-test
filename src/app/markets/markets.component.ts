import { Component, OnInit } from '@angular/core';

import { MarketsService } from '../services/markets.service';

import { Market } from '../models/market';

@Component({
    selector: 'app-markets',
    templateUrl: './markets.component.html',
    styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {
    markets: Market[];
    constructor(private marketsService: MarketsService) { }

    ngOnInit() {
        this.marketsService.getMarkets().then(markets => {
            this.markets = markets;
        });
    }

}
