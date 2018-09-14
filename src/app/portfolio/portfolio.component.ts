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
    cols = 5;
    get totalPrice(): number {
        return this.stock.reduce((acc, stockItem) => (
            acc + stockItem.market.price * stockItem.quantity
        ), 0);
    }

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.stock = this.userService.getStock();
        this.setCols();
    }

    removeItem(id: number): void {
        this.stock = this.stock.filter(stockItem => stockItem.market.id != id);
    }

    setCols(): void {
            this.cols = (window.innerWidth >= 1360) ? 4 :
                            (window.innerWidth >= 1024) ? 3 :
                            (window.innerWidth >= 768) ? 2 : 1;
    }
}
