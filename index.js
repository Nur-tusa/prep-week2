function AKAN_NAME() {
    var dy = document.getElementById("dy").value; // date

    var mth = document.getElementById("mth").value; //month

    var yr = document.getElementById("yr").value; //year

    var female = document.getElementById("female").checked; // female

    var male = document.getElementById("male").checked; //male



    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",          ////////////dAYS
        "Thursday",
        "Friday",
        "Saturday"];


    var maleNames = ["Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",           ///////////////////male akan name
        "Yaw",
        "Kofi",
        "Kwame"];

    var femaleNames = ["Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",           //////////////////female akan names
        "Yaa",
        "Afua",
        "Ama"];

    /////MY FORMULA

    var birthD = new Date(mth + '/' + dy + '/' + yr);   ////////  putting birthday as a new date

    var dayWeek = birthD.getDay();
    //////////////////if enterd in valid date 
    
    if (dy <= 0 || dy > 31) {
        alert("Please enter a valid date!.thank you");

    } else if ((mth === "September" || mth === "April" || mth === "June" || mth === "November") && (dy <= 0 || dy > 30)) {
        alert("Please enter a valid date!.thank you");
        /////////if left black sector of month 

    } else if (mth === "------") {
        alert("Please enter a valid date!.thank you");

    } else if (yr <= 0 ) {
        alert("Please enter a valid date!.thank you");

        ////////////leap year

    } else if ((mth === "February") && (dy <= 0 || dy > 29) && (0 == yr % 4)) {
        alert("Please enter a valid date!.thank you");

        //////////not leap year 
    } else if ((mth === "February") && (dy <= 0 || dy > 28) && (0 != yr % 4)) {
        alert("Please enter a valid date .thank you!");


        ////////////// respond for female
    } else if (female === true) {
        alert("You were born on a " + days[dayWeek] + ".\n" + "Your Akan name is " + femaleNames[dayWeek] + "!"); //shows result by replacing the HTML content in the id=result
       
        /////////////repond for male

    } else if (male === true) {
        alert("You were born on a " + days[dayWeek] + ".\n" + "Your Akan name is " + maleNames[dayWeek] + "!"); //shows result by replacing the  HTML content in the id=result
       

        ////////////////if not selected any button
    } else if ((female === false) && (male === false)) {
        alert("Please select gender!.thank you");

    }

}
