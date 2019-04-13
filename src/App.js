import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';

class App extends Component {

    state = {
        list: []
    };

    constructor(props) {
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    render () {
        return (
        <Fragment>
         <TransitionGroup>
            {
                this.state.list.map((item, index) => {
                    return (
                        <CSSTransition
                            timeout={1000}
                            classNames='fade'
                            unmountOnExit
                            onEntered={(el) => el.style.color='blue'}
                            appear={true}
                            key={index}
                        >
                        <div ><h1>{item}</h1></div>
                        </CSSTransition>
                    )
                })
            }
         </TransitionGroup>
        <button onClick={this.handleAddItem}>Toggle</button>
        </Fragment>
        );
    }

    handleAddItem() {
        this.setState(preState => {
            return {
                list: [...preState.list, 'item']
            }
        })
    }
}

export default App;