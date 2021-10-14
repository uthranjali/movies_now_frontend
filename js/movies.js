const apiurl = 'http://127.0.0.1:5000/movies';

document.querySelector("#add_movie_button").addEventListener("click", e => {
    e.preventDefault();
    var movie_name = document.querySelector("#movie_name").value;
    var movie_year =  document.querySelector("#movie_year").value;
    var movie_genre =  document.querySelector("#movie_genre").value;

    var movie_data = {
        "title": movie_name,
        "year": movie_year,
        "genre": movie_genre
    }

    fetch(
        apiurl,
        {
            method: "GET",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(movie_data)
        }
    )
    .then((res) => res.json)
    .then((data) => {
        console.log(data)
        // document.querySelector(".form_message").textContent = data["status"];
    })
    .catch((error) => {
        console.error(error);
    });
});


// function name() {

// }


// const name = () => {

// }