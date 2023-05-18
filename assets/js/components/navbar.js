import homepage from "../layout/homepage";

let genres;

$.ajax({
    type: "GET",
    url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
    dataType: "json",
    async: false,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q3NGM5OGU5ODg4MTQ5MDVmMDY5Y2JhYWQ2M2Q4OCIsInN1YiI6IjY0NWRmMWQ1ZjkwYjE5MDBmZTEwMWNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zaYztHODPZMerK-jb8Lw5MItdRP-u2JvdRxFOJajPqA' 
    },
    success: function (response) {
        genres = response.genres;
    }
});

$(document).on('click', "#navbar-brand", function() {
    location.reload();
})

function navbar(){
   return (
    `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div class="container">
        <a type="button" id="navbar-brand" class="navbar-brand">TMDb</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
                <a type="button" class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a type="button" class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a type="button" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Genres
                </a>
                <ul class="dropdown-menu">
                    <div class="container">
                        <div class="row my-4 w-max-content">
                        
                            ${genres.map(genre => {
                                return `<li class="col-3 " ><a type="button" class="dropdown-item w-0" href="#">${genre.name}</a></li>`
                            })}
                        </div>
                    </div>
                </ul>
            </li>
            </ul>
            <form class="d-flex search-form" role="search">
                <input class="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </div>
    </nav>
    `) 
}

export default navbar;