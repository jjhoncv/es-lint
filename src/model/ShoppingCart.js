import { ProductsCookies } from "./ProductsCookies"

export class ShoppingCart {
    constructor () {
        this.products = new ProductsCookies()
    }

    addProduct(product) {
        this.products.add(product)
    }

    getProducts() {
        return this.products.getAll()
    }

    delProduct(id) {
        this.products.delete(id)
    }

    total() {
        return this.getProducts().reduce((p, c) => p + c)
    }
}