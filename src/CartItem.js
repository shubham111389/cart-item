import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
              alt="increase"
              className="action-icons"
             
 src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvbOBZQxpxgFGbsiTG13ff4ZKTQFEPKbTqnibkKkc3Kjr4yuYg"
              onClick={() => onIncreaseQuantity(product)}
              />
            <img
              alt="decrease"
              className="action-icons"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSG9STSkZvo7CFfhB82rWSNvvi1HBM4FClXRKlrDo2F9qsgV9Zw"
              onClick={() => onDecreaseQuantity(product)}
              />
              <img
              alt="delete"
              className="action-icons"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGu1_lodybjukkAJyo6bvI9bH-3msMgkLF8mx76ByXlao6huKc"

              onClick={() => onDeleteProduct(product.id)}
              />
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;