import React, { useState } from "react";
import ItemList from "../itemList";
import gotServic from '../../servives/gotService'
import ItemDetails, {Field} from "../itemDetails";
import RowBlock from '../rowBlock'


export default function HousesPage () {

    const gotService = new gotServic();

    const [selectHouse, setSelectHouse] = useState(1);

    const onItemSelect = (id) => {
        setSelectHouse(id);        
       
      }

      const itemList = (
        <ItemList
        onItemSelect={onItemSelect}
        getData={gotService.getAllHouses}
        renderItem={(item) => item.name } />
      )

      const itemDetails = (
        <ItemDetails itemId={selectHouse}>
            <Field field='region' label='Region'></Field>
            <Field field='words' label='Words'></Field>
            <Field field='titles' label='Titles'></Field>  
            <Field field='ancestralWeapons' label='Ancestral Weapons'></Field>   
            <Field field='overlord' label='Overlord'></Field>             
        </ItemDetails>
   
      )

    return (
      <RowBlock left={itemList} right={itemDetails}></RowBlock>
    )
}

