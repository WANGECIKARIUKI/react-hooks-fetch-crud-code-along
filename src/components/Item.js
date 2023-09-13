import React from "react";

function Item({ item }) {

  function handleAddToCartClick () {
    //Add fetch request
    fetch(`http://localhost:4000/items/${item.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isInCart: !item.isInCart,
    }),
  })
    .then((r) => r.json())
    .then((updatedItem) => console.log(updatedItem));
    console.log ("clicked item:", item);
  }
  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
     <button className = {item.isCart ? "remove" : "add"}
     onClick = {handleAddToCartClick} >
      {item.isCart ? "remove From " : "add To"} Cart
     </button>
      <button className="remove" onClick = {handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Item;
