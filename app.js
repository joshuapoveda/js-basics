function cleanedCounts(data) {
  return data.splice(0,0,12)
}

console.log(cleanedCounts([1, 1, 2, 2, 1, 2, 2, 2, 2]));


let movies = ['Yojimbo','Glenlgarry Glen Ross','Akira' ]

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

console.log(myFish);

// let grade = 79

// if(grade > 55){
//   if(grade >= 70){
//     if(grade >= 80){
//       if(grade >= 90){
//         if(grade >=100){
//           console.log('A')
//         }
//       }
//       else{
//         console.log('B')
//       }
//     }else{
//       console.log('C')
//     }

//   }else{
//     console.log('D')
//   }
// }else(console.log('Failed'))

