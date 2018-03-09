import { User } from "./User"
import { ShoppingCart } from "./ShoppingCart"

export class Session {
    static instance () {
        if (!this.instance) {
            this.instance = new Session()
        }
        return this.instance
    }

    constructor () {
        this.user = new User("Invitado")
        this.shoppingCart = new ShoppingCart()
    }

}