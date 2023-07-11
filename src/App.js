import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvide from './store/CartProvide';
import './App.css';

function App() {
  const [cartInShown, setCartInShown] = useState(false)

  //모달 보이게 하는 함수
  const showCartHandler=()=>{
    setCartInShown(true)
  } 
  //모달 안보이게 하는 함수
  const hideCartHandler=()=>{
    setCartInShown(false)
  } 

  return (
    <CartProvide>
      {cartInShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvide>
  );
}

export default App;
