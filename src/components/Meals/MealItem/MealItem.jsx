import React, { useContext } from 'react'
import MealItemForm from './MealItemForm';
import classes from "./MealItem.module.css";
import CartContext from '../../../store/cart-context' 


const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  //앞의 $는 문자열. ${props.price}외부에서 가져온 props
  //toFixed(n)  -소수점 n번째 자리까지만 출력

  const addToCartHandler =(amount)=>{
    console.log('수량 가져와짐??', amount);
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price,
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>  
      <div><MealItemForm id={props.id} onAddtoCart={addToCartHandler}/></div>    
    </li>
  )
}

export default MealItem