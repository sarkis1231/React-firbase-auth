import React from 'react';
import app from "../firbase";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
    );
};

export default Home;