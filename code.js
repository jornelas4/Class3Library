$(document).ready(
    function () {
    // event handlers
    $("button").click(lateFees);


    //Other functions
    function lateFees(){

        // number of books being checked out

        var numberBooks = parseFloat($("#books").val());

//number of dvds being checked out

        var numberDVDs = parseFloat($("#DVDs").val());


// Default rental duration

        var rentalDuration = parseFloat($("#rentalDays").val());


//timeframe withouht fee

        var returning = parseFloat($("#returnDays").val());

//additional days books kept * items

        var booksFees = (numberBooks * (returning - rentalDuration)) * 0.25;

// additional days dvds kept * items


        var dvdFees = (numberDVDs * (returning - rentalDuration)) * 0.50;

        var totalFees = booksFees + dvdFees


        // Results in the span tags

        $("#result").text(totalFees.toFixed(2));
        $("p.output").show();


    }




});