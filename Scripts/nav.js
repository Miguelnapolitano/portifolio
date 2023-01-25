export const dropDown = () => {
    const btt = document.getElementsByTagName("button")[0];

    if (btt.id === "drop-down"){
        
        btt.addEventListener('click', () => {
            createNav()
            btt.setAttribute("id", "close")
    
        })
    } else {
    
        btt.addEventListener('click', () => {
            removeNav()
            btt.setAttribute("id", "drop-down")
    
        })
    }
}


const createNav = () => {
    const header = document.getElementsByTagName("header")[0];

    header.insertAdjacentHTML("beforeend", `
        <div class="div-anchors">
            <a href="#home">HOME</a>
            <a href="#about">SOBRE</a>
            <a href="#portfolio">PORTIFÓLIO</a>
            <a href="#contact">CONTATO</a>
        </div>   
    `)
}

const removeNav = () => {
    document.querySelector(".div-anchors").remove()
}


