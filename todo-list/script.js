$('button#save').click(function(){
  userInput = $('input#userInput').val();
  inserted = '<tr class="table-row"><td>'+ userInput +'</td><td><button type="submit" class="btn btn-danger delete-button">X</button></td></tr>'
  if(userInput){
    $(inserted).hide().appendTo('tbody').fadeIn(500);
    $('input#userInput').val('');
  } else {
    //do nothing
  }

});


$('.list').on('click', '.delete-button', function(){
  $(this).closest('.table-row').fadeOut();
});
