let data ="secret data";
class User{
    constructor(name,email){    
        this.name=name;
        this.email=email;
        
    }
    viewData(){
        console.log("Data = ",data);

    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);

    }
    editData(){
        data="new data";
    }
}

let stud1=new User("John","j@j.com");
console.log(stud1.viewData());
let stud2=new User("Jane","j@j.com");
console.log(stud2);

let teacher1=new User("Tom","t@t.com");
console.log(teacher1);

let a1=new Admin("Tom","t@t.com");
a1.editData();
console.log(a1.viewData());