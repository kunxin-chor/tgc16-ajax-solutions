document.querySelector("#link").href = "https://www.google.com";
document.querySelector("#link").innerText = "Google";

document.querySelector('#load-image-btn')
    .addEventListener('click', async function(){
        let response = await axios.get('artwork.json');
        let artwork = response.data;
        document.querySelector('#title').innerHTML = artwork.title;
        document.querySelector('#image').src = artwork.image_url;
    })