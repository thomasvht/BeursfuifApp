import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products-https.service';

@Component({
    selector: 'app-kassa',
    templateUrl: './kassa.component.html'
})

export class KassaComponent {
    products$: Observable<Array<any>>;

    constructor(private productsHttpService: ProductsService) {

    }

    ngOnInit() {
        this.products$ = this.productsHttpService.getProducts();
    }
}