import React from 'react';
import Routes from './routes/';

//Import Scss
import "./assets/scss/themes.scss";

//FakeBackend
import FakeBackend from './helpers/fake-backend';


//Firebase helpers

fakeBackend();


function App() {
    return (
        <Routes />
    );
}

export default App;

