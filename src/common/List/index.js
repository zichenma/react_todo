import React from 'react';
import { ListWrapper } from './style';


const List = ({items, handleClick,  handleChecked}) => {
   return (
       <ListWrapper>
         {items && items.length > 0 && items.map((item, index) => {
             return (
                 <ListWrapper.item key={`${item.inputValue}${new Date()}${Math.random()}`} isCompleted={item.isCompleted}>
                    <li className="isChecked">{item.inputValue}<input type="checkbox" defaultChecked={item.isCompleted} onClick={e => handleChecked(e, index)}/></li>
                    <button onClick={() => handleClick(index)}>-</button>
                 </ListWrapper.item>
            );
         })}
       </ListWrapper>
   )
}


export default List;
