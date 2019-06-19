import { Component } from "@angular/core";
import { ProductsService } from "src/app/services/products-https.service";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-price-edit',
    templateUrl: './price-edit.component.html',
    styleUrls: ['./price-edit.component.scss']
})

export class PriceEditComponent {
    products$: Observable<Array<any>>;
    form: FormGroup;

    constructor(
        private productsHttpService: ProductsService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService) {
        this.form = formBuilder.group({
            id: [null],
            name: [''],
            price: [null]
        });
    }

    ngOnInit() {
        this.products$ = this.productsHttpService.getProducts();
        if (this.form !== null) {
            this.form.reset();
        }
    }

    onSubmit() {
        let data = Object.assign({}, this.form.value);
        if (!data.id) {
            data.previous_price = data.price;
            data.trend = 'SAME';
            this.productsHttpService.addProduct(data);
        } else  {
            if (data.previous_price < data.price) {
                data.trend = 'DECREASED';
            } else {
                data.trend = 'RAISED';
            }
            // set previous price of data to price from products$

            this.productsHttpService.updateProduct(data, data.id)
        }
        this.form.reset();
        this.toastr.success('Product succesfully added!');
    }

    onEdit(product) {
        this.form.controls.id.setValue(product.id);
        this.form.controls.name.setValue(product.name);
        this.form.controls.price.setValue(product.price);
    }

    onDelete(id: string) {
        if (confirm('Are you sure you want to delete this product?')) {
            this.productsHttpService.deleteProduct(id);
            this.toastr.warning('Product successfully deleted.');
        }
    }
}