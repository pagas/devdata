import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {API_ROOT} from './api-config'

function App() {
    const [apiResponse, setApiResponse] = useState(0);

    useEffect(()=> {
        callAPI();
        return () => {

        }
    }, [])

    function callAPI() {
        fetch(`${API_ROOT}/testAPI`)
            .then(res => res.text())
            .then(res => setApiResponse(res));
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 class="m-5">test</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>


                API Response : {apiResponse}
            </header>
        </div>
    );
}

export default App;
