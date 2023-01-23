# Bot Battlr
 
## Project Description 
This project is a React application that allows you to browse through a list of robots, view a robot's details, and enlist a bot into your army.Each bot can only be enlisted once.

# SetUp Instruction
1.Create a new project folder and navigate into it.
2.Create a new GitHub repository and make sure to keep it private.
3.Regularly commit your progress to the repository.

# How To Run The Project
In your project directory, create a db.json file and use the provided data [link] for your server database.
Run the command json-server --watch db.json to start the backend server.
Test your server by visiting the route http://localhost:8001/bots in your browser.

# Deliverables
As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.

- Add an individual bot to my army by clicking on it. The selected bot should

  render in the `YourBotArmy` component. The bot can be enlisted only *once*.

  The bot *does not* disappear from the `BotCollection`.

- Release a bot from my army by clicking on it. The bot disappears from the

  `YourBotArmy` component.

- Discharge a bot from their service forever, by clicking the red button marked

  "x", which would delete the bot both from the backend and from the

  `YourBotArmy` on the frontend.

# Technologies Used
1.React.js
2.JavaScript
3.CSS
4.HTML
5.json-server

# Conclusion
The Bot Battlr project is a React application that allows users to browse through a list of robots, view individual robot details, and enlist a bot into their own army.