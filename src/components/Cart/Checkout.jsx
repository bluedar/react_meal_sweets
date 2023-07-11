import React from 'react'
import classes from './Checkout.module.css'

const Checkout = (props) => {

  const confirmHandler=(e)=>{
    e.preventDefault();
  }


  return (
    <form className={classes.form} onSubmit={confirmHandler} >
      <div className={classes.control}>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">주소</label>
        <input type="text" id="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="tel">핸드폰 번호(숫자만 11자리)</label>
        <input type="text" id="tel" />
      </div>
      <div className={classes.action}>
        <button className={classes['button-outline']} onClick={props.onClick}>Cancel</button>
        <button className={classes.button}>Confirm</button>
      </div>


    </form>
  )
}

export default Checkout