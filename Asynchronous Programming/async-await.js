// async-await 
async function friendlyFunction(){
    // return Promise.resolve('Hello');
    return 'Hello';
}
//async returns a promise
//await waits till the promise is resolved
console.log(friendlyFunction());



const hasMeeting=true;
const meeting= new Promise((resolve,reject)=>{
    //resolve: for success
    //reject: for failure
    if(!hasMeeting){
        const meetingDetails={
            name:"Technical Meeting",
            location:"Google meet",
            time: "10:00PM"
        };
        resolve(meetingDetails);
    }
    else{
        reject(new Error("meeting already Scheduled"));
    }

});

const addToCalendar=(meetingDetails)=>{
   
        const calendar= `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calendar);
    
};



async function myMeeting()
{
    //async returns a promise
//await waits till the promise is resolved
//await cannot be used in a normal function
try{
    const meetingDetails=await meeting;
    const calendar = await addToCalendar(meetingDetails);
    console.log(calendar);

}
catch(err){
    console.log(err.message);
    console.log("Something error occured");

}
   
}



myMeeting();

console.log("Hello World");

