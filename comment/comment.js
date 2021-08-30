function myAlbem(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then (response => response.json())
    .then(data =>  myComment(data))
}
myAlbem()
function myComment(comment){
    const commentContainer = document.getElementById('comment');
    for (const comments of comment){
        const li = document.createElement('li');
        li.style.background ='yellow';
        li.style.border ='2px solid red'
        li.style.margin ='10px'
        li.innerText =`{
            ${comments.id} ${comments.body}
        }`;
        commentContainer.appendChild(li);
    }
}