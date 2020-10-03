import React, { useState } from "react";
import ItemList from "../itemList";
import gotServic from '../../servives/gotService'
import ItemDetails, {Field} from "../itemDetails";
import RowBlock from '../rowBlock'


export default function characterPage () {

    const gotService = new gotServic();

    const [selectChar, setSelectChar] = useState(130);

    const onItemSelect = (id) => {
        setSelectChar(id);
       
      }

      const itemList = (
        <ItemList
        onItemSelect={onItemSelect}
        getData={gotService.getAllCharacters}
        renderItem={(item) => `${item.name} (${item.gender})`} />
      )

      const charDetails = (
        <ItemDetails itemId={selectChar}>
            <Field field='gender' label='Gender'></Field>
            <Field field='born' label='Born'></Field>
            <Field field='died' label='Died'></Field>
            <Field field='culture' label='Culture'></Field>
        </ItemDetails>
   
      )

    return (
      <RowBlock left={itemList} right={charDetails}></RowBlock>
    )
}