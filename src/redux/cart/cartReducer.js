import * as actionTypes from './actionTypes';

const initialState = {
  items: [],
  total: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_CART:
    //   return {
    //     ...state,
    //     items: [...state.items, action.payload]
    //   }

    case actionTypes.ADD_TO_CART:
      // checking item existence in the cart
      const inCart = state.items.some(item => item.id === action.payload.id);
      // checking if the item exist and selected
      const itemChecked = state.items.some(item => item.itemChecked === 1 && item.id === action.payload.id);
      if (inCart) {
        // already in cart, shallow copy cart items
        if (itemChecked) {
          return {
            ...state,
            items: state.items.map(item => item.id === action.payload.id ? {
              // found item, shallow copy item and update quantity property
              ...item,
              itemQty: item.itemQty + action.payload.itemQty,
            } : item),
            total: state.total + action.payload.price * action.payload.itemQty
          }
        } else {
          return {
            ...state,
            items: state.items.map(item => item.id === action.payload.id ? {
              // found item, shallow copy item and update quantity property
              ...item,
              itemQty: item.itemQty + action.payload.itemQty,
            } : item),
          }
        }

      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        }
      }

    case actionTypes.REMOVE_FROM_CART:
      if (action.payload.itemChecked === 1) {
        return {
          ...state,
          total: state.total - action.payload.price * action.payload.itemQty,
          items: state.items.filter(item => item.id !== action.payload.id),
        }
      } else {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        }
      }

    case actionTypes.ADD_ITEM_QTY:
      if (action.payload.itemChecked === 1) {
        return {
          ...state,
          items: state.items.map(item => item.id === action.payload.id ? {
            // found item, shallow copy item and update quantity property
            ...item,
            itemQty: item.itemQty + 1,
          } : item),
          total: state.total + action.payload.price
        }
      } else {
        return {
          ...state,
          items: state.items.map(item => item.id === action.payload.id ? {
            // found item, shallow copy item and update quantity property
            ...item,
            itemQty: item.itemQty + 1,
          } : item),
        }
      }

    case actionTypes.SUBTRACT_ITEM_QTY:
      if (action.payload.itemChecked === 1) {
        return {
          ...state,
          items: state.items.map(item => item.id === action.payload.id ? {
            // found item, shallow copy item and update quantity property
            ...item,
            itemQty: item.itemQty - 1,
          } : item),
          total: state.total - action.payload.price
        }
      } else {
        return {
          ...state,
          items: state.items.map(item => item.id === action.payload.id ? {
            // found item, shallow copy item and update quantity property
            ...item,
            itemQty: item.itemQty - 1,
          } : item),
        }
      }

    case actionTypes.SELECTED_ITEMS:
      if (action.payload.itemChecked === 1) {
        return {
          ...state,
          items: state.items.map(item => item.id === action.payload.id ? {
            // found item, shallow copy item and update quantity property
            ...item,
            itemChecked: item.itemChecked === 1 ? 0 : 1
          } : item),
          total: state.total - action.payload.price * action.payload.itemQty
        }

      } else {
        return {
          ...state,
          items: state.items.map(item => item.id === action.payload.id ? {
            // found item, shallow copy item and update quantity property
            ...item,
            itemChecked: item.itemChecked === 0 ? 1 : 0
          } : item),
          total: state.total + action.payload.price * action.payload.itemQty
        }
      }

    case actionTypes.REMOVE_ALL_ITEMS:
      return {
        ...state,
        items: []
      }

    default:
      return state
  }
}

export default cartReducer;