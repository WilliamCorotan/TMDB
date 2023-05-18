function miniCard(data) {
    return(
        `
        <div class="d-inline-block card text-bg-dark p-0 col-3 position-relative"  data-movie-title="${data.id}">
  <img src="${(data.poster_path)? 'https://image.tmdb.org/t/p/w500' + data.poster_path : '../../../public/no-image.svg'}" class="card-img" alt="${data.original_title}">
  <div class="card-img-overlay row align-items-end bg-dark p-0 m-0 bg-opacity-50">
  <div>
  <h5 class="card-title">${data.original_title}</h5>
  <p class="card-text"><i class="fa-solid fa-star text-warning"></i> ${data.vote_average}</p>
  </div>
  </div>
</div>
        `
    )
}

export default miniCard