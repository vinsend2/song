import React, {Component, useState, useEffect, Children} from 'react';
import gotServic from '../../servives/gotService'
import './itemDetails.css';


const Field = ({item, field, label}) => {        
   
    return (
        <li className="list-group-item d-flex justify-content-between">
        <span className="term">{label}</span>
        <span>{item[field]}</span>        
        </li>
       
    )
}


export {
    Field
}

export default function ItemDetails (props) {

    const gotService = new gotServic();

    const [item, setItem] = useState(null);

    const updateItem = () => {
        
        
        if (!props.itemId) {
            return;
        }
        if (props.children[0].props.field === 'gender') {
        gotService.getCharacter(props.itemId)
            .then((item) => {
                setItem(item);
            });
        }
        if (props.children[0].props.field === 'numberOfPages') {
            gotService.getBooks(props.itemId)
                .then((item) => {
                    setItem(item);
                });
            }
        if (props.children[0].props.field === 'region') {
             gotService.getHouses(props.itemId)
                 .then((item) => {
                    setItem(item);
                  });
            }
    }

    useEffect(() => {
        updateItem();       
    }, []);

    useEffect(() => {
        updateItem();       
    }, [props.itemId]);



    if (!item) {
        return <span className='select-error'>
            Please select a Character
        </span>
    }
    

    const {name} = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                    Children.map(props.children, (child) => {
                        return React.cloneElement(child, {item}) 
                    })
                }
                </ul>
            </div>
        );
   
}