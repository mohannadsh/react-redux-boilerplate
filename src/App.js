import React, {Component} from "react";
import "./styles/app.scss";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Here is the start page of your app!
                    </p>
                    <p>
                        This environment is {process.env.REACT_APP_ENV}
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
