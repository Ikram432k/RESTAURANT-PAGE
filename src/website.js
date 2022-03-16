import logHome from './home';
import logmenu from './menu';
import logcontact from './contact';

function createHeader(){
    const head = document.createElement('header');
    head.classList.add('head');

    const resturantName = document.createElement('h1');
    resturantName.classList.add("resturant-Name");
    resturantName.innerHTML = "Los Pollos Hermanos";

    head.appendChild(resturantName);
    head.appendChild(createNav());

    return head;
}

function createNav(){
    const nav = document.createElement("nav");

    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.textContent = 'Home';
    homeButton.addEventListener("click",(e)=>{
    if(e.target.classList.contains('active')) return;
    setClassActive(homeButton);
    logHome();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener("click",(e)=>{
        if(e.target.classList.contains('active')) return;
        setClassActive(menuButton);
        logmenu();
    });

    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener("click",(e)=>{
        if(e.target.classList.contains('active')) return;
        setClassActive(contactButton);
        logcontact();
    });    
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setClassActive(button){
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) =>{
        if(button!==this){
            button.classList.remove('active');
        }
    });

    button.classList.add('active');


}

function createMain(){
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute("id","main");
    return main;
}

function initailiZeWebsite(){
const getdiv = document.getElementById('content');

getdiv.appendChild(createHeader());
getdiv.appendChild(createMain());

logHome();
}

export default initailiZeWebsite;