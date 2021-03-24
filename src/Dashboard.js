import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './Dashboard.css';

function Dashboard() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const headers = new Headers({
      "Accept"       : "application/json",
      "Content-Type" : "application/json",
      "User-Agent"   : "KEVINS-UNTAPPD"
    });
  
    useEffect(() => {
      fetch("https://api.untappd.com/v4/method_name?client_id=BD9452A73C5AEDE4490306B0AD3B9FA92FF184B5&client_secret=4E3CB5478FE60E495F65156E9CB3ED36B5FD8A50", 
      {
        method: "GET",
        headers: headers
      })
        .then(res => res.json())
        .then(
          (result) => {
            console.log('result: ',result)
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            console.log('error: ',error)
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [headers])

    console.log('items: ',items)
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <img src={logo} className="Dashboard-logo" alt="logo" />
        <p>
          Edit <code>src/Dashboard.js</code> and save to reload.
        </p>
        <a
          className="Dashboard-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default Dashboard;
