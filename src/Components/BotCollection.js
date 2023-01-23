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

     // Removes a bot from the soldiers array by filtering out the bot that matches the passed in bot's id
     const removeSoldier = bot => {
        setSoldiers(soldiers.filter(s => s.id !== bot.id));
    };

      
    // Save the soldiers array to local storage whenever it is updated
    useEffect(() => {
        localStorage.setItem('soldiers', JSON.stringify(soldiers));
    }, [soldiers]);
  
    const addSoldier = bot => {
        if (!soldiers.find(s => s.id === bot.id)) {
            setSoldiers([...soldiers, bot]);
        }
    };
    // Delete a bot from the soldiers array by filtering out the bot that matches the passed in bot's id
    // and make a DELETE request to the api for that bot
    const deleteSoldier = botId => {
        setSoldiers(soldiers.filter(s => s.id !== botId));
        fetch(`http://localhost:8001/bots/${botId}`, {
            method: 'DELETE',
        },[]);


    };
     return(
        <div>

        </div>
     )
};
        
        export default BotCollection;