import { Injectable } from '@angular/core';

import { UserService } from './user.service';

import { STOCKS } from '../mocks/stocks';

import { Market } from '../models/market';

@Injectable({
    providedIn: 'root'
})
export class MarketsService {

    constructor(private userService: UserService) { }

    getMarkets(): Promise<Market[]> {
        return Promise.resolve(this.mapMarkets(STOCKS));
    }

    private mapMarkets(markets: Array<any>): Market[] {
        return markets.map(market => ({
            id: Number(market.id),
            price: Number(market.price),
            category: String(market.category)
        }));
    }

    buy(market: Market, quantity: number): boolean {
        const userBalance = this.userService.getBalance();
        const total = +(quantity * market.price).toFixed(2);

        return this.userService.decreaseBalance(total)
            && (this.userService.addToStock(market.id, quantity) || true);
    }
}
