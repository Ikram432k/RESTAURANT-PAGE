import logHome from './home';
import logmenu from './menu';

function createMain(){
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute("id","main");
    return main;
}

function initailiZeWebsite(){
const getdiv = document.getElementById('content');
getdiv.appendChild(createMain());
logHome();
logmenu();
}
export default initailiZeWebsite;