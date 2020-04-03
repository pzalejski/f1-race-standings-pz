
function submitForm() {
    let i = 0;
    let year = ($('#year_lap input[name=year]').val())
    let lap = ($('#year_lap input[name=lap]').val())
    $('.table').attr('id','showTable')
    $.get("https://ergast.com/api/f1/" + year + "/" + lap + "/driverStandings.json", function (data) {
        while (i < 8) {
            //  grabbing data with drivers first name testing via console
            console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName)

            // display drivers first and last name in table
            $(`.${i} .name`).html((data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName) + ' ' + (data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName));

            // displayinbg driver's nationality in table
            $(`.${i} .nationality`).html(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality);

            //display drivers sponsor in table
            $(`.${i} .sponsor`).html(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].constructorId);
        
            //display drivers points in table
            $(`.${i} .points`).html(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points);
            
            
            i++
        }
        })
}




