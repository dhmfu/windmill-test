import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

import { Stock } from '../models/stock';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
    stock: Stock;
    get totalPrice(): number {
        return this.stock.reduce((acc, stockItem) => (
            acc + stockItem.market.price * stockItem.quantity
        ), 0);
    }

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.stock = this.userService.getStock();
    }

    removeItem(id: number): void {
        this.stock = this.stock.filter(stockItem => stockItem.market.id != id);
    }

}
