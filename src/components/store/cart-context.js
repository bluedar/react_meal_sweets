import React from "react";

//컨텍스트를 만듦, 컴포넌트처럼 쓰임, 데이타가 있음
const CartContext = React.createContext({
  //기본값
  items: [], //아이템이 들어있는 배열
  totalamount: 0, //아이템들의 총 합계가격
  addItem: (item) => {},
  removeItem: (id) => {},
});
//장바구나 항목 초기값
export default CartContext;
