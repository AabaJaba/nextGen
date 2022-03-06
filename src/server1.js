const firebaseConfig1 = {
    apiKey: "AIzaSyDdTyLrQMCdGCIcOs-DqfsTsMilTWUE5cc",
    authDomain: "server1-e62d1.firebaseapp.com",
    databaseURL: "https://server1-e62d1-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "server1-e62d1",
    storageBucket: "server1-e62d1.appspot.com",
    messagingSenderId: "932389279891",
    appId: "1:932389279891:web:77d57a5793d1fee7819566"
};

first_app = firebase.initializeApp(firebaseConfig1, "primary");
var database1 = first_app.database();
var file_ref1 = database1.ref('/files/');
function upload(){
    file_node1 = file_ref1.push()
    file_node_ref1 = database1.ref("/files/"+ file_node1.key+ "/")
    fs.readFile("encrypted_file1.txt", 'utf-8', function(err, data1){
        file_node_ref1.set({
            p1: data1,
        })
    })
    main_ref.child("p1").set(file_node1.key)
}