import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
    selector: 'app-market-filter',
    templateUrl: './market-filter.component.html',
    styleUrls: ['./market-filter.component.css']
})
export class MarketFilterComponent implements OnInit {
    @Input() options: string[];
    @Output() filtered: EventEmitter<RegExp> = new EventEmitter();
    visibleOptions: string[]
    constructor() { }

    ngOnInit() {
        this.visibleOptions = [ ...this.options ];
    }

    onFilterInput(event: KeyboardEvent, value: string) {
        const pattern = new RegExp(value, 'i');
        this.visibleOptions = this.options.filter(category => {
            return category.match(pattern);
        });
        this.filtered.emit(pattern);
    }

    optionSelected(event: MatAutocompleteSelectedEvent) {
        this.filtered.emit(new RegExp(event.option.value, 'i'));
    }

}
