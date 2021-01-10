export async function search(search){
    console.log(search)
    // console.log(searchQuery)
    let res = await fetch(`https://patricks-bookshelf.herokuapp.com/?search/${search}`)
    let data = await res.json();
    let searchRes = data.payload;
    console.log(searchRes)
    return searchRes;
    }