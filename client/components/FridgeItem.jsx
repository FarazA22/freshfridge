import React, { Component } from 'react';
// import Edit Modal
// import Delete Model


const FridgeItem = ({ key, isHousehold, item, editItem, deleteItem }) => {
  const { itemName, shared, fridge, grocery, itemUserId, itemFirstName } = item;
  
  let name;
  let shared;
  
  if (isHousehold){
    name = <span> {itemFirstName} </span>;

  } else {
    name = null;

  } 

  return (
    <div className='fridgeItemCard' key={`F${index}`}>
      <span> {itemName} </span>
      {name}
      {shareable}
      <button id='EditItemBtn' onClick={() => {/* 
      
      event handler to invoke dispatcher to edit 
      
      */ }}>
      </button>
      <button id='DeleteItemBtn' onClick={() => {/*
      
      event handler to invoke dispatcher to delete 
      
      
      */ }}>
      </button>
    </div>  
  )

}


export default FridgeItem;