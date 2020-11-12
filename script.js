let app={
  deleted:[],
  items:[]
};

// Edit backend data
function addElement(name){
  if(!app.items.length) $(".list p").remove();
  app.items.push(name);
  let label=$("<span>").text(name);
  $(".list").append($("<div>")
    .append($("<input type=\"checkbox\"/>").click(function(){
      label.css("text-decoration",$(this).prop("checked")?"line-through":"none");
    }))
    .append(label)
    .append($("<i class=\"fas fa-trash\"></i>").click(function(){
      let i=$(this).parent().index();
      app.deleted.push([app.items[i]]);
      dropElement(i);
    }))
  );
}
function dropElement(i){
  var name=app.items[i];
  app.items.splice(i,1);
  $(".list").children().eq(i).remove();
  if(!app.items.length){
    $(".list").append($("<p>").text("Looks like you don't have anything right now"));
  }
}

$(window).ready(function(){

  // Set modal clicks
  $(".result-add").click(function(){
    $(".modal-wrapper").css("display","none");
    let name=$(".modal input[type=text]").val();
    addElement(name);
  });
  $(".result-cancel").click(function(){
    $(".modal-wrapper").css("display","none");
  });

  // Set options bar clicks
  $(".option-add").click(function(){
    $(".modal input[type=text]").val("");
    $(".modal-wrapper").css("display","block");
  });
  $(".option-undo").click(function(){
    let lst=app.deleted[app.deleted.length-1];
    app.deleted.splice(app.deleted.length-1,1);
    for(var a=0;a<lst.length;a++){
      addElement(lst[a]);
    }
  });
  $(".option-clear").click(function(){
    app.deleted.push([]);
    $(".list input[type=checkbox]").each(function(){
      if($(this).prop("checked")){
        let i=$(this).parent().index();
        app.deleted[app.deleted.length-1].push(app.items[i])
        dropElement(i);
      }
    });
  });
});
