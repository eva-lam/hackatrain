import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import ThemeSelector from './ThemeSelector.js';

// const app_ID = process.env.APP_ID;
const app_ID = 'aveUqmj3cKHztb5S66S9'; 
// const app_CODE = process.env.APP_CODE;
const app_CODE = '6HiYWuJlkP2u1gQn0AvAnw'; 
const AMS_lat="52.3680"; 
const AMS_long="4.9036"; 


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'normal.day',
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(evt) {
        evt.preventDefault();

        var change = evt.target.id;
        console.log('selected ' + change);
        this.setState({
            "theme": change,
        });
    }

    render() {
        return (
            <div className="App">
              <h1>Route and Parking Planning for Autonomous Vehicles</h1>
                <Map
                    app_id={app_ID}
                    app_code={app_CODE}
                    lat={AMS_lat}
                    lng={AMS_long}
                    zoom="12"
                    theme={ this.state.theme }
                />
                {/* <ThemeSelector changeTheme={ this.onChange } /> */}
                <h3>satisfaction rate of your experience</h3>
            </div>
        );
    }
}

export default App;