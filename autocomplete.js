const createAutoComplete = ({ root }) => {
    root.innerHTML = /*html*/ `
    <label htmlFor=""><b>Search For A Movie</b></label>
    <input type="text" class="input" />
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`

    const input = root.querySelector('input')
    const dropdown = root.querySelector('.dropdown')
    const resultsWrapper = root.querySelector('.results') // cf⇥ const arrow function assignment

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
                onMovieSelect(movie)
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
}
