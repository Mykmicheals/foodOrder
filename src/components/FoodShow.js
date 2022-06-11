import React, {
  Fragment,
  useContext,
  useState,
  useEffect,
} from "react";
import meals from "../Database/Database";
import { Icon } from "@iconify/react";
import CartContext from "../store/cartContext";
import Card from "./Card";
import Rodal from "rodal";
import Cart from "./Cart";
import { useCart } from "react-use-cart";
import { Link, useNavigate } from "react-router-dom";
import ModalImage from "react-modal-image";

function FoodShow() {

  const navigate = useNavigate()

  const [userInput, setInput] = useState("");
  const cartCtx = useContext(CartContext);

  const cartHandler = (event) => {
    event.preventDefault();
    cartCtx.cartFunc();
  };

  const inputHandler = (event) => {
    var inputValue = event.target.value.toLowerCase();
    setInput(inputValue);
  };

  const { addItem } = useCart();

  const filteredData = meals.filter((each) => {
    if (userInput === "") {
      return each;
    }

    //return the item which contains the user input
    else {
      return each.name.toLowerCase().includes(userInput);
    }
  });

  useEffect(() => {
    cartCtx.dataHandler(filteredData);
  }, [userInput]);

  const submitHandler = (event) => {
    event.preventDefault()
    navigate('/search')
  }

  return (
    <Fragment>
      <div id="search-bar">
        <form onSubmit={submitHandler}>
          <span>
            <input onChange={inputHandler} placeholder="Search For Meal..." />
            <i>
              <Icon icon="carbon:search" inline={true} />
            </i>
          </span>
          <button type='submit' className='search-btn'>Search</button>

        </form>
      </div>
      <h2 className="header-section">Available Meals</h2>
      <div className="foodShow">
        {meals.map((each) => {
          return (
            <Card key={each.id}>
              <form onSubmit={cartHandler}>
                <ModalImage
                  className="card-image"
                  small={each.image}
                  large={each.image}
                  alt={each.name}
                />

                <div className="card-inner">
                  <p>{each.name}</p>
                  <p className="price">N{each.price.toLocaleString()}</p>
                </div>
                <button
                  type="submit"
                  value={each.id}
                  onClick={() => addItem(each)}
                  className="btn"
                >
                  Add To cart
                </button>
              </form>
            </Card>
          );
        })}
      </div>

      {/* <SearchResult filteredData={filteredData} /> */}


      <Rodal
        className="modals"
        visible={cartCtx.cartOpen}
        onClose={cartCtx.cartFunc}
        closeOnEsc="true"
        animation="slideLeft"
        showMax="true"
      >
        <Cart />
      </Rodal>
    </Fragment>
  );
}

export default FoodShow;
