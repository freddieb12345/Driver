// API KEY: 1d97cf91
// http://www.omdbapi.com/?i=tt3896198&apikey=1d97cf91

const carEl = document.querySelector(".car__wrapper")
const carElClasses = carEl.classList

async function showSearchResults(event) {
    const searchInput = document.getElementById("search__input").value
    localStorage.setItem("search",searchInput)
    toggleLoading()
    moveCarOffPage()
    setTimeout(() => {
        window.location.href = `${window.location.origin}/cars.html`
    },1000)
}

function toggleLoading() {
    const search = document.getElementById("search__overlay")
    const loading = document.getElementById("loading__overlay")
    search.classList += " display-none"
    loading.classList.remove("display-none")
}

function moveCarOnPage(event){
    carEl.classList += " car__wrapper--typing"
    carEl.classList.remove("car__wrapper--start")
    console.log(carEl)
}

function moveCarOffPage() {
    carEl.classList += " car__wrapper--search"
    carEl.classList.remove("car__wrapper--typing")
    carEl.classList.remove("car__wrapper--start")
    console.log(carEl)
}
