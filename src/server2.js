const firebaseConfig2 = {
    apiKey: "AIzaSyCWezIhfCEegoyXgf_bPTBRcQt8Of3u4JQ",
    authDomain: "server2-29acb.firebaseapp.com",
    projectId: "server2-29acb",
    storageBucket: "server2-29acb.appspot.com",
    databaseURL: "https://server2-29acb-default-rtdb.asia-southeast1.firebasedatabase.app/",
    messagingSenderId: "443281217773",
    appId: "1:443281217773:web:41efa58e90b26734cc14e4"
};

const sec_app = firebase.initializeApp(firebaseConfig2, "secondary");
var database2 = sec_app.database();
var file_ref2 = database2.ref('/files/');
function upload2(){
    file_node2 = file_ref2.push()
    file_node_ref2 = database2.ref("/files/"+ file_node2.key+ "/")
    fs.readFile("encrypted_file2.txt", 'utf-8', function(err, data2){
        file_node_ref2.set({
            p2: data2
        })
    })
    main_ref.child("p2").set(file_node2.key)
}