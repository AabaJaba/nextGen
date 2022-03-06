const firebaseConfig3 = {
    apiKey: "AIzaSyAAZ_iu3zWAgOLlinnDw9q2ljZfM_GW9qw",
    authDomain: "server3-c087d.firebaseapp.com",
    projectId: "server3-c087d",
    databaseURL: "https://server3-c087d-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "server3-c087d.appspot.com",
    messagingSenderId: "643190961375",
    appId: "1:643190961375:web:25edcbbb0de53db1d3656a"
};

const third_app = firebase.initializeApp(firebaseConfig3, "tertiary");
var database3 = third_app.database();
var file_ref3 = database3.ref('/files/');
function upload3(){
    file_node3 = file_ref3.push()
    file_node_ref3 = database3.ref("/files/"+ file_node3.key+ "/")
    fs.readFile("encrypted_file3.txt", 'utf-8', function(err, data3){
        file_node_ref3.set({
            p3: data3
        })
    })
    main_ref.child("p3").set(file_node3.key)
}