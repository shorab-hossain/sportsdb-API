function myAlbem(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then (response => response.json())
    .then(data => albem(data))
}
myAlbem()
function albem(albem){
    const albemContainer = document.getElementById('albem');
    for (const albems of albem){
        const li = document.createElement('li');
        li.style.background ='yellow';
        li.style.border ='2px solid red'
        li.style.margin ='10px'
        li.innerText =`{
            ${albems.id} ${albems.title}
        }`;
        albemContainer.appendChild(li);
    }
}