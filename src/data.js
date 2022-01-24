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
        description: "'Eat the Frog' is a front-end task manager designed to help users increase and maintain their productivity."
    },
    {
        id: 2,
        img: BrightIdeas,
        link: "https://github.com/EMtheDM/BrightIdeas",
        live: "https://gentle-wildwood-55104.herokuapp.com/",
        description: "'Bright Ideas' is a full stack project management tool where users can manage projects from start to finish."
    },
    {
        id: 3,
        img: DailyDev,
        link: "https://github.com/jonteal/tech-blog",
        live: "https://thedailydev.herokuapp.com/",
        description: "'The Daily Dev' is a full stack tech blog as a place for developers to share information about technical concepts."
    },
    {
        id: 4,
        img: WeatherAPI,
        link: "https://github.com/jonteal/weather-dashboard",
        live: "https://jonteal.github.io/weather-dashboard/",
        description: "'Weather Dashboard' is a 3rd party API tool designed to look up the weather in any city as well as a 5-day forecast."
    },
    {
        id: 5,
        img: NoteTaker,
        link: "https://github.com/jonteal/note-taker",
        live: "https://jonjackson-note-taker.herokuapp.com/",
        description: "'NoteTaker' is a full stack tool for users to keep track of notes in order to remember important tasks."
    },
    {
        id: 6,
        img: GameofThrones,
        link: "https://github.com/jonteal/game-of-thrones-quiz",
        live: "https://jonteal.github.io/game-of-thrones-quiz/", 
        description: "'Game of Thrones Quiz' is a quiz written in Javascript to test the player's trivial knowledge Game of Thrones."
    },
];

export default projects;

