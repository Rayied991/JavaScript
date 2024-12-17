function checkAge(){
    const ageField=document.getElementById("age");
    const ageText=ageField.value;
    const errorTag=document.getElementById("error");
   
    try{
        // console.log(bVaria);
       const age=parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter a valid age";
        }
        else if(age<18){
            throw "Age should be greater than 18";
        }
        else if(age>30){
            
            throw "Elegible for age";
        }
        errorTag.innerHTML='';


    }catch(error){

        console.log("Error:",error);
        errorTag.innerHTML='Error: '+error;
    }
    finally{//it will upload always if error ocured or not
        console.log("Finally block");   
    }
}
