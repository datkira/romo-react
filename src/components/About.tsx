import React, { useEffect, useState } from 'react';

const About = () => {
    const [localData, setLocalData] = useState('');

    useEffect(() => {
        // Set data into localStorage
        window.localStorage.setItem('webview_test', 'This is stored in localStorage');

        // Read data from localStorage
        const data = window.localStorage.getItem('webview_test');

        // Update state with data from localStorage
        setLocalData(data as string);
    }, []); // Run effect only once on component mount

    return (
        <div>
            <h2>About Page</h2>
            <p>LocalStorage data: {localData}</p>
        </div>
    );
};

export default About;
