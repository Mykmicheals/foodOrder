import React, { useContext, useState } from "react";
import CartContext from "../store/cartContext";
import Card from "./Card";

function SearchResult() {
  const [empty, setEmpty] = useState(false);
  const ctx = useContext(CartContext);
  //   const [data, setData] = useState();
  // ctx.filteredData !== "undefined" && console.log(ctx.filteredData.length);

  // setData(ctx.filteredData);
  //   console.log(data);

  if (ctx.filteredData.length > 0) {
    return (
      <div className="search">
        {ctx.filteredData !== "undefined" && (
          <div className="foodShow">
            {console.log(ctx.filteredData.length)}

            {ctx.filteredData.map((each) => {
              return (
                <Card key={each.id}>
                  {/* <form onSubmit={cartHandler}> */}
                  <form>
                    <img className="card-image" src={each.image} alt="rice" />
                    <div className="card-inner">
                      <p>{each.name}</p>
                      <p className="price">N{each.price}</p>
                    </div>
                    <button
                      type="submit"
                      value={each.id}
                      // onClick={() => addItem(each)}
                      className="btn"
                    >
                      Add To cart
                    </button>
                  </form>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    );
  } else {
    return <p className="search">Search result not found</p>;
  }
}

export default SearchResult;
