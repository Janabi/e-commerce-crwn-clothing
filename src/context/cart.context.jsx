import { createContext, useState, useEffect } from "react";

// helper function to add or modify a cartItems list
const addCartItem = (cartItems, productToAdd) => {
    // find if cart items contains productToAdd
    const hasProductInCartItem = cartItems.find(
        (item) => item.id === productToAdd.id
        );
    // If found, increment quantity
    if (hasProductInCartItem) {
        return cartItems.map((item) => {
            if (item.id === productToAdd.id) {
                item.quantity++;
            }
            return item;
        });
    }

    // return new array with modified cartItems/ new cart item
    return [ ...cartItems, { ...productToAdd, quantity: 1 } ];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const itemExist = cartItems.find((item) => item.id === cartItemToRemove.id);
    // check if quantity equal to 1, if it is remove that item from the cart
    if (itemExist.quantity === 1) {
        return cartItems.filter((item) => item.id !== cartItemToRemove.id);
    }
    // return back cartItems with matching cart item with reduced quantity
    return cartItems.map((item) => 
        item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
        );
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((item) => item.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    totalPrice: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const totalCount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(totalCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }
    
    const clearItemFromCart = (cartItemToRemove) => {
        setCartItems(clearCartItem(cartItems, cartItemToRemove));
    }

    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        cartItems, 
        cartCount, 
        removeItemToCart,
        clearItemFromCart,
        totalPrice, 
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}