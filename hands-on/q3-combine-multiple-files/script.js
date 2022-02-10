document.querySelector('#load-btn')
    .addEventListener('click', async function(){
        // wrong way of doing
        // let response1 = await axios.get('file1.txt');
        // document.querySelector('#content').innerHTML = response1.data;

        // let response2 = await axios.get('file2.txt');
        // document.querySelector('#content').innerHTML += response2.data;
        
        let request1 = axios.get('file1.txt');
        let request2 = axios.get('file2.txt');

        let response1 = await request1;
        let response2 = await request2;

       let content =  document.querySelector('#content');
       content.innerHTML = response1.data + response2.data;

    })