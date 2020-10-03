import React, {Component, useState, useEffect} from 'react';

import Spinner from '../../components/spinner';
import './itemList.css';
import PropTypes from 'prop-types';

function ItemList (props) {

   
    



    const renderItems = (arr) => {
        return arr.map((item) => {   
            const {id} = item;
            const label = props.renderItem(item);        
            return (
                <li 
                key={id}
                onClick={() => props.onItemSelect(id)}
                className="list-group-item">
                   {label}
                 </li>
            )
        });
    } 

    const {data} = props;
    console.log(data);
    const items = renderItems(data);
   
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    
}

ItemList.defaultProps = {
    onItemSelect: () => {}
}
ItemList.propTypes = {
    onItemSelect: PropTypes.func,   
}

const f = () => {
    return function (props) {
        
    const [data, dataState] = useState(
        null
     );
 
     useEffect(() => {       
 
         props.getData()
             .then((data) => {
                 dataState(data)
             } );
             
           
     },[]); 

        useEffect(() => {
            console.log(props);
        })

        if (!data) {
            return <Spinner></Spinner>
        }
        return <ItemList {...props} data={data}></ItemList>
    }
}

export default f();