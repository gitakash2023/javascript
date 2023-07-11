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





// Get an array of all first names and other properties
const allProperties = characters.map((obj) =>{
    const fullName= obj.name
       const[fn,ln] =fullName.split(' ')
       return{firstName:fn,mass:obj.mass,gender:obj.gender}
    })
    console.log(allProperties);
    // output:
    /*
    [
  { firstName: 'Luke', mass: '77', gender: 'male' },
  { firstName: 'Darth', mass: '136', gender: 'male' },
  { firstName: 'Leia', mass: '49', gender: 'female' },
  { firstName: 'Anakin', mass: '84', gender: 'male' }
]

    
    */
    

