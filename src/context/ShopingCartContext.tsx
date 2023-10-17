import {useContext,createContext,ReactNode,useState} from 'react'
import ShoppingCart from '../components/pages/shop/ShoppingCart';
interface ShoppingCartProviderProps{
    children:ReactNode
}

interface shopingCartContext {
    getItemQuantity: (id:number) => number;
    increaseCartQuantity: (id:number) => void;
    decreaseCartQuantity: (id:number) => void;
    removeFromCart: (id:number) => void;
    openCart: () => void;
    closeCart: () => void;
    cartQuantity:number
    cartItems: CartItem[];
}
interface CartItem{
    id:number;
    quantity:number;
}
const ShopingCartContext = createContext({} as shopingCartContext)

export function useShopingCart(){
    return  useContext(ShopingCartContext)
}

export function ShoppingCartProvider( {children}: ShoppingCartProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState(false)


    const cartQuantity = cartItems.reduce((quantity,item) => item.quantity + quantity,0)


    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)


    function getItemQuantity(id:number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id:number) {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity: 1}]
            }else{
                return currItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1 }
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity (id:number) {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            }else{
                return currItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1 }
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id:number){
        setCartItems(currItems => {
           return currItems.filter(item => item.id !== id)
        })
    }



    return(
    <ShopingCartContext.Provider value={{getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart,openCart,closeCart,cartItems,cartQuantity}}>
        {children}
        <ShoppingCart isOpen={isOpen} />
    </ShopingCartContext.Provider>
    )
}