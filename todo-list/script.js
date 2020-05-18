//Date time
var serverTime = new Date();

function updateTime() {
    serverTime = new Date(serverTime.getTime() + 1000);
    $('#date-time-display').html(serverTime.toLocaleString());
}

$(function() {
    updateTime();
    setInterval(updateTime, 1000);
});


//This function adds new entries to the list
$('button#save').click(function(){
  userInput = $('input#userInput').val();
  inserted = '<li class="list-in">'+ userInput +'</li>'
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
