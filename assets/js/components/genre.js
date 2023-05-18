import miniCard from "./miniCard";

function genre(data) {   
    $.ajax({
        type: "GET",
        url: `https://api.themoviedb.org/3/discover/movie/`,
        data: {with_genres: data.id},
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q3NGM5OGU5ODg4MTQ5MDVmMDY5Y2JhYWQ2M2Q4OCIsInN1YiI6IjY0NWRmMWQ1ZjkwYjE5MDBmZTEwMWNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zaYztHODPZMerK-jb8Lw5MItdRP-u2JvdRxFOJajPqA' 
        },
        dataType: "json",
        success: function (response) {
            console.log('is mee')
            response.results
            $("#genre-container").append(` 
            <div class="row ">

                    <h2 class="display-2">${data.name}</h2>
                    <div class="row overflow-x-scroll w-100 flex-nowrap gap-2">
                        ${response.results.map(el => {
                            return miniCard(el)
                        }).join('')}

                    </div>

            </div>

        `)
        }
    });


}

export default genre;