const accountId = 154587 //We cannot change the value of const type variable
let accountEmail = "test@gmail.com" //But today we will use let
var accountPassword = "12345" //while using var there is an issue of the block and functional scope so that case we will use let in most of the case 
accountCity = "Kanpur" //We can also declare in this way as well but not recommended
let accountState //It is undefined

console.table([accountId, accountEmail, accountPassword, accountCity])
