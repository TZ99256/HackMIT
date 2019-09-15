var firebaseConfig = {
    apiKey: "AIzaSyDXDJJov4KMkWkK__CQ-JAckT_0Kk69lLA",
    authDomain: "hackmit-recon.firebaseapp.com",
    databaseURL: "https://hackmit-recon.firebaseio.com",
    projectId: "hackmit-recon",
    storageBucket: "hackmit-recon.appspot.com",
    messagingSenderId: "357844945838",
    appId: "1:357844945838:web:dc443973b9dd335a40963f"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
var database = firebase.database();
var retrieve = database.ref('Items');

var result = retrieve.on('value',gotData,errData);


// database.ref().child("Items").on('value',snap =>{
//     preOb.innerText =JSON.stringify(snap.val(),null,3)
// });

var things = []
firebase.database().ref('Items').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var username = userSnapshot.val();
        things.push({
            date:username.date,
            category: username.category,
            key:   username.item,
            value: username.price,
            message: username.message,
            
        });
    });
});


  
var preOb = document.getElementById('object');
for (var key in things){
    var box = document.createElement('div');
    box.innerText = things[key]
    preOb.appendChild(box)
}
console.log(things)

function gotData(data){
    console.log(data.val()); //this is where the data is
    var x = data.val()
}
function errData(err) {
    console.log('Error!');
    console.log(err)
}
