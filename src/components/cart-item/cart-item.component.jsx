import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

const CartItem = ({ cartItem: { name, imageUrl, quantity, price } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
