function goToPostPage(){
    window.location.href = "http://localhost/TAPrakWeb/postPage.php"
}
function goToProfilePage(){
    window.location.href = "http://localhost/TAPrakWeb/profilePage.html"
}

function goToBeranda(){
    window.location.href = "http://localhost/TAPrakWeb/homePage.php"
}

document.addEventListener("DOMContentLoaded", function() {
    var contentElement = document.getElementById("content");
    if (contentElement) {
        contentElement.style.textAlign = "justify";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var contentElement = document.getElementById("synopsis");
    if (contentElement) {
        contentElement.style.textAlign = "justify";
    }
});
  