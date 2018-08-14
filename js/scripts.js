$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>hello!</li>");
    $("ul#webpage").prepend("<li>why hello!</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>goodbye!</li>");
    $("ul#webpage").prepend("<li>goodbye user!</li>");
  });
  $("button#stop").click(function(){
    $("ul#user").prepend("<li>stop copying me!</li>");
    $("ul#webpage").prepend("<li>pardon no offense!</li>");
  });

});
