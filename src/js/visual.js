var data = {1: {'ID': '#food', 'Purchase Category': 'Dining', 'Price': 12.05},
            2: {'ID': '#food', 'Purchase Category': 'Dining', 'Price': 3.12},
            3: {'ID': '#transportation', 'Purchase Category': 'Transportation', 'Price': 4.1}};

var props = {'#food': 0, '#utilities': 0, '#clothing': 0, '#transportation': 0, '#home': 0, '#misc': 0};
var total = 0;
for(var key in data.keys()){
    props[data[key]['ID']] += 1;
    total += 1;
}
for(var key in props.keys()){
    props[key] = Math.round(props[key]/total);
}

$(function ()
{
    $('#update').on('click', function ()
    {
        for(var key in props.keys()){
            for (i=0; i<props[key]; i++){
                $(key)
            }
        }
    });

});

