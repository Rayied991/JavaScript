const school="RAJ UK Uttara Model School";
console.log(school);
console.log(school.toLowerCase());//convert to lowercase
console.log(school.toUpperCase());//convert to Uppercase
console .log(school);

const subject='Chemistry';
const book='chemIsTry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log("same");
}
else{
    console.log("not same");
}

//trim ->remove white space from both side
const drink='water';
const liquid='          water        ';
if(drink === liquid ){
    console.log("same2");    
}
else{
    console.log("not same2");
}
//it did not remove white space between
const abc='wat er ss ';
console.log(abc.trim());