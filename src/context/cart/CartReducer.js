const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      const updatedCart = [...state.cart]
      const updatedItemIndex = updatedCart.findIndex(item => item.id === payload.id);
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart, };
    case "PLUS_QUANTITY":
      const newCart2 = state.cart.map(item => {
        if (item.id === payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        } else {
          return { ...item }
        }
      })
      return { ...state, cart: newCart2 };
    case "MINUS_QUANTITY":
      const updatedCart1 = [...state.cart];
      const updatedItemIndex1 = updatedCart1.findIndex(item => item.id === payload);
      const updatedItem = {
        ...updatedCart1[updatedItemIndex1]
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart1.splice(updatedItemIndex1, 1);
      } else {
        updatedCart1[updatedItemIndex1] = updatedItem;
      }
      return { ...state, cart: updatedCart1 };
    case "DELETE_CART_ITEM":
      const newCart4 = state.cart.filter(item => item.id !== payload);
      return { ...state, cart: newCart4 }
    default:
      return state;
  }
};

export default reducer;
