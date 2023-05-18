
function fetchGenre(){
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
    return genres
}



export default fetchGenre;