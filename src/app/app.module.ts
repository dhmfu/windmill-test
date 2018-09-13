import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MarketsComponent } from './markets/markets.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BuyMarketComponent } from './markets/buy-market/buy-market.component';
import { FormsModule }   from '@angular/forms';
import { SellMarketComponent } from './portfolio/sell-market/sell-market.component';

@NgModule({
    declarations: [
        AppComponent,
        MarketsComponent,
        PortfolioComponent,
        BuyMarketComponent,
        SellMarketComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatGridListModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
