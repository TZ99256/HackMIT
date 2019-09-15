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

var preOb = document.getElementById('object');
firebase.database().ref('Items').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var things = []
        var username = userSnapshot.val();
        things.push({
            date:username.date,
            category: username.category,
            item:   username.item,
            price: username.price,
            message: username.message,
            
        });
        for (var key in things){
            var box = document.createElement('div');
            box.innerText = things[key].category
            preOb.appendChild(box)
            var box = document.createElement('div');
            box.textContent = things[key].date
            preOb.appendChild(box)
        }
    });
});





function gotData(data){
    console.log(data.val()); //this is where the data is
    var x = data.val()
}
function errData(err) {
    console.log('Error!');
    console.log(err)
}
