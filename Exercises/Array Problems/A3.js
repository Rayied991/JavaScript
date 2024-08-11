let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.group(companies);
companies.splice(1,1,"OLA");
console.group(companies);
companies.push("Amazon");
console.group(companies);