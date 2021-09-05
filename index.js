function AKAN_NAME() {
    var dd = document.getElementById("dd").value; // date

    var mm = document.getElementById("mm").value; //month

    var yy = document.getElementById("yy").value; //year

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

    var birthDate = new Date(mm + '/' + dd + '/' + yy);

    var dayOfTheWeek = birthDate.getDay();
    //////////////////if enterd in valid date 
    
    if (dd <= 0 || dd > 31) {
        alert("Please enter a valid date!");

    } else if ((mm === "September" || mm === "April" || mm === "June" || mm === "November") && (dd <= 0 || dd > 30)) {
        alert("Please enter a valid date!");
        /////////if left black sector of month 

    } else if (mm === "------") {
        alert("Please enter a valid date!");

    } else if (yy <= 0 ) {
        alert("Please enter a valid date!");

        ////////////leap year

    } else if ((mm === "February") && (dd <= 0 || dd > 29) && (0 == yy % 4)) {
        alert("Please enter a valid date!");

        //////////not leap year 
    } else if ((mm === "February") && (dd <= 0 || dd > 28) && (0 != yy % 4)) {
        alert("Please enter a valid date!");


        ////////////// respond for female
    } else if (female === true) {
        alert("You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!"); //shows result by replacing the HTML content in the id=result
        document.getElementById("main").style.color = "green"
        document.getElementById("main").style.fontSize = "30px"

        /////////////repond for male

    } else if (male === true) {
        alert("You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + maleNames[dayOfTheWeek] + "!"); //shows result by replacing the  HTML content in the id=result
       

        ////////////////if not selected any button
    } else if ((female === false) && (male === false)) {
        alert("Please select gender!");

    }

}
