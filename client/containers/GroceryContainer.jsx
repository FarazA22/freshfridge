import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

import GroceryItem from '../components/GroceryItem.jsx';


const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (itemInfoObj) => dispatch(actions.addItem(itemInfoObj)),
    editItem: (itemInfoObj) => dispatch(actions.editItem(itemInfoObj)),
    deleteItem: (itemID) => dispatch(actions.deleteItem(itemID))
  }
}

class GroceryContainer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let groceryItems;

    if (!this.props.householdItems) {
      // render the user grocery list
      const { userID, firstName, userItems, editItem, deleteItem} = this.props;
    
      groceryItems = userItems.map((item, idx) => {
        if (item.grocery) {
        return <GroceryItem
          key={`UG${idx}`} 
          isHousehold={false}
          item={item}
          editItem={editItem}
          deleteItem={deleteItem}
          />
        }
      })  
  
    } else {

      const { householdID, householdName, householdItems, editItem, deleteItem } = this.props;
      
      groceryItems = householdItems.map((item, idx) => {
        if (item.grocery){
        return <GroceryItem
              key={`HF${idx}`}
              isHousehold={true}
              item={item}
              editItem={editItem}
              deleteItem={deleteItem}
          />
        }
      })  
    }


    return (
    <div className='Container'>
      <div className="ContainerHeader">
        <h1>Grocery List</h1>
        <button id='AddItemBtn' onClick={() => {/* 
        invoke the AddItemModal
        pass into the AddItem a property of "location: fridge"
          <AddItem location={'fridge'} addItemHandler={this.addItemHandler} userID={this.props.userID} householdID={this.props.householdID}
        */ }}>
          Add Item
        </button>
      </div>  
      <div className="GroceryList">
        {groceryItems}
      </div>
    </div>
    );
  }
};


export default connect(null, mapDispatchToProps)(GroceryContainer);
// export default GroceryContainer;






/* Original Code

      const mappedItems = items.map((item, index) => {
    return <li key={`type${index}`}>
              {`${item.name}`}
              <span className="align-right">
                <button onClick={() => move(item._id, '\'fridge\'')}>  {/* ** SQL needs string parameters that are going to be concatenated onto a query to have a second pair of single quotes ** }
                <i className="far fa-check-circle"></i>
                </button>
                <button onClick={() => remove(item._id)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </span>
            </li>;
    });



*/