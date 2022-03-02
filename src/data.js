import EatTheFrog from "./Images/eat-the-frog.png";
import BrightIdeas from "./Images/brightideas_login.png";
import SwoleMates from "./Images/SwoleMates.png";
import WeatherAPI from "./Images/weather-dashboard.png";
import NoteTaker from "./Images/note-taker.png";
import GameofThrones from "./Images/game-of-thrones.png";

// Project Data
export const projects = [
    {
        id: 1,
        img: EatTheFrog,
        link: "https://github.com/msp4msps/eat_the_frog",
        live: "https://msp4msps.github.io/eat_the_frog/",
        title: "Eat the Frog",
        description: "'Eat the Frog' is a front-end task manager designed to help users increase and maintain their productivity as well as serve random jokes and encourage continued productivity. Developed with HTML, CSS, & JavaScript."
    },
    {
        id: 2,
        img: BrightIdeas,
        link: "https://github.com/EMtheDM/BrightIdeas",
        live: "https://gentle-wildwood-55104.herokuapp.com/",
        title: "Bright Ideas",
        description: "'Bright Ideas' is a full stack project management tool where users can manage projects from start to finish. Developed with a RESTful approach, using MySQL, Express, BCrypt and Javascript."
    },
    {
        id: 3,
        img: SwoleMates,
        link: "https://github.com/jonteal/SwoleMates",
        live: "https://true-swole-mates.herokuapp.com/",
        title: "SwoleMates",
        description: "'SwoleMates' is a full stack, ReactJS-based app designed to give users a place to keep track of their diet, workouts, and also find friends with similar goals. Developed with MERN stack, GraphQL, and several other tools."
    },
    {
        id: 4,
        img: WeatherAPI,
        link: "https://github.com/jonteal/weather-dashboard",
        live: "https://jonteal.github.io/weather-dashboard/",
        title: "Weather API",
        description: "'Weather Dashboard' is a 3rd party API fetch tool designed to look up the weather in any city as well as a 5-day forecast. Developed with HTML, CSS, Javascript, and OpenWeather API."
    },
    {
        id: 5,
        img: NoteTaker,
        link: "https://github.com/jonteal/note-taker",
        live: "https://jonjackson-note-taker.herokuapp.com/",
        title: "Note Taker",
        description: "'NoteTaker' is a full stack tool that enables users the ability to keep track of notes in order to remember important tasks, music lyrics, or anything they desire! Developed with HTML, CSS, Javascript, & Express."
    },
    {
        id: 6,
        img: GameofThrones,
        link: "https://github.com/jonteal/game-of-thrones-quiz",
        live: "https://jonteal.github.io/game-of-thrones-quiz/",
        title: "Game of Thrones Quiz", 
        description: "'Game of Thrones Quiz' is a silly quiz written in Javascript to test the player's trivial knowledge Game of Thrones. You have 60 seconds! Developed with HTML, CSS, & Javascript."
    },
];

export default projects;