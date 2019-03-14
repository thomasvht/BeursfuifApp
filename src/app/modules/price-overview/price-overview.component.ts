import { Component } from "@angular/core";
import { Product } from "src/app/entities/product.entity";
import { ProductsService } from "src/app/services/products-https.service";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-price-overview',
    templateUrl: './price-overview.component.html',
    styleUrls: ['./price-overview.component.scss']
})

export class PriceOverviewComponent {
    products$: Observable<Array<any>>;

    constructor(private productsHttpService: ProductsService) {

    }

    ngOnInit() {
        this.products$ = this.productsHttpService.getProducts();
    }
}
