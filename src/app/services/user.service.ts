import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Market } from '../models/market';
import { Stock } from '../models/stock';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user: User;

    constructor() {
        this.user = {
            balance: 10000.00,
            stock: []
        }
    }

    getBalance(): number {
        return this.user.balance;
    }

    getStock(): Stock {
        return [ ...this.user.stock ];
    }

    decreaseBalance(summ: number): boolean {
        const difference = +(this.user.balance - summ).toFixed(2);
        if (difference >= 0) {
            this.user.balance = difference;
            return true;
        } else {
            return false;
        }
    }

    increaseBalance(summ: number): void {
        this.user.balance += summ;
    }

    increaseStock(market: Market, quantity: number): void {
        let stockItem = this.user.stock.find(
            stockItem => stockItem.market.id == market.id
        );

        if(stockItem) stockItem.quantity += quantity;
        else this.user.stock.push({ market, quantity });
    }

    decreaseStock(marketId: number, quantity: number): boolean {
        const stockItem = this.user.stock.find(stockItem =>
            stockItem.market.id == marketId
        );

        const difference = stockItem.quantity - quantity;
        if (difference > 0) {
            stockItem.quantity = difference;
            return true;
        } else if(difference == 0) {
            this.user.stock = this.user.stock.filter(item => item != stockItem);
            return true;
        } else {
            return false;
        }
    }
}
