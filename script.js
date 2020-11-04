$(document).ready(function(){

  function setView(view){
    $(".view").hide();
    $(view).show()
      .css("opacity","0")
      .animate({"opacity":"1"},200);
  }

  $(".icon-home").click(() => setView(".home-view"));
  $(".icon-contents").click(() => setView(".contents-view"));
  $(".icon-add").click(() => setView(".add-view"));
  setView(".home-view");

});
