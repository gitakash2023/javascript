 //  an array named  characters 
 
 const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


// find the name and height of those people who are male with height greater than 170.

 const nameWithHeight =characters.filter((obj)=>{
    return obj.gender =="male"&& obj.height >170
}).map((obj)=>{
    return {name:obj.name , height:obj.height}
});
console.log(nameWithHeight);
// output:
/* [
  { name: 'Luke Skywalker', height: '172' },
  { name: 'Darth Vader', height: '202' },
  { name: 'Anakin Skywalker', height: '188' }
]
*/

