// step-1: add event listener to the post button 
document.getElementById("btn-post").addEventListener('click',function(){
//    step-2: get the comment 
    const newComment=document.getElementById("new-comment");
    const commentData=newComment.value;
    
    // step-3:set the comment inside the container
    //1.get the comment container
    //2.create the new element
    //3.set the text of the comment as innerText
    //4.add the p tag using AppendChild
    const commentContainer=document.getElementById("comment-container");
    const para=document.createElement("p");
    para.innerText=commentData;
    commentContainer.appendChild(para);
    newComment.value="";

})