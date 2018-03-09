import { Cookies } from "js-cookie"

export class Cookie {
    static add (name, value) {
        Cookies.set(name, value)
    }

    static delete (name) {
        Cookies.remove(name)
    }

    static update (name, value) {
        Cookies.set(name, value)
    }

    static read (name) {
        Cookies.get(name)
    }
}