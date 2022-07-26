# CoreCode-bootcamp-fullstack-2022-03-challenges
CoreCode-bootcamp-fullstack-2022-03-challenges

`Week 1 Challenge1 (Tuesday) -> 07/18/2022`\
`Ensure question` \
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string 
```js
function ensureQuestion(s) {
    // Code here
    return s.trim().substr(-1) == "?" ? s : s+"?";
    
}

