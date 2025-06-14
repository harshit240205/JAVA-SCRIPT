var c = 300 // the value outside the block is in global scope

if(true)
    {
  let a = 10
  const b = 20 // the values under this is in local scope 
  var c = 30
}

console.log(a); // cause error 
console.log(b); // cause error 
console.log(c); // print 30 (this is the main reason why we are not using var)

// the scope which we will check in console using inspect is different form the scope using node in code envoirnment

function one(){
    const username = "harshit"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    console.log(website); // Not accessible
    two()    
}

// one()


//********************************************************** */

function addOne(num){
    return num + 1
}

addOne(5)

const addTwo = function(num){
    return num+2
}

addTwo(5)
