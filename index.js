function AKAN_NAME() {
    var dy = document.getElementById("dy").value; // date

    var mth = document.getElementById("mth").value; //month

    var yr = document.getElementById("yr").value; //year

    var female = document.getElementById("female").checked; // female

    var male = document.getElementById("male").checked; //male

    var birthD = new Date(mth +  " " + yr + " " + dy);   ////////  putting birthday as a new date
              /////my formula   
     var  dayWeek = ( (  ((5*yr/4) ) + ((26*(mth+1)/10)) + dy )%7);


    var dayWeek = birthD.getDay();

    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",          ////////////dAYS
        "Thursday",
        "Friday",
        "Saturday"];


    var maleakan = ["Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",           ///////////////////male akan name
        "Yaw",
        "Kofi",
        "Kwame"];

    var femaleakan = ["Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",           //////////////////female akan names
        "Yaa",
        "Afua",
        "Ama"];


  
    //////////////////if enterd in valid date 
    
    if (dy <= 0 || dy > 31) {
        alert("Please enter a valid date!.thank you");

    } else if ((mth === "September" || mth === "April" || mth === "June" || mth === "November") && (dy <= 0 || dy > 30)) {
        alert("Please enter a valid date!.thank you");
        /////////if left black sector of month 

    } else if(mth =="/" && yr =="/" && dy =="/") {
      alert("Please Enter your date");
    

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
        alert("You were born on a " + days[dayWeek] + ".\n" + "akan name is " + femaleakan[dayWeek] + "!"); 
       
        /////////////repond for male

    } else if (male === true) {
        alert("You were born on a " + days[dayWeek] + ".\n" + "Akan name is " + maleakan[dayWeek] + "!"); 
       

        ////////////////if not selected any button
    } else if ((female === false) && (male === false)) {
        alert("Please select gender!.thank you");

    }

}