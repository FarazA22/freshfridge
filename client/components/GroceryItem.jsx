import React, { Component } from 'react';

const GroceryItem = ({ key, isHousehold, item, editItem, deleteItem }) => {
  const { itemName, shared, fridge, grocery, itemUserId, itemFirstName } = item;
  
  let name;

  if (isHousehold) {
    name = <span> {itemFirstName} </span>; 
  } else {
    name = null;
  } 

  return (
    <div className = 'GroceryItemCard' key={`G${index}`}  >
      <span> 
        {itemName}   
        {name}
        {shareable}
      </span>
      <button id='MoveToFridgeBtn'
          onClick={() => {/* 
            * put a fridge image
            * event handler -> to invoke the dispatcher to create 
          */}}> 
      </button>
      <button id='EditItemBtn' onClick={() => {/* event handler to invoke dispatcher to edit */ }}>
      </button>
      <button id='DeleteItemBtn' onClick={() => {/* event handler to invoke dispatcher to delete */ }}>
      </button>
    </div>
  )
};

export default GroceryItem;