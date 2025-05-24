const initialState = {
  items: {},
  totalQuantity: 0,
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const updatedTotalQuantity = state.totalQuantity + action.payload.quantity;
      const updatedTotalAmount = state.totalAmount + action.payload.quantity * action.payload.price;
      
      const updatedItems = {
        ...state.items,
        [action.payload.id]: {
          ...action.payload,
          quantity: state.items[action.payload.id]
            ? state.items[action.payload.id].quantity + action.payload.quantity
            : action.payload.quantity,
        },
      };

      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalAmount: updatedTotalAmount,
      };
    }

    case 'REMOVE_FROM_CART': {
      const item = state.items[action.payload];
      if (!item) return state;

      const updatedTotalQuantity = state.totalQuantity - item.quantity;
      const updatedTotalAmount = state.totalAmount - item.quantity * item.price;

      const updatedItems = { ...state.items };
      delete updatedItems[action.payload];

      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalAmount: updatedTotalAmount,
      };
    }

    case 'INCREMENT_ITEM': {
      const item = state.items[action.payload];
      if (!item) return state;

      const updatedTotalQuantity = state.totalQuantity + 1;
      const updatedTotalAmount = state.totalAmount + item.price;

      const updatedItems = {
        ...state.items,
        [action.payload]: {
          ...item,
          quantity: item.quantity + 1,
        },
      };

      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalAmount: updatedTotalAmount,
      };
    }

    case 'DECREMENT_ITEM': {
      const item = state.items[action.payload];
      if (!item) return state;

      if (item.quantity === 1) {
        return {
          ...state,
          items: { ...state.items },
          totalQuantity: state.totalQuantity,
          totalAmount: state.totalAmount,
        };
      }

      const updatedTotalQuantity = state.totalQuantity - 1;
      const updatedTotalAmount = state.totalAmount - item.price;

      const updatedItems = {
        ...state.items,
        [action.payload]: {
          ...item,
          quantity: item.quantity - 1,
        },
      };

      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalAmount: updatedTotalAmount,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
