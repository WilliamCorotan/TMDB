function similarMoviesCard(data) {
    return(
        `
        <div class="p-2 col-md-4 col-lg-2  ">
            <div class="card text-bg-dark p-0 position-relative h-100"  data-movie-title="${data.id}">
                <img src="${(data.poster_path)? 'https://image.tmdb.org/t/p/w500' + data.poster_path : '../../../public/no-image.svg'}" class="card-img h-100 object-fit-cover" alt="${data.original_title}">
                <div class="card-img-overlay row align-items-end bg-dark p-0 m-0 bg-opacity-50">
                    <div>
                        <h5 class="card-title">${data.original_title}</h5>
                        <p class="card-text"><i class="fa-solid fa-star text-warning"></i> ${data.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    )
}

export default similarMoviesCard