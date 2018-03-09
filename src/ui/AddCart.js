import { Session } from "./../model/Session"
import { Product } from "./../model/Product"

export class AddCart {
    constructor (form) {
        this.form = document.querySelector(form)
        this.init()
    }

    suscribeEvents () {
        this.form.addEventListener("submit", this.submit)
    }

    submit (e) {
        e.preventDefault()
        let session = Session.instance()
        session.shoppingCart.addProduct(
            new Product(
                this.name.value,
                this.name.amount,
                this.name.price
            )
        )
    }

    init (){
        this.suscribeEvents()
    }
}