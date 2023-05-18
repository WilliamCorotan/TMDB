import similarMoviesCard from './similarMoviesCard';

function similarMovies(id){
let data;
$.ajax({
    type: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    dataType: "json",
    async: false,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q3NGM5OGU5ODg4MTQ5MDVmMDY5Y2JhYWQ2M2Q4OCIsInN1YiI6IjY0NWRmMWQ1ZjkwYjE5MDBmZTEwMWNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zaYztHODPZMerK-jb8Lw5MItdRP-u2JvdRxFOJajPqA' 
    },
    success: function(response) {
        data = response.results.slice(0, 6)
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
});

return(
   `
    ${data.map((el)=>{
        return similarMoviesCard(el)
    }).join('')}
   `) 

}


export default similarMovies