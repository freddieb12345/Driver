const carEl = document.querySelector(".car__wrapper")
const carElClasses = carEl.classList
let constrastToggle = false;

async function showSearchResults(event) {
    const searchInput = document.getElementById("landing__search").value
    localStorage.setItem("search", searchInput)
    toggleLoading()
    moveCarOffPage()
    setTimeout(() => {
        window.location.href = `${window.location.href}/results.html`
    },1000)
}

function toggleLoading() {
    const search = document.getElementById("search__overlay")
    const loading = document.getElementById("loading__overlay")
    search.classList += " display-none"
    loading.classList.remove("display-none")
}

function moveCarOffPage() {
    carEl.classList += " car__wrapper--search"
    carEl.classList.remove("car__wrapper--typing")
    carEl.classList.remove("car__wrapper--start")
    console.log(carEl)
}
