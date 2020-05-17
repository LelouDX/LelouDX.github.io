$('button#save').click(function(){
  userInput = $('input#userInput').val();
  inserted = '<li class="list-in">'+ userInput +'<td>'
  if(userInput){
    $(inserted).hide().appendTo('.list-body').fadeIn(500);
    $('input#userInput').val('');
  } else {
    //do nothing
  }

});


$('.list').on('click', '.list-in', function(){
  $(this).closest('li.strike').fadeOut();
});

$('.list').on('click', '.list-in', function(){
  $(this).closest('li').addClass("strike");
});
