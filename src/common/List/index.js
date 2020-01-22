import React from 'react';
import { ListWrapper } from './style';


const List = ({items, handleClick, isCompleted, handleChecked}) => {
   return (
       <ListWrapper>
         {items && items.length > 0 && items.map((item, index) => {
             return (
                 <ListWrapper.item key={`${item.inputValue}${new Date()}${Math.random()}`}>
                    <li>{item.inputValue}<input type="checkbox" onClick={() => handleChecked(index)}/></li>
                    <button onClick={() => handleClick(index)}>-</button>
                 </ListWrapper.item>
            );
         })}
       </ListWrapper>
   )
}


export default List;
