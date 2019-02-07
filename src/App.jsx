import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    handleClickUpCounter = () => {
        this.setState({ counter: ++this.state.counter });
    };

    handleClickDownCounter = () => {
        this.setState({ counter: --this.state.counter });
    };

    render() {
        const { counter } = this.state;

        console.log(counter);

        return (
            <div>
                <h1>Webpack config from 0!</h1>
                <div>
                    <div className="title">{counter}</div>
                    <button onClick={this.handleClickUpCounter}>Up counter!</button>
                    <button onClick={this.handleClickDownCounter}>Down counter!</button>
                </div>
            </div>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
