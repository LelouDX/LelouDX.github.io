//ADD DATA TO LIST
$('button#save').click(function(){
  var userInput = $('input#userInput').val();
  var inserted = '<tr class="table-row vote-candidate"><td class="item-name">'+ userInput +'</td><td><button type="submit" class="btn btn-danger delete-button">X</button>&nbsp;&nbsp;<button type="submit" class="btn btn-primary move-to-vote" id="save">></button></tr>';
  if(userInput){
    $(inserted).hide().appendTo('tbody.tbody1').fadeIn(500);
    $('input#userInput').val('');
  } else {
    //do nothing
  }

});

$('input#userInput').keydown(function(e){

  if(e.which == 13){
    var userInput = $('input#userInput').val();
    var inserted = '<tr class="table-row vote-candidate"><td class="item-name">'+ userInput +'</td><td><button type="submit" class="btn btn-danger delete-button">X</button>&nbsp;&nbsp;<button type="submit" class="btn btn-primary move-to-vote" id="save">></button></td></tr>';
    if(userInput){
      $(inserted).hide().appendTo('tbody.tbody1').fadeIn(500);
      $('input#userInput').val('');
    } else {
      //do nothing
    }
  }

});

//MOVE TO VOTING POOL
$('.list').on('click', '.move-to-vote', function(){
  itemName = $(this).parent().siblings(":first").text();
  inserted = '<tr class="table-row"><td>'+ itemName +'</td><td class="vote-count">0</td><td><button type="submit" class="btn btn-success vote-up">+1</button>&nbsp;&nbsp;<button type="submit" class="btn btn-warning vote-down">-1</button>&nbsp;&nbsp;<button type="submit" class="btn btn-danger back-to-items">x</button>&nbsp;&nbsp;<button type="submit" class="btn btn-primary move-to-dead">v</button></td></tr>';
  $(this).closest('.table-row').fadeOut();
  $(inserted).hide().appendTo('tbody.tbody2').fadeIn(500);
});

//MOVE BACK TO ITEM POOL
$('.list').on('click', '.back-to-items', function(){
  var itemName = $(this).parent().siblings(":first").text();
  var inserted = '<tr class="table-row"><td class="item-name">'+ itemName +'</td><td><button type="submit" class="btn btn-danger delete-button">X</button>&nbsp;&nbsp;<button type="submit" class="btn btn-primary move-to-vote">></button></td></tr>';
  $(this).closest('.table-row').fadeOut();
  $(inserted).hide().appendTo('tbody.tbody1').fadeIn(500);
});

//MOVE TO VOTED OUT POOL
$('.list').on('click', '.move-to-dead', function(){
  var itemName = $(this).parent().siblings(":first").text();
  var inserted = '<tr class="table-row"><td>'+ itemName +'</td><td><button type="submit" class="btn btn-danger delete-button">X</button></td></tr>';
  $(this).closest('.table-row').fadeOut();
  $(inserted).hide().appendTo('tbody.tbody3').fadeIn(500);
});

//ADD A VOTE
$('.list').on('click', '.vote-up', function(){
  var voteCount = $(this).parent().siblings(".vote-count").text();
  var retAns = Number(voteCount)+1;

  $(this).parent().siblings(".vote-count").text(retAns);
});

//REMOVE A VOTE
$('.list').on('click', '.vote-down', function(){
  var voteCount = $(this).parent().siblings(".vote-count").text();
  var retAns = Number(voteCount)-1;

  $(this).parent().siblings(".vote-count").text(retAns);
});

//DELETE
$('.list').on('click', '.delete-button', function(){
  $(this).closest('.table-row').fadeOut();
});
