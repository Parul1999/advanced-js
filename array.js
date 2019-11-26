var officers=[{ 
    id:20,
name:'Captain Plett'
},
{
    id:24,
    name:'General'
}
{
    id:56,
    name:'Admiral Ozzel'
}
{
    id:88,
    name:'Commander Jerjerrod'
}
];
var officerIds=[];
officers.forEach(function(officer)
{
    officersIds.push(officer.id)
});
//using .map
var officersIds=officers.map(function(officer)
{
    return officer.id;
});
//arrow function with .map
const officersIds=officers.map(officer => officer.id);
console.log(officersIds);
//reduce code block 
var pilots=[{ 
    id:10,
name:'Captain Plett',
  years:24
},
{
    id:2,
    name:'General',
    years:22
}
{
    id:41,
    name:'Admiral Ozzel',
      years:18
}
{
    id:99,
    name:'Commander Jerjerrod',
      years:30
}
];
//pilot is the variable in which single value will come
var totalYears=pilots.reduce(function(accumulator,pilot){
return accumulator+pilot.years;
},0);//0 is the start index

//shortening using arrow function
const totalYears=pilots.reduce((acc,pilot)=>acc+pilot.years,0);
console.log(totalYears);
//example using foreach
var mostExpPilot={};
var oldest={};
pilots.forEach(function(pilot)
{
mostExpPilot=(oldest.years||0)>pilot.years?oldest:pilot;
});
console.log(mostExpPilot);
//example without foreach
var mostExpPilot=pilots.reduce(function(oldest,pilot)
{
    return(oldest.years ||0)>pilot.years?oldest:pilot;
},{});//in first parameter {} is passed
console.log(mostExpPilot);

//filter code block
var pilots=[{ 
    id:10,
name:'Captain Plett',
faction:"Rebels"
},
{
    id:2,
    name:'General',
    faction:"Empire"
}
{
    id:41,
    name:'Admiral Ozzel',
    faction:"Empire"
}
{
    id:99,
    name:'Commander Jerjerrod',
    faction:"Rebels"
}
];
var rebels=pilots.filter(funtion(pilot){
    return pilot.function==="Rebels";
});
var empire=pilots.filter(funtion(pilot){
    return pilot.function==="Empire";
});
//using arrow function
const rebels=pilots.filter(pilot=>pilot.faction==="Rebels");
const empire=pilots.filter(pilot=>pilot.faction==="Empire");
console.log("Rebels",rebels);
console.log("Empire",empire);