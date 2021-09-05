        function AKAN_NAME() {
            var dd = document.getElementById("dd").value; // date

            var mm = document.getElementById("mm").value; //month
            
            var yy = document.getElementById("yy").value; //year
            
            var male = document.getElementById("male").checked; //male
            
            var female = document.getElementById("female").checked; // female
            
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
        //////////////////if enterd in valid date or above 31///////////
            if (dd <= 0 || dd > 31) { 
                document.getElementById("error").innerText = "Please enter a valid date!" 
                
            } else if ((mm === "September" || mm === "April" || mm === "June" || mm === "November") && (dd <= 0 || dd > 30)) { 
                document.getElementById("error").innerText = "Please enter a valid date!" 
                    /////////if left black sector of month 
            
            } else if (mm === "------") { 
                document.getElementById("error").innerText = "Please select a month!" 
                    ///////////////not above 2020 to be put in year section 
            } else if (yy <= 0 || yy > 2020) { 
                document.getElementById("error").innerText = "Please enter a valid year!" 
                
                ////////////leap year

            } else if ((mm === "February") && (dd <= 0 || dd > 29) && (0 == yy % 4)) { 
                document.getElementById("error").innerText = "Please enter a valid date!" 
                
                //////////not leap year 
            } else if ((mm === "February") && (dd <= 0 || dd > 28) && (0 != yy % 4)) {  
                document.getElementById("error").innerText = "Please enter a valid date!" 
                
                
            ////////////// respond for female
            } else if (female === true) { 
                document.getElementById("main").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!" //shows result by replacing the HTML content in the id=result
                document.getElementById("main").style.color = "green"
                document.getElementById("main").style.padding = "10% 12% 10% 12%"
                document.getElementById("main").style.fontSize = "30px"

            /////////////repond for male

            } else if (male === true) {
                document.getElementById("main").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + maleNames[dayOfTheWeek] + "!" //shows result by replacing the  HTML content in the id=result
                document.getElementById("main").style.color = "green"
                document.getElementById("main").style.padding = "10% 12% 10% 12%"
                document.getElementById("main").style.fontSize = "30px"

            ////////////////if not selected any button
            } else if ((female === false) && (male === false)) { 
                document.getElementById("error").innerText = "Please select gender!" 
            
            }
        }
