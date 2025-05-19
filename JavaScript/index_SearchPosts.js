function searchPosts() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var posts = document.querySelectorAll(".posts > div");

    for (var i = 0; i < posts.length; i++) {
        var titleElement = posts[i].querySelector(".title"); 
        var postElement = posts[i]; 

        if (titleElement && titleElement.innerText.toLowerCase().includes(searchInput)) {
            postElement.style.display = "block";
        } else {
            postElement.style.display = "none";
        }
    }
}