//Promise handled by resolving asynchronous problem

const hasMeeting=false;
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
// const addToCalendar=(meetingDetails)=>{
//     return new Promise((resolve,reject)=>{
//         const calendar= `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//         resolve(calendar);
    
//     });
// };
//simplify it
const addToCalendar=(meetingDetails)=>{
   
        const calendar= `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calendar);
    
};


//if resolved->call then
//if rejected->call catch
meeting
.then(addToCalendar)
.then((res)=>{
    //resolved data
    console.log(JSON.stringify(res));

})
//if any one of the promise is rejected then catch will be called
.catch((err)=>{
    //rejected data
    console.log(err.message);

})

console.log("Hello World");
