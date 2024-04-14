import { useContext } from "react"

import Modal from "./UI/Modal"
import CartContext from "../store/CartContext"
import { currencyFormatter } from "../util/formatting"
import Input from "./UI/Input"

export default function Checkout() {
   const cartCtx = useContext(CartContext)
   
   const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)
   
   return (
        <Modal>
            <form>
                <h2>Checkoout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            </form>

            <Input label= "Full Name" type="text" />
        </Modal>
    )
}