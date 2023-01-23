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

     //render the collection of soldiers and bots
     return(
        <div>
           <div className="row">
            <div className="col-10 p-4 bg-success container-fluid mx-auto">
                <div className="row">
                    {/* Iterating through the soldiers array to create a card for each soldier */}
                    {soldiers.map(soldier => {
                        return (
                            <div key={soldier.id} onClick={() => removeSoldier(soldier)} className="card col-3" style={{ width: "18rem" }}>
                                <img src={soldier.avatar_url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Name:{soldier.name}</h5>
                                    <p className="card-text">Health:{soldier.health}</p>
                                    <p className="card-text">Weapon:{soldier.weapon}</p>
                                    <p className="card-text">Catchphrase:{soldier.catchphrase}</p>
                                    <p className="card-text">Bot_class:{soldier.bot_class}</p>
                                    <p className="card-text">Damage:{soldier.damage}</p>                                    
                                </div>
                                {/* Delete button for each soldier*/}
                                <button className="btn btn-danger" onClick={() => deleteSoldier(soldier.id)}>X</button>
                            </div>
                        );
                      })}
                      </div>
                  </div>
                  <div className="row">
                    {/* Iterating through the selectedBots array to create a card for each bot */}
                      {selectedBots.map(bot => {
                          return (
                              <div onClick={() => addSoldier(bot)} key={bot.id} className="card col-3" style={{ width: "18rem;" }}>
                                  <img src={bot.avatar_url} className="card-img-top" alt="..." />
                                  <div className="card-body">
                                  <h5 className="card-title">Name:{bot.name}</h5>
                                  <p className="card-text">Health:{bot.health}</p>
                                  <p className="card-text">Weapon:{bot.weapon}</p>
                                  <p className="card-text">Catchphrase:{bot.catchphrase}</p>
                                  <p className="card-text">Bot_class:{bot.bot_class}</p>
                                  <p className="card-text">Damage:{bot.damage}</p>
                                  </div>
                              </div>
                          );
                      })}
                  </div>
              </div>
        </div>
     )
};
        
        export default BotCollection;