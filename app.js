
// Excerise 1: Ignore Even



 //let i =1;

// while (i < 100) {
 //   if (i % 2 !== 0) {
  //      console.log(i);
  //  }

  //  i++;
// }


//Excercise 2: FIZZBUZZ
 
// for (let i =1; i < 100; i++) {
 //   console.log(i);

  //  if (i % 3 == 0 && i % 5 == 0) {
 //       console.log("FIZZBUZZ");
  //  } else { if (i % 3 == 0 ) 
  //     {
  //      console.log("FIZZ");//
   //   } if (i % 5 == 0) {
  //      console.log("BUZZ")
  //     }

  //    }
  //  }


  // Excerise 3: Re-Write

 //   let  x = 1;

  //  do  {
//    if (y % 2 !==0) {
 //       console.log(x);
 //   }
 //   i++;
// } while (x < 100);




   // let x = 1;

  //  do  {
  //      let output = "";

  //      if (x % 3 ==0) {
  //          output += "FIZZ";

   //     }

  //      if (x % 5 == 0) {
  //          output += "BUZZ";
  //      }

  //      console.log(`${x} ${output}`);

 //       i++;

  //  } while (x <= 100);


  //Excerise 4: Find Value

  //  let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
//let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500



//let foundValue;

//for (let i =1; i <=n && !foundValue; i++) {
  //  foundValue = (i == numberToFind);
 //   }
   //    
//if (foundValue) {
  //  console.log(`Found ${numberToFind}!`);
//} else {
 //  //console.log(`Did not find ${numberToFind} within 1-${n}..`);
//}




//let foundValue;

//for (let i =1; i <= n && !foundValue; i++) {
//    foundValue = (i == numberToFind);
//}

//if (foundValue) {
 //   console.log(`Found ${numberToFind}!`);
//} else {
//    console.log(`Did not find ${numberToFind} within 1-${n}..`);
//}

//Exercise 5: Custom Fizz


let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 100 and 1000

console.log(start, end);

for (let i=start; i <=end; i++) {
    let output = "";
    
    if (i % fizzDivisor == 0){
        output += "FIZZ"
    }
    if (i % buzzDivisor == 0){
        output += "BUZZ";
    }


    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);


