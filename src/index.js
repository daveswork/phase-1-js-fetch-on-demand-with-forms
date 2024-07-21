const init = () => {
    const movieForm = document.querySelector("form");
    movieForm.addEventListener("submit", (event)=> {
        event.preventDefault();
        const movieInput = document.querySelector("input#searchByID");
        // console.log(movieInput.value);

        fetch(`http://localhost:3000/movies/${movieInput.value}`)
            .then((response) => response.json())
            .then((data) => {
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");
                title.innerText = data.title;
                summary.innerText = data.summary;
            })

    })
    
  
}

document.addEventListener('DOMContentLoaded', init);