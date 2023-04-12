let bonus=20;//global variable
function sum(first,second){             //let,const scope variable                                        //
  const result=first+second+bonus;      // var hoest variable,block 
  console.log(bonus);                   // block ar bahire lick kore.
  
  return result
}
const output=sum(5,5);
console.log(output);
console.log(bonus);
