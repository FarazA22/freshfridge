import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

import FridgeItem from "../components/FridgeItem.jsx";
// import AddItem from "../components/AddItem.jsx"

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (itemInfoObj) => dispatch(actions.addItem(itemInfoObj)),
    editItem: (itemInfoObj) => dispatch(actions.editItem(itemInfoObj)),
    deleteItem: (itemID) => dispatch(actions.deleteItem(itemID))
    // update item (by double clicking on item?)
  }
}
class FridgeContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let fridgeItems = [];


    if (!this.props.householdItems) {
      // render the user page 
      const { userID, firstName, userItems, editItem, deleteItem  } = this.props;
      
      userItems.map((item, idx) => {
        if (item.fridge){
          fridgeItems.push(
          <FridgeItem 
            key={`UF${idx}`}
            isHousehold={false}
            item={item}
            editItem={editItem}
            deleteItem={deleteItem}
          />)
        }

      })

    } else {
      const { householdID, householdName, householdItems, editItem, deleteItem } = this.props;

      householdItems.forEach((item, idx) => {
        if (item.fridge){
          fridgeItems.push(
            <FridgeItem
              key={`HF${idx}`}
              isHousehold={true}
              item={item}
              editItem={editItem}
              deleteItem={deleteItem}
            />)
        }
      })
    }

    return (
    <div className="FridgeContainer">
      <h1> Fridge </h1>
      <button id='AddItemBtn' onClick={() => {/*  
        invoke the AddItemModal
        pass into the AddItem a property of "location: fridge"
        <AddItem location={'fridge'} addItemHandler={this.addItemHandler} userID={this.props.userID} householdID={this.props.householdID}
      */}}>
        </button>
      <div className='FridgeList'>  
      {fridgeItems}
      </div>
    </div>
    );

  }

};


export default connect(null, mapDispatchToProps)(FridgeContainer);
//export default FridgeContainer;

/*

*/
