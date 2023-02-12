import React from 'react';

class CartItem extends React.Component{
   constructor () {
    super();
    this.state = {
        price:15000,
        title: 'Mobile Phone',
        qty: 1,
        img: ''
    }
    //this.increaseQuantity = this.increaseQuantity.bind(this);
   }
   
   increaseQuantity = () => {
    console.log('this',this.state);
   }
    render(){
        const {price,title,qty} = this.state;
    return(
<div className='cart-item'>
    <div className='left-block'>
        <img style={styles.image} />
    </div>
    <div className='right-block'>
        <div style={{fontSize:25}}>{title}</div>
        <div style={{Color: '#777'}}>Rs {price}</div>
        <div style={{Color: '#777'}}>qty: {qty}</div>
     <div className='cart-item-actions'>
    {/*Button*/}
    <img 
    alt='increase' 
    className='action-icon' 
    src='https://cdn-icons-png.flaticon.com/128/3914/3914248.png' 
    onClick={this.increaseQuantity}
    />
    <img 
    alt='derease' 
    className='action-icon' 
    src='https://cdn-icons-png.flaticon.com/128/9585/9585399.png' 
    />
    <img 
    alt='delete' 
    className='action-icon' 
    src='https://cdn-icons-png.flaticon.com/128/3917/3917242.png' 
    />
    </div>
  </div>
</div>
    );
   } 
}
const styles = {
    image: {
   height: 110,
   width: 110,
   background: '#ccc'
    }

}
export default CartItem;