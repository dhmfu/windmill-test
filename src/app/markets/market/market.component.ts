import { Component, OnInit, Input, Output } from '@angular/core';

import { Market } from '../../models/stock';

@Component({
    selector: 'app-market',
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
    @Input() market: Market;

    constructor() { }

    ngOnInit() {
    }

    buy(quantity: string | number) {
        quantity = Number(quantity);
        console.log(quantity * this.market.price);
    }
}
