import { Cookie } from "./Cookie"
import { Product } from "./Product"

export class ProductsCookies {
    constructor () {
        this.products = []
    }
    add (product) {
        let products = JSON.parse(Cookie.read("products"))
        products.push(product)
        Cookie.add("products", JSON.stringify(products))
    }

    getAll () {
        let products = JSON.parse(Cookie.read("products"))
        this.products = products.map((product) => {
            return new Product(product.id,
                product.name,
                product.amount,
                product.price
            )
        })
    }

    delete (id) {
        let products = JSON.parse(Cookie.read("products"))
        Cookie.update("products", JSON.stringify(products.filter((el) => el.id !== id)))
    }

    getProduct (id) {

    }
}