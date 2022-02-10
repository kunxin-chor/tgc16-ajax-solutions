document.querySelector('#btnLoad')
    .addEventListener('click', async function(){
        let response = await axios.get('items.txt');
        let fruits = response.data.split(',');
        
        for (let f of fruits) {
            document.querySelector('#fruits')
                .innerHTML += `<li>${f}</li>`
        }

        let fruitList = document.querySelector('#fruits2');
        for (let f of fruits) {
            // have to specify the tag name of the element
            // that we want to create
            let liElement = document.createElement('li')
            liElement.innerHTML = f;
            fruitList.appendChild(liElement);
        }
        
    })