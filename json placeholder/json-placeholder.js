function myButton(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
function myUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => myUser2(data));
}
function myUser2(data){
    const ul = document.getElementById('users');
    for(const user of data){
        const li =  document.createElement('li');
        li.innerText = `name: ${user.name} email: ${user.email} address ${user.address}`;
        ul.appendChild(li);
    }
}

//post 
function allPost (){
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then (data => myPost(data))
}
// allPost ()
function myPost(posts){
    const postContainer= document.getElementById('postId');
    for (const post of posts){
        const div = document.createElement('div');
        div.innerHTML =`
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(post.title)
    }
}
// function addPostAll(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then (data => myPostAll(data))
// }
addPostAll()
function myPostAll(posts){
    const sectionContainer = document.getElementById('postAll');
    for (const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        sectionContainer.appendChild(div);
    }
}

//
function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'post',
        body: JSON.stringify({
            title: 'this is my business',
            body:'this is mine',
            id: 2
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => console.log(data))

}
addPost()


