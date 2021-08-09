import { IStore } from "../../interfaces/iShopStore";
import ProductCart from "../common/ProductCart";
import Swal from "sweetalert2";
import { resetCart } from "../../redux/actions/product";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { stopSearch } from "../../redux/actions/product";

const Cart: React.FunctionComponent = () => {
  const cart = useSelector((state: IStore) => state.shopStore.productsCart);
  const dispatch = useDispatch();
  dispatch(stopSearch());

  const buyProducts = () => {
    Swal.fire({
      title: `Estas seguro de comprar ${cart.length} ${
        cart.length == 1 ? "producto" : "productos"
      }?`,
      showCancelButton: true,
      confirmButtonText: `Comprar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Muchas gracias por tu compra", "", "success");
        dispatch(resetCart());
      }
    });
  };
  return (
    <>
      <div className="flex-center">
        {cart.length === 0 ? (
          <h2>No hay productos en el carrito</h2>
        ) : (
          <>
            {" "}
            <h2>Carrito de compras</h2>
            <div className="container-cart">
              {cart.map((product) => (
                <ProductCart key={product.cartId} product={product} />
              ))}
              <button className="button-buy" onClick={buyProducts}>
                Comprar
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
