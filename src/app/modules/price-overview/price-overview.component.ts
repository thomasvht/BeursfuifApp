import { Component } from "@angular/core";

@Component({
    selector: 'app-price-overview',
    templateUrl: './price-overview.component.html',
    styleUrls: ['./price-overview.component.scss']
})

export class PriceOverviewComponent {
    products = [
        {name: 'cola', price: '€ 1.50'},
        {name: 'pintje', price: '€ 1.00'},
        {name: 'ice-tea', price: '€ 2.00'}
    ]
}