let request = new XMLHttpRequest()
const url = 'https://api.unsplash.com/photos/?client_id=123fc870c111e7b40fa411ab5a20d3cf8f1e73275b4c30cb11a46e5461360545';




// document.querySelector("#retrieve-resources").onclick = ()=>{
//     let displayResources = document.querySelector("#displayResources");
//     displayResources.textContent ="Loading JSON";




// }

fetch(url)
    .then(response => response.json())
    .then(photos => {
        // console.log(photos)
        console.log(photos[0].id);


        for(let i = 0; i <= photos.length; i++){
            console.log(photos[i].id);
        }

        // photos.forEach(function (photo) {
        //     console.log(photo);
        // })


    })








