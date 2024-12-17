function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=> displayPosts(data))
}
/**
 * 1.get the container element where you want to add the new elements
 * 2.create child element
 * 3.set the innerHTML/innerText
 * 4.appendChild
 */
function displayPosts(posts){
    const postsContainer=document.getElementById('post-container');
    for(const post of posts){
        const div=document.createElement('div');
        div.classList.add('post');
        div.innerHTML=`
        <h4>User-${post.userId}</h4>
        <h5>Post-title:${post.title}</h5>
        <p>Post Description:${post.body}</p>`;
        postsContainer.appendChild(div);

}}


loadPosts();

