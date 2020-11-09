$(document).ready(function(){

  var tableArray = [];
  var recentlyAdded = [];
  var currentOrder = "desc";

  $("#confirm").click(function(){
    var name=$("#name").val();
    var item=$("#item").val();

    var date= new Date ($("#expiration-date").val());

    //might want to consider adding the "added" date so we can sort by time added
    recentlyAdded.unshift( {'name' : name,'item' : item, 'date' : date });
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

    buildPreview(tableArray);
    buildTable(tableArray, document.getElementById("contentsTable"));
    buildTable(recentlyAdded, document.getElementById("recent_table"));
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
          tableSortAscend(tableArray, 'item', true);
          tableSortAscend(tableArray, 'name', true);
          tableSortAscend(tableArray, 'date', true);
        }
        else if(column == 'name'){
          tableSortAscend(tableArray, 'item', true);
          tableSortAscend(tableArray, 'date', true);
          tableSortAscend(tableArray, 'name', true);
        }
        else{
          tableSortAscend(tableArray, 'name', true);
          tableSortAscend(tableArray, 'date', true);
          tableSortAscend(tableArray, 'item', true);
        }

        text+= '&#9660'

    }else{
        $(this).data('order', "desc")
        currentOrder = "desc";

        if(column == 'date'){
          tableSortAscend(tableArray, 'item', true);
          tableSortAscend(tableArray, 'name', true);
          tableSortAscend(tableArray, 'date', false);
        }
        else if(column == 'name'){
          tableSortAscend(tableArray, 'item', true);
          tableSortAscend(tableArray, 'date', true);
          tableSortAscend(tableArray, 'name', false);
        }
        else{
          tableSortAscend(tableArray, 'name', true);
          tableSortAscend(tableArray, 'date', true);
          tableSortAscend(tableArray, 'item', false);
        }
        text+= '&#9650'
    }
    $(this).html(text)
    buildTable(tableArray, document.getElementById("contentsTable"))
  });

  function tableSortAscend(table, colName, bool){
    if (bool){
      table = table.sort((a,b) => a[colName] > b[colName] ? 1 : -1)
    }
    else{
      table = table.sort((a,b) => a[colName] < b[colName] ? 1 : -1)
    }
  }

  function buildPreview(data){
    var table = document.getElementById("previewTable")
    table.innerHTML= "";

    var length = tableArray.length < 10 ? (tableArray.length) : (10);

    for(var i = 0; i < length; i++){

      var row = `<tr>
                    <td>${data[i].item}</td>
                    <hr>
                </tr>`
      table.innerHTML += row;
    }
  }

  function buildTable(data, table){
    //var table = document.getElementById("contentsTable")
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

  function setView(icon,view){
    recentlyAdded = [];
    buildTable(recentlyAdded, document.getElementById("recent_table"));
    $(".navbar > div").removeClass("curr-page");
    $(icon).addClass("curr-page");
    $(".view").hide();
    $(view).show()
      .css("opacity","0")
      .animate({"opacity":"1"},200);
  }

  $(".icon-home").click(() => setView(".icon-home",".home-view"));
  $(".icon-contents").click(() => setView(".icon-contents",".contents-view"));
  $(".icon-add").click(() => setView(".icon-add",".add-view"));
  setView(".icon-home",".home-view");

});




//date source : https://stackoverflow.com/questions/33312318/how-to-extract-values-from-html-input-type-date-using-jquery
