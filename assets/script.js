//current TIME/DAY showing
var clock = setInterval(clockUpdater, 1000)
//current time set
function clockUpdater() {
  currentTime = moment();
  timeEl.text(currentTime);
  checkTimeBlock();
}

//save row data to local-storag 
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".schedule").val()
  var time = $(this).parent().attr('id');
  localStorage.setItem(time, text);
});

$('.time-block').each(function () {
  var id = $(this).attr('id');

  $('#' + id + ' .schedule').val(localStorage.getItem(id))
  var time = moment().hour();

  if (id < time) {
    //WILL SHOW SAVED PAST EVENTS
    $(this).addClass('past');
  } else if (id == time) {
    // WILL SHOW PERESENT EVENTS 
    $(this).addClass('present');
  } else {
    //UPCOMING EVENTS TO 5PM
    $(this).addClass('future');
  }
});
//live
var timeEl = $("#timeDay");
var currentTime;
clockUpdater();
//Load the data from local-storage
loadData();
