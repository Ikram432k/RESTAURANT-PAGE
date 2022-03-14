function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.appendChild(createItem(
        "Carne",
        "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
    ));
    return menu;

}
    function createItem(name,description){
        const menuItem = document.createElement('div');
        menuItem.classList.add("menu-items");

        const foodName = document.createElement('h2');
        foodName.innerHTML = name;

        const foodDescription = document.createElement('p');
        foodDescription.innerHTML = description;

        const foodImg = document.createElement('img');
        foodImg.src = "img/foodimages/breaking-bad.jpg";
        foodImg.alt = `${name}`;  

        menuItem.appendChild(foodImg);
        menuItem.appendChild(foodName);
        menuItem.appendChild(foodDescription);


        return menuItem;
    }

function logmenu(){
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}
export default logmenu;