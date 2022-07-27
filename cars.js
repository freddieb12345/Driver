const search = localStorage.getItem("search")

async function main() {
    const drivers = await fetch(`https://ergast.com/api/f1/drivers/${search}.json?limit=10`)
    const driversData = await drivers.json()
    console.log(driversData.MRData.DriverTable.Drivers)
}

main();