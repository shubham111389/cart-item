import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://img.icons8.com/avantgarde/1x/shopping-cart--v2.png" />
        <span style={styles.cartCount}> {props.count} </span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 40,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#9C27B0',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
  
    background: 'white',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 1,
    top: -11
  }
};


export default Navbar;