const firebaseConfig4 = {
    apiKey: "AIzaSyA5gdczCs4HoXqm-gUCY4MYHy1ZxO91X9s",
    authDomain: "server4-23a31.firebaseapp.com",
    projectId: "server4-23a31",
    storageBucket: "server4-23a31.appspot.com",
    databaseURL: "https://server4-23a31-default-rtdb.asia-southeast1.firebasedatabase.app/",
    messagingSenderId: "324583184804",
    appId: "1:324583184804:web:474fdb822821e48e84c931"
  };

const fourth_app = firebase.initializeApp(firebaseConfig4, "quaterny");
var database4 = fourth_app.database();
var file_ref4 = database4.ref('/files/');
function upload4(){
    file_node4 = file_ref4.push()
    file_node_ref4 = database4.ref("/files/"+ file_node4.key+ "/")
    fs.readFile("encrypted_file4.txt", 'utf-8', function(err, data4){
        file_node_ref4.set({
            p4: data4
        })
    })
    main_ref.child("p4").set(file_node4.key)
}