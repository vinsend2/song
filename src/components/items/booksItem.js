import React, { useState } from "react";
import gotServic from '../../servives/gotService'
import ItemDetails, {Field} from "../itemDetails";

export default function BooksItem (props) {
    
    return (
     <ItemDetails itemId={props.bookId}>
        <Field field='numberOfPages' label='Number of Pages'></Field>
        <Field field='publisher' label='Publisher'></Field>
        <Field field='released' label='Released'></Field>            
     </ItemDetails>
    )
}