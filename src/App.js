import React, { Component, Fragment } from 'react';
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
            <div className={this.state.show ? 'show' : 'hide'}>Hello</div>
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