import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MarketsComponent } from './markets/markets.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
    { path: 'markets', component: MarketsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: '', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
