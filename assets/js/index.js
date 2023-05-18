import navbar from "./components/navbar";
import footer from "./components/footer";
import homepage from "./layout/homepage";
import movieIndex from "./pages";
import search from "./pages/search";


$(function () {
    $(document).on('click', "#pagination-previous-button", function(){
        console.log('me prev');
        const query = $('[name="query"]').val()
        const include_adult = $('[name="include_adult"]').val()
        const language = $('[name="language"]').val()
        
        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/search/movie",
            data: {
                query,
                include_adult,
                language,
                page: $(this).attr('data-page-number')
            },
            dataType: "json",
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q3NGM5OGU5ODg4MTQ5MDVmMDY5Y2JhYWQ2M2Q4OCIsInN1YiI6IjY0NWRmMWQ1ZjkwYjE5MDBmZTEwMWNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zaYztHODPZMerK-jb8Lw5MItdRP-u2JvdRxFOJajPqA' 
            },
            success: function (response) {
                $('#app').children().remove();
                $('#app').append(search(response, query));
                $("html, body").animate({ scrollTop: 0 }, "fast");
            }
        });
    })
    
    $(document).on('click', "#pagination-next-button", function(){
        console.log('me next');
        const query = $('[name="query"]').val()
        const include_adult = $('[name="include_adult"]').val()
        const language = $('[name="language"]').val()
      
        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/search/movie",
            data: {
                query,
                include_adult,
                language,
                page: $(this).attr('data-page-number')
            },
            dataType: "json",
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q3NGM5OGU5ODg4MTQ5MDVmMDY5Y2JhYWQ2M2Q4OCIsInN1YiI6IjY0NWRmMWQ1ZjkwYjE5MDBmZTEwMWNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zaYztHODPZMerK-jb8Lw5MItdRP-u2JvdRxFOJajPqA' 
            },
            success: function (response) {
                $('#app').children().remove();
                $('#app').append(search(response, query));
                $("html, body").animate({ scrollTop: 0 }, "fast");
            }
        });
    })



    $(document).on('submit', ".search-form", function(event){
        event.preventDefault();
        const searchData = $(this).children('.search-input').val()

        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/search/movie",
            data: {
                query: searchData,
                include_adult: false,
                language: 'en-US',
                page: 1
            },
            dataType: "json",
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q3NGM5OGU5ODg4MTQ5MDVmMDY5Y2JhYWQ2M2Q4OCIsInN1YiI6IjY0NWRmMWQ1ZjkwYjE5MDBmZTEwMWNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zaYztHODPZMerK-jb8Lw5MItdRP-u2JvdRxFOJajPqA' 
            },
            success: function (response) {
                $('#app').children().remove();
                $('#app').append(search(response, searchData));
            }
        });
    })

    $('#navbar-header').append(navbar);

    $('#app').append(homepage);


    $(document).on("click", ".card", function() {
        $.ajax({
            type: "GET",
            url: `https://api.themoviedb.org/3/movie/${$(this).attr('data-movie-title')}`,
            data: {
                language: 'en-US'
            },
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q3NGM5OGU5ODg4MTQ5MDVmMDY5Y2JhYWQ2M2Q4OCIsInN1YiI6IjY0NWRmMWQ1ZjkwYjE5MDBmZTEwMWNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zaYztHODPZMerK-jb8Lw5MItdRP-u2JvdRxFOJajPqA' 
            },
            dataType: "json",
            beforeSend: ()=>{
                console.log($(this))
                $(this).append(`
                <div id="overlay" class="position-absolute top-0 start-0 h-100 w-100 bg-dark z-3 bg-opacity-75 grid place-content-center ">
                    <div class="text-center text-white">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>`);
                
            },
            success: function (response) {
                $('#overlay').remove();
                $('#app').children().remove();
                $('#app').append(movieIndex(response));
                console.log(response);
            }
        });
    })

    $('#main-footer').append(footer);
});