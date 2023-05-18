import card from "../components/card"

function search(data, query){
    let searchResults;
    console.log(data)
    if(data.results.length){
        console.log('me true')
        searchResults = data.results.map((el) => {
            return (
                `
                <div class="col-md-3 ">
                ${card(el)}
                </div>
                
                `) 
            }).join('')
        }
        else{
        console.log('false me')
        searchResults = "<h1 class='display-1'> No Movie Found! </h1>"
    }

    console.log(data)
    return(
    `
        <section class="container mx-auto my-4">
            <h3>Search Results</h3>
            <div class="w-100 mx-auto row g-2">
            ${searchResults}
            </div>
            <nav class="text-right" aria-label="Page navigation">
                <ul class="pagination">
                    <form class="pagination-form input-group mt-5" role="search">
                        <input  type="hidden" class="form-control search-input" name="query" value="${query}">
                        <input  type="hidden" class="form-control search-input" name="include_adult" value="false">
                        <input  type="hidden" class="form-control search-input" name="language" value="en-US">
    
                        <li class="page-item">
                        <button id="pagination-previous-button" class="page-link rounded-start ${(data.page === 1)? "disabled" : ""}" type="button" aria-label="Previous" data-page-number="${(data.page - 1)}" ${(data.page === 1)? "disabled" : ""}>
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                        </li>
                        
                        <li class="page-item">
                        <button id="pagination-next-button" class="page-link ${(data.page === data.total_pages)? "disabled" : ""}" type="button" aria-label="Next" data-page-number="${(data.page + 1)}"  ${(data.page === data.total_pages)? "disabled" : ""}>
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                        </li>
                    </form>
                </ul>
            </nav>
        </section>
    `)
}

export default search