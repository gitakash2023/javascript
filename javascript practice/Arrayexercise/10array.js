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


// find the mass and eye_color of people who are females .
 const massWithEye_color =characters.filter((obj)=>{
    return obj.gender=="female"
}).map((obj)=>{
 return {mass:obj.mass,eye_color:obj.eye_color}
});
console.log(massWithEye_color);
// output: [ { mass: '49', eye_color: 'brown' } ]

