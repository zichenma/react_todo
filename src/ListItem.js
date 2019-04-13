import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
    constructor (props) {
        super(props);
        // 性能优化：可以保证只被执行一次，避免无谓渲染
         this.handleClick = this.handleClick.bind(this);
    }
    
    // 性能优化：比对props变化来决定是否渲染
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.item !== this.props.item) {
            return true;
        } 
        return false;
    }

    render() {
        const {item} = this.props;
        return (
            <li>
             {item} <button onClick={this.handleClick}>Delete</button>
                 {/* the same as: */}
                {/* {item} <button onClick={handleItemDelete.bind(this, index)}>Delete</button> */}
            </li>
        )
    }

    handleClick () {
        const {handleItemDelete, index} = this.props;
        handleItemDelete(index);
    }
}

ListItem.propTypes = {
    // can force using isRequired
    test: PropTypes.string.isRequired,
    item: PropTypes.string,
    handleItemDelete: PropTypes.func,
    // index could be number and string both types
    //index: PropTypes.arrayOf(PropTypes.number, PropTypes.string)
    // index could be one of those types
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

ListItem.defaultProps = {
    test: 'Hello world'
}

export default ListItem;


//const ListItem = ({item, handleItemDelete, index}) => {
    //return (
        //<li>
         //{item} <button onClick={() => handleItemDelete(index)}>Delete</button>
             {/* the same as: */}
            {/* {item} <button onClick={handleItemDelete.bind(this, index)}>Delete</button> */}
        //</li>
       
    //)
//}