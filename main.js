function Palindrome(entree)
{
var entree =prompt("entrer un mot").toLowerCase();
entree_1 = [...entree].reverse().join("");

if(entree === ""){
    console.log('entrer un mot d\'abord');
}
else if(entree === entree_1){
    console.log(entree + ' est un palindrome');
} 
else
{
    console.log(entree + ' n\'est pas un palindrome ');
}

}
Palindrome();