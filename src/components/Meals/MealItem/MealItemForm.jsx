import React, { useRef } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler =(e)=>{
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    //console.log(typeof enteredAmountNumber)
    props.onAddtoCart(enteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount" 
        propsRef={amountInputRef}
        input={{
          id:"amount_"+props.id,
          type:"number",
          min:"1",
          max:"5",
          defaultValue:"1",
          step:"1",
    }} />    
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm