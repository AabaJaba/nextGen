const firebaseConfig = {
    apiKey: "AIzaSyCjo6kBiiPuqmHQY4W9mEop_gj68JutamA",
    authDomain: "main-server-2448f.firebaseapp.com",
    projectId: "main-server-2448f",
    storageBucket: "main-server-2448f.appspot.com",
    databaseURL: "https://main-server-2448f-default-rtdb.asia-southeast1.firebasedatabase.app/",
    messagingSenderId: "111299327921",
    appId: "1:111299327921:web:e8df6d680d38621e29ef90"
};

const fs = require('fs');
const { PassThrough } = require('stream');
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var loc_ref = database.ref("/locations/")

var main_ref;
var node;

function main_upload_func(fileName){
    node = loc_ref.push()

    main_ref = database.ref("/locations/"+ node.key+ "/")
    main_ref.child("fileName").set(fileName)
    upload()
    upload2()
    upload3()
    upload4()
    setTimeout(() => {
        fs.unlink("encrypted_file1.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
        })
        fs.unlink("encrypted_file2.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
        })
        fs.unlink("encrypted_file3.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
        })
        fs.unlink("encrypted_file4.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
        })
        fs.unlink("file1.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
        })
        fs.unlink("file2.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
        })
        fs.unlink("file3.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
        })
        fs.unlink("file4.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
        })
    }, 3000);

}

require('electron').ipcRenderer.on('split_done', (event, fileName) => {
    main_upload_func(fileName)
})