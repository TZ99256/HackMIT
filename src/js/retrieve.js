var retrieve = database.ref('Items');
/*
starCountRef.on('value', function(snapshot) {
    updateStarCount(postElement, snapshot.val());
  });
snapshot.val()

*/
var result = retrieve.on('value',gotData,errData);

function gotData(data){
    console.log(data.val()); //this is where the data is
    var x = data.val()
}
console.log(x)
function errData(err) {
    console.log('Error!');
    console.log(err)
}

export default x;