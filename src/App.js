import React from 'react';
import JsonValidator from './JsonValidator';

function App() {
    return (
        <div className="App">
            <JsonValidator/>
            <div className="developer">
                <span>Developed by </span>
                <a href="https://www.linkedin.com/in/krushnna" target="_blank" rel="noopener noreferrer">
                    <img src="/zoro.jpeg"
                         alt="Krushnna" />
                    krushnna
                </a>
            </div>
        </div>
    );
}

export default App;
