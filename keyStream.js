//variables
const plainTextValue = document.querySelector(".plainText")
const plainText = document.querySelector("#plainText");
const button = document.querySelector("button");
const plainTextLength = document.querySelector(".plainTextLength")
const keyLength = document.querySelector(".keyLength")
const key = document.querySelector(".key")
const asciiKey = document.querySelector(".asciiKey")
const binaryKey = document.querySelector(".binaryKey")
const plainTextNum = document.querySelector(".plainTextNum")
const x = document.querySelector(".x")
const s = document.querySelector(".s")
const y = document.querySelector(".y")

//this fuction returns the length of the plain text
function textLength(){
    let textLength = plainText.value.length
    
    return textLength
}

//this function generate a keyStream based on the length of the plain text    
function keyStreamInit(){

plainText.innerHTML = ""
//this array will be populated with the random numbers
let keyStream = []


if (textLength() == 0){
   alert("Invalid input");
}else{

//text length can not be 0 but greater

let operator = Math.floor(Math.random() * textLength()) + 1;

console.log("the length of the plainText is :" + textLength())
console.log("the length of the keyStream is : " + operator)
    // loop
for (let i = 0; i < operator; i++){
    // output a random number between 33 and 126 as per Ascii table
   let cipher  = Math.floor(Math.random() * 94) + 33;
 //populate the array  
   keyStream.push(cipher)
   console.log(cipher)
}

// convert the array from number to ascii code 
let asciiText = String.fromCharCode.apply(null, keyStream);

//ascii code into an array
let asciiKeyStreem = asciiText.split("");

console.log(asciiKeyStreem.length)

let binaryKeyStream = []

//this f push each convert from ascii to binary code and then push it into the array
for(let i=0; i < asciiKeyStreem.length; i++){
let binaryText = asciiKeyStreem[i].charCodeAt(0).toString(2).padStart(8,'0') + " ";
binaryKeyStream.push(binaryText)
console.log(asciiKeyStreem[i])  
}  
console.log(asciiKeyStreem)

console.log(binaryKeyStream)
// let binaryText = asciiKeyStreem[0].charCodeAt(0).toString(2) + " ";
//    console.log(binaryText)
//    binaryKeyStream.push(binaryText)
//    console.log(binaryKeyStream)

// IMPORTANT
// arrays forplain text Ashii an binary 
let plainTextArray = []
let plainTextAscii = []
let plainTextBinary = []

for(let i = 0; i < plainText.value.length; i++){
    // console.log(`The character code ${sentence.charCodeAt(i)} is equal to ${sentence.charAt(i)}`);
    
    plainTextArray.push(plainText.value.charAt(i))
    plainTextAscii.push(plainTextArray[i].charCodeAt(0))
    plainTextBinary.push(plainTextAscii[i].toString(2).padStart(8,'0') + " ")
    
}






console.log(plainTextArray)
console.log(plainTextAscii)
console.log(plainTextBinary)


plainTextValue.innerHTML = "<b>PlainText: </b> " + plainText.value
plainTextLength.innerHTML = "<b>PlainText Length: </b> " + textLength()
keyLength.innerHTML = "<b>KeyStream length</b>: " + operator
key.innerHTML = "<b>Numeric KeyStream: </b>" + keyStream.join(' ')
//print ascii code
asciiKey.innerHTML = "<b>Equivalent to Ascii: </b> " + asciiText;
binaryKey.innerHTML = "<b><span>Binary KeyStream: </span>  </b>" + binaryKeyStream.join(" ")
x.innerHTML = "<b>Plain Text: </b>" + plainTextArray.join(" ")
s.innerHTML = "<b>Numeric Code: </b>" + plainTextAscii.join(" ")
y.innerHTML = "<b><span>Equivalent to Binary Code: <span/> </b>" + plainTextBinary.join(" ")

// plainTextNum

//number to ascii


console.log(typeof asciiText)
//    console.log(binaryText)
//    console.log(keyStream);
}




}
function init(){
//call 
keyStreamInit()

}

button.addEventListener("click", init)