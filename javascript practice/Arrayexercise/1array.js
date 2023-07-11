
// An array named  characters

const characters = [
    {
        name: 'Akash Yadav',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Krishna Kumar',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Shilpa Raj',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Aniket Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


 // Get an array of all names  

  const allName = characters.map ((obj)=> {
   return obj.name ;
 });
 console.log(allName) ; 
 // output:  ['Akash Yadav', 'Krishna Kumar', 'Shilpa Raj', 'Aniket Skywalker']
