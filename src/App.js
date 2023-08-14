import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";
import React from "react";

const promise = loadStripe(
  "pk_test_51NMZpwSI9H2qoQu1mv96jlydRAMkXBR0G85A6lmTpDvkUB1jneYGgVZJuUJtI2LbNGGIlb0rW0wevkpNcrFfdXJl00PdJb9gPQ"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads..
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS>>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    //   <div className="app">
    //   <Router>
    //     <Routes>

    //       <Route path="/login" element={<Login />} />
    //       <Route path="/orders" element={<Header><Orders /></Header>} />
    //       <Route path="/checkout" element={<Header><Checkout /></Header>} />
    //       <Route path="/payment" element={<Header><Elements stripe={Promise}><Payment /></Elements></Header>} />
    //       <Route path="/" element={<Header><Home /></Header>} />
    //     </Routes>
    //   </Router>
    // </div>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />

          {/* <Route path="/" element={<Header />} /> */}

          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="Header" element={<Header />} /> */}

          <Route path="/payment" element={<Elements stripe={promise}>
          <Payment />
        </Elements>} />


          {/* <Route path="" element={<Header />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Elements stripe={promise}>
          <Payment />
        </Elements> */}
      </Router>
    </div>
  );
}

export default App;
