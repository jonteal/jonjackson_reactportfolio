import EatTheFrog from "./Images/eat-the-frog.png";
import BrightIdeas from "./Images/brightideas_login.png";
import DailyDev from "./Images/thedailydev.png";
import WeatherAPI from "./Images/weather-dashboard.png";
import NoteTaker from "./Images/note-taker.png";
import GameofThrones from "./Images/game-of-thrones.png";

export const projects = [
    {
        id: 1,
        img: EatTheFrog,
        link: "https://github.com/msp4msps/eat_the_frog",
        live: "https://msp4msps.github.io/eat_the_frog/",
        title: "Eat the Frog",
        description: "'Eat the Frog' is a task manager with a built-in incentive system for the user to help them stay more accountable and more productive."
    },
    {
        id: 2,
        img: BrightIdeas,
        link: "https://github.com/EMtheDM/BrightIdeas",
        live: "https://gentle-wildwood-55104.herokuapp.com/",
        description: "'Bright Ideas' is a simple and concise project management system where a user can create and manage their projects from start to finish"
    },
    {
        id: 3,
        img: DailyDev,
        link: "https://github.com/jonteal/tech-blog",
        live: "https://thedailydev.herokuapp.com/",
        description: "'The Daily Dev' is a tech blog for developers to have a place to share information about technical concepts and new technologies"
    },
    {
        id: 4,
        img: WeatherAPI,
        link: "https://github.com/jonteal/weather-dashboard",
        live: "https://jonteal.github.io/weather-dashboard/",
        description: "'Weather API' is a dashboard for users look up the weather in any city and see the weather for that day as well as a 5-day forecast"
    },
    {
        id: 5,
        img: NoteTaker,
        link: "https://github.com/jonteal/note-taker",
        live: "https://jonjackson-note-taker.herokuapp.com/",
        description: "'NoteTaker' is a tool where a user could write and keep track of notes in order to remember important tasks or great lyrics"
    },
    {
        id: 6,
        img: GameofThrones,
        link: "https://github.com/jonteal/game-of-thrones-quiz",
        live: "https://jonteal.github.io/game-of-thrones-quiz/", 
        description: "'Game of Thrones Quiz' is a timed quiz to test the player's trivial knowledge of the HBO series Game of Thrones. Winter is coming!"
    },
];

export default projects;

