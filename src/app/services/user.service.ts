import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Market } from '../models/market';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user: User;

    constructor() {
        this.user = {
            balance: 10000.00,
            stock: {}
        }
    }

    getBalance(): number {
        return this.user.balance;
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

    addToStock(marketId: number, quantity: number): void {
        if (this.user.stock[marketId]) {
            this.user.stock[marketId] += quantity;
        } else {
            this.user.stock[marketId] = quantity;
        }
    }
}
