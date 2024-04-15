import { createContext, useReducer } from "react";


const CartContext = createContext({

    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {}
})

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findInex((item) => item.id === action.item.id)

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...state.items[existingCartItemIndex],
                quantity: existingItem.quantity + 1
            }
            updatedItem[existingCartItemIndex] = updatedItem
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }
    
     return {...state, items: updatedItems}
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findInex((item) => item.id === action.item.id)
      
        const existingCartItem = state.items[existingCartItemIndex]

        if(existingCartItem === 1) {
            const updatedItems = [...state.items];
            updatedItems.splice(existingCartItemIndex, 1)
        } else {
            const updatedItem = { 
                ...existingCartItem, 
                quantity: existingCartItem.quantity - 1,
            }
            updatedItem[existingCartItemIndex] = updatedItem
        }
       
        return {...state, items: updatedItems}
    }

   if(action.type === "CLEAR_CART") {
    return {...state, items: [] };
    
   }

    return state;
}


export function CartContextProvider({ children }) {
  const [ cart, dispatchCartAction ] = useReducer(cartReducer, { items: [] });
  
  
  
  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item })
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id })
  }

  function clearCart() {
    dispatchCartAction({ type: 'CLEAR_CART' })
  }
  
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
}

  
  return <CartContextProvider>{children}</CartContextProvider>
}


export default CartContext;