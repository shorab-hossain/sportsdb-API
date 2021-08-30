function myPhotoAlbem(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then (response => response.json())
    .then(data => myPhoto(data))
}
myPhotoAlbem()
function myPhoto(photos){
    const photoContainer = document.getElementById('photo');
    for (const photo of photos){
        const li = document.createElement('li');
        li.style.border ='2px solid red'
        li.style.margin ='10px'
        li.innerText =`{
            ${photo.title} ${photo.url}
        }`;
        photoContainer.appendChild(li);
    }
}

fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'post',
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            name: 'shorab hossain',
            id: 22,
            title:' He is a employee'
        })
})
.then(res => res.json())
.then (data => console.log(data))