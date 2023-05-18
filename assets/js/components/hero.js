function hero() {
    return (
        `
        <section id="hero" class="vh-50">
            <div class="text-center p-5 text-white container">
                <h1 class="display-1">Welcome!</h1>
                <p class="display-6">Millions of movies, TV shows and people to discover. Explore now.
                </p>
                <form class="search-form input-group mt-5" role="search">
                        <input  type="text" class="form-control search-input" placeholder="Search Movie" aria-label="Search" aria-describedby="search-button">
                        <button class="btn btn-success" type="submit" id="button-addon2">Search</button>
                </form>
            </div>
        </section>  
        `
    )

}

export default hero  