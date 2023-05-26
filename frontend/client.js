console.log('Hello World!');

const form = document.querySelector('form');
//const loadingElement = document.querySelector(.loading);
const API_URL = 'http://localhost:5000/atraski';




loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const atr = {
        name,
        content
    };
    form.style.display = 'none';
    loadingElement.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(atr),
        headers:{
            'content-type': 'application/json'
        }
    }) .then(reponse => Response.json())
        .then(createdAtr => {
            console.log(createdAtr);
            form.style.display = 'none';

            loadingElement.style.display = 'none'
        })
});