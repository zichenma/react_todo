import React from 'react';
import ListItem from './ListItem';


const List = ({list, handleItemDelete}) => {
    const renderedList = list.map((item, index) => {
        return (
        <ListItem key={index} item={item.value} index={index} handleItemDelete={handleItemDelete}></ListItem>
        )
    })
    return (
        <div>
            <ul>
                {renderedList}
            </ul>
        </div>
    )
}

export default List;