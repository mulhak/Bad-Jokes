const ajoke = document.getElementById('joke')
const jokebtn = document.getElementById('jokeBtn')

jokebtn.addEventListener('click', generateJoke)

generateJoke()
//using async await
 async function generateJoke() {
    const config= {
        headers:{
            Accept:'application/json'
        },
    }
    const res = await fetch('https://icanhazdadjoke.com/', config)
    
    const data = await res.json()
    ajoke.innerHTML = data.joke

}


//Using  .then()


/* function generateJoke() {

    const config= {
        headers: {
           Accept: 'application/json'
        }
    }
 fetch('https://icanhazdadjoke.com/', config)
 .then((res) => res.json())
 .then((data) => {
     ajoke.innerHTML = data.joke
 })

}*/
