function card(data) {
    return(
        `
        <div class="card w-100" data-movie-title="${data.id} position-relative">
            <img src="${(data.poster_path)? 'https://image.tmdb.org/t/p/w500' + data.poster_path : '../../../public/no-image.svg'}" class="card-img-top img-fluid h-100" alt="${data.original_title}">
            <div class="card-body min-h-32 text-justify d-grid text-bg-dark">
                <span class="card-text fs-6 d-block"><i class="fa-solid fa-star text-warning"></i> ${data.vote_average}</span>
                <span class="card-text fs-6 d-block fw-bold">${data.original_title}</span>
                <span class="fs-6 align-self-end">${data.release_date}</span>
            </div>
        </div>
        `
    )
}

export default card