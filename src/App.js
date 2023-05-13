import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotalAmount } from "./features/cartSlice";

function App() {
  // const { cartItems } = useSelector((store) => store.cart);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(calculateTotalAmount());
  // }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CardContainer />
    </main>
  );
}
export default App;
