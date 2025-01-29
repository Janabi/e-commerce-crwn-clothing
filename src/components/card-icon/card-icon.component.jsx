import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import { CartIconComponent, ItemCount, ShoppingIcon } from "./card-icon.styles";

const CardIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconComponent onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconComponent>
    )
}

export default CardIcon;
