



function submitForm(){
        let year = ($('#year_lap input[name=year]').val())
        let lap = ($('#year_lap input[name=lap]').val())
        $.get("https://ergast.com/api/f1/" + year + "/" + lap + "/driverStandings.json", function (data) {
            //  grabbing data with drivers first name
            document.getElementById('name)')
            console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName)

        //     // grabbing data with drivers last name
        //     console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName)

        //     // grabbing driver's nationality
        //     console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality)

        //     //grabbing drivers sponsor
        //     console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].constructorId)
            
        //     //grabbing drivers sponsor
        //     console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].constructorId)
            // 
        })
    }




