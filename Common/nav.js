document.querySelector(".search").addEventListener("click",searchFunction);

function searchFunction(){
    var searchData = document.querySelector(".search_section").value;
    console.log(searchData)
    localStorage.setItem("seachValue",JSON.stringify(searchData));
    window.location.href = "../searchResult/searchResult.html"
}