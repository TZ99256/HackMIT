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

function gotData(data){
    console.log(data.val()); //this is where the data is
    var x = data.val()
}
function errData(err) {
    console.log('Error!');
    console.log(err)
}
