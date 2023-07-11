import React, { useReducer } from "react";
import CartContext from "./cart-context";

//리듀서 함수 정의
const cartRecuder = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalamount =
      state.totalamount + action.item.price * action.item.amount;

    // 배열.findIndex(함수)  -제일 먼저 나오는 조건에 맞는 아이템의 인덱스를 반환
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    // 기존 아이템이 없을 경우는 undefined
    //console.log("기본 배열에 같은게 있어?", existingCartItem);

    let updatedItems;
    if (existingCartItem) {
      //추가한 아이템이 기존에 있는 아이템일 경우
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items]; //기존 객체를 새 배열로
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //추가한 아이템이 기존에 없는 아이템일 경우
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalamount: updatedTotalamount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    // 기존 아이템이 없을 경우는 undefined

    const updatedTotalamount = state.totalamount - existingCartItem.price;
    //총합계에서 현재 아이템 가격을 빼줌

    let updatedItems;
    if (existingCartItem.amount === 1) {
      //1인 상태에서 빼주면 완전히 사라져야 됨
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      updatedItems = [...state.items]; //기존 객체를 새 배열로
      updatedItems[existingCartItemIndex] = updatedItem; // 값을 빼준 기존 아이템
    }
    return {
      items: updatedItems,
      totalamount: updatedTotalamount,
    };
  }
  return defaultCartState;
};

// 리듀서 초기화 정의
const defaultCartState = {
  items: [],
  totalamount: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartRecuder,
    defaultCartState
  );
  //useReducer호출
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };
  // 업데이트 될 객체 - 다이나믹하게 변하는 부분
  const cartContext = {
    items: cartState.items,
    totalamount: cartState.totalamount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
