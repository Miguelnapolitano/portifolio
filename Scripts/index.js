import { dataBase } from "./data.js";
import { createCard } from "./card.js";
import { modal } from "./modal.js";

const cards = () => {
    dataBase.map((project) => {
        createCard(project.id, project.name, project.bgImg, project.techs)
    })

}

cards();

const openModal = () => {
    const btnMore = [...document.querySelectorAll("#more")]

    btnMore.forEach((btn) => {
        btn.addEventListener('click',(event) => {
            const postId = (event.target.offsetParent.offsetParent.id)

            const post = dataBase.find(post => post.id == postId)

            modal(post.name, post.description, post.links.site, post.links.repository, post.links.linkedin);

            closeModal();
        }) 
    })
}

openModal()

 export const closeModal = () => {
    const body = document.body;

    body.addEventListener('click', (event) => {

       if (event.target.id == "close" || event.target.className == "modal-shadow"){

            body.classList.remove("hidden");

            const modalShadow = document.querySelector(".modal-shadow");

            modalShadow.remove();
       }
    })    
}
