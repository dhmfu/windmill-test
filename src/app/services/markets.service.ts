import { Injectable } from '@angular/core';

import { STOCKS } from '../mocks/stocks';
import { Market } from '../models/stock';

@Injectable({
    providedIn: 'root'
})
export class MarketsService {

    constructor() { }

    getMarkets(): Promise<Market[]> {
        return Promise.resolve(this.mapMarket(STOCKS));
    }

    private mapMarket(stocks: Array<any>): Market[] {
        return stocks.map(stock => ({
            id: Number(stock.id),
            price: Number(stock.price),
            category: String(stock.category)
        }));
    }
}
