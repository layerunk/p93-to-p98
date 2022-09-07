
function join(){

    username = document.getElementById("name_input").value;
    localStorage.setItem("name" , username);
    window.location = "kwitter_room.html";

}