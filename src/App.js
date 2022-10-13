import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartData, sendCartData } from './store/cartActions';
import Notification from './components/UI/Notification';

let isInitial = true

function App() {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch])

  useEffect(() => {
    if(isInitial){
      isInitial = false
      return
    }
    if(cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])

  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
