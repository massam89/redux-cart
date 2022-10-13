import { uiActions } from "./uiSlice"
import { cartActions } from "./cartSlice"

export const sendCartData = (cart) => {
  return async(dispatch) => {

    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'sending ...', 
      message: 'sending data'
    }))

    await fetch('https://react-http-850ff-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify({items: cart.items || [], totalQuantity: cart.totalQuantity})
    }).then(response => {

      if(!response.ok){
        throw new Error('Error')
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'success!', 
        message: 'sending data was successfuly'
      }))
    }).catch(() => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'error!', 
        message: 'sending data was failed'
      }))
    })

  }
}

export const getCartData = () => {
  return async dispatch => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'getting data ...', 
      message: 'getting data'
    }))
    
    await fetch('https://react-http-850ff-default-rtdb.firebaseio.com/cart.json')
    .then(response => {

      if(!response.ok){
        throw new Error('error')
      }     

      return response.json()
    })
    .then(data => {
      dispatch(cartActions.replaceCard(data))
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'success!', 
        message: 'getting data from server is succesfully'
      }))
    })
    .catch((error) => {
      console.log(error);
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'error!', 
        message: 'getting data was failed, Turn on VPN'
      }))
    })
  }
}