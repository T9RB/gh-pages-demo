import React, { useEffect, useState } from 'react';

import api from './server/db';
import type { RESPONSE_DATA } from './server/db';

import './App.css'

function App() {
    const [data, setData] = useState<RESPONSE_DATA>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get.data();
            setData(response);
        };

        fetchData();
    }, []);

    return <div className ='App'>{data ? <p>{data.greeting}</p> : 'no data'}</div>;
}

export default App;

