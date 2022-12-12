//Regestration user

function Regester(first_Name, Last_Name, DateOfBirth, Address, PostalCode, City, Countary, Username, Password, verifyPassword){
    for (i=0; i<regestraionForm.length; i++ ){
 console.log(regestrationAttributes[i], regestraionForm[i]);
    }
    console.log("You are regestered succussfully");
}
var regestraionForm= ['Eva', 'Jakobson', '15.01.2000', 'Lamberseteret', '0148', 'Oslo', 'Norway', 'EvaJ', '123', '123'];
var regestrationAttributes= ['First name:', 'Last name:', 'Date of Birth:', 'Address:', 'Postal code:', 'City:','Countary:', 'Username:', 'Password:', 'verify Password:'];
Regester(regestraionForm);



//User Login

function Login(Username, Password){
    for(i=0; i<loginCredentials.length; i++){
        console.log(loginAttributes[i],loginCredentials[i]);
    }
        console.log("You are logged in successfully");
}

var loginCredentials= ['EvaJ', '123']
var loginAttributes= ['Username:', 'Password:'];
Login(loginCredentials);



// User buy a book 

var stockCounter=8;
function AddToCart(CardNumber, ExpiryDate, CVV2){

    for (i=0; i<addToCart_Form.length; i++){
        console.log(addTocart_attributes[i],addToCart_Form[i]);
    }
    console.log ("Your payment is done successfully");
}            
var addToCart_Form= ['4567', '11.2023', '355'];
var addTocart_attributes= ['Card Number:', 'Expiry date:', 'CVV2:'];
AddToCart(addToCart_Form);


// which user buy which book 

var count=8;
function UserA_Buy_BookB(Username, BookName){
     console.log('Number of books in stock before purchases:', count);
     console.log(Username + ' has bought ' + BookName);
    count--;
    console.log('Number of books in stock after purchase:' , count);
 }
var BuyMore= 'true'
UserA_Buy_BookB("EmilyK","Hva er det jeg hører");
UserA_Buy_BookB("EvaJ", "Computer Security");
UserA_Buy_BookB("LiamR", "brann Alarm");


// which books you have in stock

function BooksInStock(bookName, count){
 var bookName;
 var count;
 console.log("Print the list of books we have in stock with their number :", bookName, count)
}
 BooksInStock(["Front End Development, 5"], ["Computer security, 4"]);
 
