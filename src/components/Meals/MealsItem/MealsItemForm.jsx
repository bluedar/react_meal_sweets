import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealsItemForm.module.css";

const MealsItemForm = (props) => {
  //ref를 통해서 입력된 값을 받아옴(특정DOM을 선택할때 사용)
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enterdAmount = amountInputRef.current.value;
    const enterdAmountNumber = +enterdAmount; //숫자열로 바꿔줌
    //console.log(typeof enterdAmountNumber);
    //유효성 검사
    if (
      enterdAmount.trim().length === 0 ||
      enterdAmount < 1 ||
      enterdAmount > 5
    ) {
      return;
    }
    //수량을 onAddToCart의 인자값으로 넘기
    props.onAddToCart(enterdAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Aomunt"
        ref={amountInputRef}
        input={{
          id: "Amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      {/* <input
        type="number"
        min="1"
        max="5"
        deafaultValue="1"
        step="1"
        id={props.id}
      /> */}
      <button>+Add</button>
    </form>
  );
};

export default MealsItemForm;
