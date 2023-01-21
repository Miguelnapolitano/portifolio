export const createCard = (id, name, bg, techs) => {
  const cardList = document.querySelector("#ul-cards");

  const card = document.createElement("li");
  card.classList.add("card");
  card.setAttribute("id", id);

  const bgImg = document.createElement("img");
  bgImg.classList.add("card-img");
  bgImg.src = bg;

  const divInf = document.createElement("div");
  divInf.classList.add("div-card-inf");

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = name;

  const divTechs = document.createElement("div");
  divTechs.classList.add("div-card-techs");

  techs.forEach((tech) => {
    const imgTechs = document.createElement("img");
    imgTechs.classList.add("card-techs");
    imgTechs.src = tech;
    divTechs.appendChild(imgTechs);
  });

  const divHover = document.createElement("div");
  divHover.classList.add("div-card-hover");

  const h3Hover = document.createElement("h3");
  h3Hover.innerText = name;
  h3Hover.classList.add("card-title");

  const buttonHover = document.createElement("button");
  buttonHover.innerText = "Saiba mais";
  buttonHover.setAttribute("id", "more");

  divInf.append(cardTitle, divTechs);

  divHover.append(h3Hover, buttonHover);

  card.append(bgImg, divInf, divHover);

  cardList.append(card);
};
