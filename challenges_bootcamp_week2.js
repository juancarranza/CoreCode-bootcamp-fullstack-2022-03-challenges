/* Week 2 Challenge-1 (Monday) -> 07/25/2022 
Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false */
function isPalindrome(line) {
    return line.toString().split('').reverse().join('') === line.toString()? true:false;
}

/* Week 2 Challenge-2 (Tuesday) -> 07/26/2022 
Well of Ideas - Easy Version
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'. */

function well(x){
  
    let counterGood=0;
    for(let i=0;i<x.length;i++){
      if(x[i].toString().toLowerCase().includes("good")){
        counterGood++;
      }
    }
    
    let result="Fail!";
    if(counterGood>0){
      result="Publish!";
      if(counterGood>2){
        result="I smell a series!";
      }
      
    }
    
    return result;
  }

  //option 2
  const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
  }

  //option 3
  function well(x) {
    switch (x.filter(i => i === 'good').length) {
      case 0:
        return 'Fail!'
      case 1:
      case 2:
        return 'Publish!'
      default:
        return 'I smell a series!'
    }
  }