import { dataBase } from "./data.js";
import { createCard } from "./card.js";

const cards = () => {
    dataBase.map((project) => {
        createCard(project.id, project.name, project.bgImg, project.techs)
    })
}

cards()