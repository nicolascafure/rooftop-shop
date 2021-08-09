import {
  IState,
  IProduct,
  IQuestion,
  IProductCart,
} from "../../interfaces/iShopStore";

type GET_PRODUCTS_HOME = { type: "GET_PRODUCTS_HOME"; payload: IProduct[] };
type GET_PRODUCTS_CATALOGUE = {
  type: "GET_PRODUCTS_CATALOGUE";
  payload: IProduct[];
};
type GET_PRODUCT_QUESTIONS = {
  type: "GET_PRODUCT_QUESTIONS";
  payload: IQuestion[];
};
type FILTER_PRODUCTS = { type: "FILTER_PRODUCTS"; payload: string };
type ADD_PRODUCT_TO_CART = {
  type: "ADD_PRODUCT_TO_CART";
  payload: IProductCart;
};
type DELETE_PRODUCT_CART = { type: "DELETE_PRODUCT_CART"; payload: string };
type RESET_CART = { type: "RESET_CART" };
type STOP_SEARCH = { type: "STOP_SEARCH" };

const INITIAL_STATE: IState = {
  products: [],
  productsCatalogo: [],
  questions: [],
  productsFilter: [],
  searching: false,
  productsCart: [],
};

export const productReducer = (
  state = INITIAL_STATE,
  action:
    | GET_PRODUCTS_HOME
    | GET_PRODUCTS_CATALOGUE
    | GET_PRODUCT_QUESTIONS
    | FILTER_PRODUCTS
    | ADD_PRODUCT_TO_CART
    | DELETE_PRODUCT_CART
    | RESET_CART
    | STOP_SEARCH
) => {
  switch (action.type) {
    case "GET_PRODUCTS_HOME":
      return {
        ...state,
        products: action.payload,
      };

    case "GET_PRODUCTS_CATALOGUE":
      return {
        ...state,
        productsCatalogo: action.payload,
      };

    case "GET_PRODUCT_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
      };

    case "FILTER_PRODUCTS":
      let newProducts = state.productsCatalogo.filter((product) =>
        product.title.includes(action.payload)
      );
      return {
        ...state,
        productsFilter: newProducts,
        searching: true,
      };
    case "STOP_SEARCH":
      return {
        ...state,
        searching: false,
      };

    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        productsCart: [...state.productsCart, action.payload],
      };
    case "DELETE_PRODUCT_CART":
      const newCart = state.productsCart.filter(
        (product) => product.cartId !== action.payload
      );
      return { ...state, productsCart: newCart };

    case "RESET_CART":
      return { ...state, productsCart: [] };
    default:
      return state;
  }
};
