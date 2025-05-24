export const addToCart = (item, quantity) => ({
  type: 'ADD_TO_CART',
  payload: {
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
    quantity,
  },
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});

export const incrementItem = (id) => ({
  type: 'INCREMENT_ITEM',
  payload: id,
});

export const decrementItem = (id) => ({
  type: 'DECREMENT_ITEM',
  payload: id,
});
