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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      
                      console.log(firebase_message_id);
                      console.log(message_data);

                      names = message_data['name']; 
                      message = message_data['message'];
                      like = message_data['like'];

                      name_dis = "<h4>" + names + "<img class = 'user_tick' src = 'tick.png'></h4>";
                      tag = "<h4>" + message + "</h4>";
                      like_button = "<button class = 'btn btn-warning' id =" + firebase_message_id + " value = " + like + " onclick = 'updateLike(this.id)'";  
                      span_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";

                      row = name_dis + tag + like_button + span_tag;
                      document.getElementById("output").innerHTML += row;
                }
          });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room");
    window.location = "index.html";
}

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0 
    })
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

