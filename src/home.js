

function createHome(){
    const  home = document.createElement('div');
    home.classList.add('divFirst');

    const img1 = document.createElement('img');
    img1.src = "img/breaking-bad.jpg";
    img1.alt = "RESTAURANT";

    home.appendChild(createPara('Welcome To Los Pollos Hermanos'));
    home.appendChild(img1);
    home.appendChild(createPara('Made with passion since 1989'));
    home.appendChild(createPara('Order online or visit us!'));

    return home;
}

    function createPara(text){
    const Paragraph = document.createElement('p');
    Paragraph.innerHTML = text;
    return Paragraph;    
    }

    function logHome(){
        const main = document.getElementById("main");
        main.textContent = "";
        main.appendChild(createHome());
    }
export default logHome;
