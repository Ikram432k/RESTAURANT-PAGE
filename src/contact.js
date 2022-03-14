function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 123 456 789';

    const address = document.createElement('p');
    address.textContent = 'Albuquerque, New Mexico, United States';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);

    return contact;
}
function logcontact(){
    const main =document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}
export default logcontact;