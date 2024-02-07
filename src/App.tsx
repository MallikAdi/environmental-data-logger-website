import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://cors-anywhere.herokuapp.com/https://www.irflabs.in/gedl/edllogin.php?userId=pqrs&pass=s1234`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then(jsonData => {
          setData(jsonData);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {data ? (
        <HomeScreen data={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
