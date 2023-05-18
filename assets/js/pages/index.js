import similarMovies from "../components/similarMovies"

function movieIndex(data){

    
    return (
        `
        <section id="movie-index" style="
        background-image: linear-gradient(
            to bottom,
            rgba(33, 37, 41, 1),
            rgba(25,135,84, 0.8)
          ), url('https://image.tmdb.org/t/p/w500/${data.backdrop_path}');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          ">
            <div class="container mx-auto row py-5 text-white">
                
                <!-- Movie Poster Section -->
                <div class="movie-poster col-lg-4">
                    <img class="rounded w-100" src="${(data.poster_path)? 'https://image.tmdb.org/t/p/w500' + data.poster_path : '../../../public/no-image.svg'}" alt="${data.title}">
                </div>

                <!-- Movie Details Section -->
                <div class="movie-details col-lg-8">
                    <h1>${data.original_title}</h1>
                    <!-- Sub heading Section -->
                    <div class="sub-heading ">
                        <small>${data.release_date}</small>
                        <span>•</span>
                        ${data.genres.map(function(genre){
                            return (
                                `
                                    <span>${genre.name}</span>
                                `
                            ) 
                        })} 
                        <span>•</span>
                        <small>${data.runtime} mins</small>
                    </div>

                    <div class=" my-3">
                        <a type="button" class="fs-5 text-decoration-none text-white me-1"><i class="fa-solid fa-star text-warning"></i> ${data.vote_average}</a>
                        <a type="button" ><i class="fa-solid fa-list bg-dark p-3 rounded-circle"></i></a>
                        <a type="button" ><i class="fa-solid fa-heart bg-dark p-3 rounded-circle"></i></a>
                        <a type="button" ><i class="fa-solid fa-bookmark bg-dark p-3 rounded-circle"></i></a>
                        <a type="button" ><i class="fa-solid fa-star bg-dark p-3 rounded-circle"></i></a>
                    </div>

                    <p><i>${data.tagline}</i></p>

                    <div>
                      <h4>Overview</h4>  
                      <p>${data.overview}</p>
                      <small>Original Title: ${data.original_title}</small>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-4 container">
            <h3>Similar Movies</h3>
            <div class="row">
            ${similarMovies(data.id)}
            </div>
        </section>
        `)
}

export default movieIndex