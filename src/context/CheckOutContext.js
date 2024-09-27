import { createContext, useReducer, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { CartContext } from './CartContext';

const CheckOutContext = createContext();

const initialState = {
  contactEmail: '',
  billingAddress: {
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  },
  saveInfo: false,
  orderSummary: {
    items: [],
    total: 0,
  },
};

const checkOutReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACT_EMAIL':
      return { ...state, contactEmail: action.payload };
    case 'SET_BILLING_ADDRESS':
      return { ...state, billingAddress: { ...state.billingAddress, ...action.payload } };
    case 'SET_SAVE_INFO':
      return { ...state, saveInfo: action.payload };
    case 'SET_ORDER_SUMMARY':
      return { ...state, orderSummary: action.payload };
    default:
      return state;
  }
};

// Hàm tính tổng tiền dựa trên các item trong giỏ hàng
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const CheckOutProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { state: cartState } = useContext(CartContext);

  const [state, dispatch] = useReducer(checkOutReducer, initialState);

  useEffect(() => {
    // Nếu có user đăng nhập
    if (user && user.id) {
      const orderSummary = JSON.parse(localStorage.getItem(`orderSummary_${user.id}`)) || cartState.items;
      dispatch({
        type: 'SET_ORDER_SUMMARY',
        payload: { items: orderSummary, total: calculateTotal(orderSummary) },
      });
    } else {
      // Nếu không có user, chỉ cập nhật từ giỏ hàng
      dispatch({
        type: 'SET_ORDER_SUMMARY',
        payload: { items: cartState.items, total: calculateTotal(cartState.items) },
      });
    }
  }, [user, cartState.items]);

  useEffect(() => {
    // Nếu có user, lưu orderSummary vào localStorage
    if (user && user.id) {
      localStorage.setItem(`orderSummary_${user.id}`, JSON.stringify(state.orderSummary.items));
    }
  }, [state.orderSummary.items, user]);

  const setContactEmail = (email) => dispatch({ type: 'SET_CONTACT_EMAIL', payload: email });
  const setBillingAddress = (address) => dispatch({ type: 'SET_BILLING_ADDRESS', payload: address });
  const setSaveInfo = (saveInfo) => dispatch({ type: 'SET_SAVE_INFO', payload: saveInfo });

  return (
    <CheckOutContext.Provider value={{ state, setContactEmail, setBillingAddress, setSaveInfo }}>
      {children}
    </CheckOutContext.Provider>
  );
};

export { CheckOutContext, CheckOutProvider };
