// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8HbcadRtSrumM0COVQ1o2P9R1zRfIbao",
    authDomain: "project-94-a9df1.firebaseapp.com",
    databaseURL: "https://project-94-a9df1-default-rtdb.firebaseio.com",
    projectId: "project-94-a9df1",
    storageBucket: "project-94-a9df1.appspot.com",
    messagingSenderId: "1092143166472",
    appId: "1:1092143166472:web:0e5d79973ac6f7dfb40dbd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room name is " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect_to_room(this.id)'>#" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirect_to_room(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logOut(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}