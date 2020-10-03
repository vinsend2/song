import React, { useState } from "react";
import ItemList from "../itemList";
import gotServic from '../../servives/gotService';
import {withRouter} from 'react-router-dom';


function booksPage (props) {

    const gotService = new gotServic();

    


    return (
      <ItemList
      onItemSelect={(itemId) => {
          props.history.push(itemId)
      }}
      getData={gotService.getAllBooks}
      renderItem={(item) => item.name } />
    )
}

export default withRouter (booksPage);