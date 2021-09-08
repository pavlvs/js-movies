// cf⇥ const arrow function assignment

// ta⇥ ternary statement
// fl⇥ for loop (ES6)
// fo⇥ for of loop (ES6)
// ife⇥ else statement
// tc⇥ try/catch

// ae⇥ addEventListener
// gi⇥ getElementById
// gt⇥ getElementsByTagName
// qs⇥ querySelector
// cel⇥ createElement
// heac⇥ appendChild
// hect⇥ classList.toggle
// hega⇥ getAttribute
// hesa⇥ setAttribute
// hera⇥ removeAttribute

// cs⇥ class (ES6)
// csx⇥ extend a class (ES6)
// m⇥ method (ES6 syntax)
// get⇥ getter (ES6 syntax)
// set⇥ setter (ES6 syntax)

// fan⇥ anonymous function
// fn⇥ named function
// asf⇥ async function
// aa⇥ async arrow function with
// af⇥ arrow function (ES6)
// f⇥ arrow function with body (ES6)
// fr⇥ arrow function with return (ES6)

// ra⇥ return new array
// rp⇥ return Promise (ES6)
// tf⇥ this

// fe⇥ forEach loop
// map⇥ map function

// st⇥ setTimeout
// si⇥ setInterval

const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/?', {
        params: {
            apikey: 'e1826389',
            s: searchTerm,
        },
    })

    if (response.data.Error) {
        return []
    }

    return response.data.Search
}

const root = document.querySelector('.autocomplete')

root.innerHTML = /*html*/ `
    <label htmlFor=""><b>Search For A Movie</b></label>
    <input type="text" class="input" />
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`

const input = document.querySelector('input')
const dropdown = document.querySelector('.dropdown')
const resultsWrapper = document.querySelector('.results') // cf⇥ const arrow function assignment

const onInput = async (ev) => {
    const movies = await fetchData(ev.target.value)

    if (!movies.length) {
        dropdown.classList.remove('is-active')
        return
    }

    resultsWrapper.innerHTML = ''
    dropdown.classList.add('is-active')
    for (let movie of movies) {
        const option = document.createElement('a')
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster

        option.classList.add('dropdown-item')
        option.innerHTML = /*html*/ `
        <img src="${imgSrc}" alt="" />
        ${movie.Title}
        `
        option.addEventListener('click', () => {
            dropdown.classList.remove('is-active')
            input.value = movie.Title
        })
        resultsWrapper.appendChild(option)
    }
}

input.addEventListener('input', debounce(onInput, 500))

document.addEventListener('click', (event) => {
    if (!root.contains(event.target)) {
        dropdown.classList.remove('is-active')
    }
})
