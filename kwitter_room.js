
var firebaseConfig = {
      apiKey: "AIzaSyBQZJzkBDi6CM_G-7ONTWtcdL3j8DcjzTM",
      authDomain: "kwitter-9996b.firebaseapp.com",
      databaseURL: "https://kwitter-9996b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9996b",
      storageBucket: "kwitter-9996b.appspot.com",
      messagingSenderId: "1022014625060",
      appId: "1:1022014625060:web:cd466a4538505431788fb1"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room name - " + Room_names);    
  row =  "<div class = 'room_name' id = '" + Room_names + "' onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
});});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

function addroom(){
      room = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room).update({
            purpose: "adding room name"
      });


}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room" , name);
      window.location = "kwitter_page.html";
}