import React, { useState } from 'react';

function ChatAiComponent() {
    const [inputText, setInputText] = useState('');
    const [responseData, setResponseData] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://ec2-13-211-33-65.ap-southeast-2.compute.amazonaws.com:9000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputText }),
            });

            // console.log(response)
            if (response.ok) {
                const result = await response.json();
                console.log(result)
                setResponseData(result);
            } else {
                console.error('Error: ', response.statusText);
            }
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    };

    return (
        <>
            <div className='container'>
                <h1>Chat Page</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={inputText} 
                        onChange={(e) => setInputText(e.target.value)} 
                        placeholder="Enter your text"
                    />
                    <button type="submit">Send</button>
                </form>

                {responseData && (
                    <div>
                        <h2>Response:</h2>
                        <p>{responseData}</p>
                    </div>
                )}
            </div>
        </>
    );
}
 
export default ChatAiComponent;