// ae⇥ addEventListener
// gi⇥ getElementById
// gt⇥ getElementsByTagName
// qs⇥ querySelector
// cel⇥ createElement
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
// rp⇥ return Promise (ES6)

// fe⇥ forEach loop
// map⇥ map function

const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/?', {
        params: {
            apikey: 'e1826389',
            s: 'avengers',
        },
    })

    console.log(response.data)
}

fetchData()