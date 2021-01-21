import React, { Component } from 'react';
// import Edit Modal
// import Delete Model


const FridgeItem = ({ isHousehold, item, editItem, deleteItem }) => {
  const { itemName, shared, fridge, grocery, itemUserId, itemFirstName } = item;
  
  let name;
  let shareable;

  if (isHousehold){
    name = <span> {itemFirstName} </span>;
  } else {
    name = null;
  } 

  if (shared){
    shareable = 
      <div id='shareable'>
        <span>shared</span>
        <img src="../assets/check.png"></img>
      </div>
  } else {
    shareable = null;
  }

  return (
    <div className='ItemCard'>
      <span> {itemName} </span>
      {name}
      {shareable}
      <button id='EditItemBtn' onClick={() => {/* 
      
      event handler to invoke dispatcher to edit 
      
      */ }}
      > Edit
      </button>
      <button id='DeleteItemBtn' onClick={() => {/*
      
      event handler to invoke dispatcher to delete 
      
      
      */ }}
      > Delete
      </button>
    </div>  
  )

}


export default FridgeItem;