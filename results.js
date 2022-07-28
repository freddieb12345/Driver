localStorage.setItem("year", 2022)
localStorage.setItem("round", 1)

function getYearOnChange(event){
    let year = event.target.value
    localStorage.setItem("year", year)
    getRaceData()
    getRoundData(year)
}

function getRoundOnChange(event) {
    round = event.target.value
    localStorage.setItem("round", round)
    getRaceData()
}

async function getRaceData() {
    round = localStorage.getItem("round")
    year = localStorage.getItem("year")
    const races = await fetch(`https://ergast.com/api/f1/${year}/${round}/results.json?limit=25`)
    const racesData = await races.json()
    const resultData = racesData.MRData.RaceTable.Races[0].Results
    const tableRowEl = document.querySelector(".results__table")
    tableRowEl.innerHTML = resultData.map((result) => tableHTML(result)).join("")
}

async function getRoundData(year) {
    if (!year) {
        year = 2022
    }
    const seasons = await fetch(`http://ergast.com/api/f1/${year}.json`)
    const seasonsData = await seasons.json()
    const roundsData = seasonsData.MRData.RaceTable.Races
    console.log(roundsData)
    const roundFilterEl = document.getElementById("round-filter")
    roundFilterEl.innerHTML = roundsData.map((round) => roundHTML(round)).join("")
}

getRaceData()
getRoundData(year)


function roundHTML(round) {
    return `<option value="${round.round}">${round.raceName}</option>`
}

function tableHTML(result) {
    let time = result.status
    if(result.Time) {
        time = result.Time.time
    }

    let fastestLap = 'N/A'
    if(result.FastestLap) {
        fastestLap = result.FastestLap.Time.time
    }

    let fastestLapRank = 'N/A'
    if(result.FastestLap) {
        fastestLapRank = result.FastestLap.rank
    }

    return `<tr class="results__table--results">
        <td class="results__table--result">${result.position}</td>
        <td class="results__table--result">${result.number}</td>
        <td class="results__table--result">${result.Driver.givenName} ${result.Driver.familyName}</td>
        <td class="results__table--result">${result.Constructor.name}</td>
        <td class="results__table--result">${result.laps}</td>
        <td class="results__table--result">${result.grid}</td>
        <td class="results__table--result">${time}</td>
        <td class="results__table--result">${fastestLap}</td>
        <td class="results__table--result">${fastestLapRank}</td>
        <td class="results__table--result">${result.status}</td>
        <td class="results__table--result">${result.points}</td>
    </tr>`
}