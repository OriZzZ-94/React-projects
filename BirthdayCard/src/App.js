import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
    const [people, setPeople] = useState(data)
    return ( <
        main >
        <
        section className = "container" >
        <
        h3 > { people.lenght }
        birthdays today < /h3>    <
        List people = { people }
        / > <
        button onClick = {
            () => setPeople([])
        } > Clear all < /button><
        button onClick = {
            () => window.location.reload()
        } > Show all < /button>    < /
        section > <
        /main >
    );
}

export default App;