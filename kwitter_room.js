//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyBA5qnMs6ZtRaHQDsc-fw_DOa9_v2bsr_o",
      authDomain: "c94---fun-with-database.firebaseapp.com",
      databaseURL: "https://c94---fun-with-database.firebaseio.com",
      projectId: "c94---fun-with-database",
      storageBucket: "c94---fun-with-database.appspot.com",
      messagingSenderId: "931852965196",
      appId: "1:931852965196:web:78f07475505584cc3f6be9",
      measurementId: "G-4QF97XLKJ2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom() {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);
    
      window.location = "kwitter_page.html";
    }
    
    function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    }
    
    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
    }