function Kitchen(){
    let roast=0;
    return function(){
        roast++;
        return roast;
    }

}

const firstServer=Kitchen();
console.log(firstServer);//annonymous function
console.log(firstServer());//1
console.log(firstServer());//2
console.log(firstServer());//3
console.log(firstServer());//4

