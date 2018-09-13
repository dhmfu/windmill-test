import { Market } from './market';

export interface StockItem {
    quantity: number,
    market: Market
};

export interface Stock extends Array<StockItem> {};
