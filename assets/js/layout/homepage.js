import card from "../components/card";
import genre from "../components/genre";
import hero from "../components/hero";
import fetchGenre from "../hooks/fetchGenre";
let popular ;
let i = 0
let genres = fetchGenre();



$.ajax({
    type: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    async: false,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q3NGM5OGU5ODg4MTQ5MDVmMDY5Y2JhYWQ2M2Q4OCIsInN1YiI6IjY0NWRmMWQ1ZjkwYjE5MDBmZTEwMWNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zaYztHODPZMerK-jb8Lw5MItdRP-u2JvdRxFOJajPqA' 
    }, 
    data: {page: 1},
    dataType: "json",
    success: function (response) {
        popular  = response.results.slice(0, 9)
    }
});


function homepage() {
    return (
        `
        ${hero()}

        <div class="mt-5 row">
        <section class="pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h3 class="mb-3">Trending</h3>
            </div>
            
            <div class="col-6 text-right d-flex gap-2 justify-content-end">
            <button class="btn btn-success mb-3 mr-1" type="button" data-bs-target="#popularCarousel" data-bs-slide="prev">
            <i class="fa fa-arrow-left"></i>
           </button>
           <button class="btn btn-success mb-3 mr-1" type="button" data-bs-target="#popularCarousel" data-bs-slide="next">
           <i class="fa fa-arrow-right"></i>
           </button>
            </div>
            <div class="col-12">
            <div id="popularCarousel" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div class="row">

            <div class="col-md-4 mb-3">
                ${card(popular[0])}
            </div>

            <div class="col-md-4 mb-3">
                ${card(popular[1])}
            </div>

            <div class="col-md-4 mb-3">
                ${card(popular[2])}
            </div>

        </div>
    </div>

    <div class="carousel-item ">
        <div class="row">

            <div class="col-md-4 mb-3">
                ${card(popular[3])}
            </div>

            <div class="col-md-4 mb-3">
                ${card(popular[4])}
            </div>

            <div class="col-md-4 mb-3">
                ${card(popular[5])}
            </div>

        </div>
    </div>

    <div class="carousel-item ">
        <div class="row">

            <div class="col-md-4 mb-3">
                ${card(popular[6])}
            </div>

            <div class="col-md-4 mb-3">
                ${card(popular[7])}
            </div>

            <div class="col-md-4 mb-3">
                ${card(popular[8])}
            </div>

        </div>
    </div>
    
  </div>

</div>
        </div>
    </div>
                            
</section>

<section id="genre-container" class="container">
${genres.map((el)=>{
    return genre(el);
}).join('')}
</section>
        </div>

        `
    )
}
export default homepage