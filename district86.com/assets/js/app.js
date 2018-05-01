$('.IssueTitle').mouseover(function() {
  var class_name = $(this).data('class');
  $('body').attr('class','');
  $('body').addClass(class_name);
})