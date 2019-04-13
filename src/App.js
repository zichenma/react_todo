import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

class App extends Component {

    state = {show: true};

    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    render () {
        return (
        <Fragment>
            <CSSTransition
                in={this.state.show}
                timeout={1000}
                classNames='fade'
                {/* unmountOnExit 可以将DOM删除，当完成动画后 */}
                unmountOnExit
                onEntered={(el) => el.style.color='blue'}
                appear={true}
            >
                <h1>Hello</h1>
            </CSSTransition>
            <button onClick={this.handleToggle}>Toggle</button>
        </Fragment>
        );
    }

    handleToggle() {
        this.setState({
            show: this.state.show = !this.state.show
        })
    }
}

export default App;