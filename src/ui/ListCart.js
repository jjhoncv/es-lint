import { Session } from "./../model/Session"
import _ from "lodash"

_.templateSettings = {
    evaluate: /{{([\s\S]+?)}}/g,
    interpolate: /{{=([\s\S]+?)}}/g,
    escape: /{{-([\s\S]+?)}}/g
}

export class ListCart {

    constructor(list, tpl) {
        this.list = document.querySelector(list)
        this.tpl = document.querySelector(tpl)
        this.init()
    }

    catchDom () {
        let session = Session.instance()
        let products = session.shoppingCart.getProducts()
        let productsList = _.template(this.tpl.innerHTML)
        this.list.innerHTML = productsList(products)

        this.list.querySelector("form").addEventListener("submit", this.submit)
    }

    submit(e) {
        e.preventDefault()
        let session = Session.instance()
        session.shoppingCart.delProduct(this.name.delete)
    }

    init() {
        this.catchDom()
        this.suscribeEvents()
    }
}