$(window).ready(function(){
  $("#confirm").click(function(){
    var name=$("#name").val();
    var item=$("#item").val();
    alert(`Do something with name '${name}' and item '${item}'`);
  });
});
