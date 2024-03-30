import React, { useState } from 'react';
import axios from 'axios';

const JsonValidator = () => {
    const [jsonData, setJsonData] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('https://json-validation-using-springboot-production.up.railway.app/api/chat', {
                question: jsonData
            });
            setResponse(response.data.response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ background: 'linear-gradient(to bottom right, #ff8a00, #da1b60)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ color: 'white' }}>JSON Validator</h1>
            <textarea
                rows="10"
                cols="50"
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                placeholder="Enter JSON data here"
                style={{ marginBottom: '20px' }}
            ></textarea>
            <button
                onClick={handleSubmit}
                style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                disabled={loading || jsonData.trim() === ''}
            >
                {loading ? 'Loading...' : 'Check JSON'}
            </button>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>Error: {error}</p>}
            {response && (
                <div style={{ marginTop: '20px' }}>
                    <h2 style={{ color: 'white' }}>Response:</h2>
                    <pre style={{ color: 'white', background: 'rgba(255, 255, 255, 0.1)', padding: '10px', borderRadius: '5px', overflowX: 'auto' }}>{response}</pre>
                </div>
            )}
        </div>
    );
};

export default JsonValidator;
