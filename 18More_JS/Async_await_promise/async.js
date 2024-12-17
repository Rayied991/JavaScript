const myLoader=()=>{
    return new Promise((resolve,reject)=>{
        const success=Math.random();
        if(success<=0.5){
            resolve(success);
        }
        else{
            reject(success);
        }
    })

}
myLoader()
.then(data =>console.log("Resolved data: ",data))
.catch(err =>console.log("Rejected with value: ",err))


// .fetch('')
// .then(res=>res.json())
// .then(data =>console.log("Resolved data: ",data))
// .catch(err =>console.log("Rejected with value: ",err))


async function loadData(){
    const response=await fetch('');
    const data=await response.json();
    console.log(data);
}

const TaskLoader=async()=>{
    const res=await fetch('');
}

loadData()