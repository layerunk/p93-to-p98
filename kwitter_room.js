
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

      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      window.location = "index.html";
}
