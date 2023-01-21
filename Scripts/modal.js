import { closeModal } from "./index.js";

export const modal = (name, description, site, repo, linkedin) => {
  const body = document.body;

  const divShadow = document.createElement("div");
  divShadow.classList.add("modal-shadow");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  const modalTitle = document.createElement("h2");
  modalTitle.innerText = name;

  const btnClose = document.createElement("button");
  btnClose.setAttribute("id", "close");
  btnClose.innerText = "X";

  const modalText = document.createElement("p");
  modalText.innerText = description;

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");

  const aSite = document.createElement("a");
  aSite.setAttribute("id", "site");
  aSite.setAttribute("target", "_blank");
  aSite.innerText = "Visite o Site";

  if (site){
    aSite.href = site;
  } else {
    aSite.classList.add("disabled");
  }
    

  const aRepo = document.createElement("a");
  aRepo.setAttribute("id", "repo");
  aRepo.setAttribute("target", "_blank");
  aRepo.innerText = "Repositório";

  if (repo){
    aRepo.href = repo;
  } else {
    aRepo.classList.add("disabled");
  }

  const aLinkedin = document.createElement("a");
  aLinkedin.setAttribute("id", "linkedin");
  aLinkedin.setAttribute("target", "_blank");
  aLinkedin.innerText = "Post Linkedin";


  if (linkedin){
    aLinkedin.href = linkedin;
  } else {
    aLinkedin.classList.add("disabled");
  }

  modalHeader.append(modalTitle, btnClose);

  modalFooter.append(aSite, aRepo, aLinkedin);

  modal.append(modalHeader, modalText, modalFooter);

  divShadow.appendChild(modal);

  body.appendChild(divShadow);

  body.classList.add("hidden");

};
