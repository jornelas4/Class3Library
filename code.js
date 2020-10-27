function lateFees()
{

// number of books being checked out

var numberBooks = prompt("How many books? ");


//converting from text to number

numberBooks = parseFloat(numberBooks);


//number of dvds being checked out

var numberDVDs= prompt("How many DVDs? ");

//convert from text to number

numberDVDs = parseFloat(numberDVDs);

// Default rental duration

var rentalDuration = prompt("How many days is your rental? ");

rentalDuration = parseFloat(rentalDuration)

//timeframe withouht fee

var returning = prompt("How many days to return")

//additional days books kept * items

var booksFees = (numberBooks * (returning - rentalDuration)) * 0.25;

// additional days dvds kept * items


var dvdFees = (numberDVDs *(returning - rentalDuration)) * 0.50;

var totalFees = booksFees + dvdFees

alert (`Your total is ${totalFees}`);
}