$(window).ready(function(){
  var tableArray = [];
  var currentOrder = "desc";
  //var lastClicked - Use this if you want to preserve the order of the table after adding a new element
  $("#confirm").click(function(){
    var name=$("#name").val();
    var item=$("#item").val();
    
    var date= new Date ($("#expiration-date").val());

    //might want to consider adding the "added" date so we can sort by time added
    tableArray.push( {'name' : name,'item' : item, 'date' : date });
    //alert(`Do something with name '${name}' and item '${item}' and date '${date}'`);

    //For now, whenever you add a new element, it will be in the order of expirate date asc or desc

    if(currentOrder == 'desc'){
        tableArray = tableArray.sort((a,b) => a['item'] > b['item'] ? 1 : -1)
        tableArray = tableArray.sort((a,b) => a['name'] > b['name'] ? 1 : -1)
        tableArray = tableArray.sort((a,b) => a['date'] > b['date'] ? 1 : -1)
    }
    else{
        tableArray = tableArray.sort((a,b) => a['item'] > b['item'] ? 1 : -1)
        tableArray = tableArray.sort((a,b) => a['name'] > b['name'] ? 1 : -1)
        tableArray = tableArray.sort((a,b) => a['date'] < b['date'] ? 1 : -1)
    }
    buildTable(tableArray);
  });

  $('th').on('click', function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)

    console.log("Column was clicked", column, order)

    /*
     * The reason we call 3 sort functions is to sub-sort each column.
     * The order of the sort determines the priority, with the last being the most important
     * For date, each item will be in order by date first, within that will be the owner's name followed by the food, etc.
     * This takes advantage of the fact that .sort() is a stable sort
     */
    if (order == 'desc'){
        $(this).data('order', "asc")
        currentOrder = "asc";
        if(column == 'date'){
          tableArray = tableArray.sort((a,b) => a['item'] > b['item'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['name'] > b['name'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['date'] > b['date'] ? 1 : -1)
        }
        else if(column == 'name'){
          tableArray = tableArray.sort((a,b) => a['item'] > b['item'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['date'] > b['date'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['name'] > b['name'] ? 1 : -1) 
        }
        else{
          tableArray = tableArray.sort((a,b) => a['name'] > b['name'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['date'] > b['date'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['item'] > b['item'] ? 1 : -1)
        }

        text+= '&#9660'
        
    }else{
        $(this).data('order', "desc")
        currentOrder = "desc";
        
        if(column == 'date'){
          tableArray = tableArray.sort((a,b) => a['item'] > b['item'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['name'] > b['name'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['date'] < b['date'] ? 1 : -1)
        }
        else if(column == 'name'){
          tableArray = tableArray.sort((a,b) => a['item'] > b['item'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['date'] > b['date'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['name'] < b['name'] ? 1 : -1) 
        }
        else{
          tableArray = tableArray.sort((a,b) => a['name'] > b['name'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['date'] > b['date'] ? 1 : -1)
          tableArray = tableArray.sort((a,b) => a['item'] < b['item'] ? 1 : -1)
        }
        text+= '&#9650'
    }
    $(this).html(text)
    buildTable(tableArray)
  });

  function buildTable(data){
    var table = document.getElementById("contentsTable")
    table.innerHTML= "";

    for(var i = 0; i < data.length; i++){

        var date = data[i].date;
        day = date.getDate() + 1;
        month = date.getMonth() + 1;
        year = date.getFullYear();
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].item}</td>
                        <td>${[month, day, year].join('/')}</td>
                  </tr>`
        table.innerHTML += row;
    }
  }
});



//date source : https://stackoverflow.com/questions/33312318/how-to-extract-values-from-html-input-type-date-using-jquery


