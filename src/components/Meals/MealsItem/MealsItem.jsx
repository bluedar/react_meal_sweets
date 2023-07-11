import React, { useContext } from "react";
import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../store/cart-context";
/* const DUMMY_MEALS =
 [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
 */
/*
meal은  DUMMY_MEALS의 각 아이템
 */
/*
props = {
  key:{meal.id}
  id:{meal.id}
  name:{meal.name}
  description:{meal.description}
  price:{meal.price}
}
*/
const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$ ${props.price.toFixed(2)}`;

  //컨텍스트에 전달하는 함수(인자값은 MealItemForm에서 vlaue를 받아옴)
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      amount: amount,
      price: props.price,
      name: props.name,
      id: props.id,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
