import React,{useEffect, useState } from 'react';

 // A state variables for bots and soldiers, with soldiers being pulled from local storage if it exists
const BotCollection = () => {
    const [selectedBots, setSelectedBots] = useState([]);
    const [soldiers, setSoldiers] = useState(() => {
        try {
          const data = localStorage.getItem("soldiers");
          return data ? JSON.parse(data) : [];
        } catch (error) {
          return [];
        }
      });
      
    
  
    // Fetch bot data from localhost:8001/bots and set it to the state of bots
    useEffect(() => {
        fetch('http://localhost:8001/bots')
            .then(res => res.json())
            .then(data => setSelectedBots(data));
    });
     return(
        <div>
            
        </div>
     )
};
        
        export default BotCollection;