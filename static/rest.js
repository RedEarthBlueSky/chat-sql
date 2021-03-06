
function postMsg (text) {
  $.post('/messages', {content: text}, function (data) {
    appendMsgs([data]);
  });
}

//  function receives array to add messages to index.html
function appendMsgs (msgsArr) {
  if (msgsArr.length) {
    let last = msgsArr.length - 1;
    for (let i = last; i >= 0; i--) {
      let msg = msgsArr[i];
      let timeStr = new Date(msg.timestamp).toLocaleTimeString();
      let $div = $('<div class="message">');
      $('#messages').append(`
        <div class="message">
          <div class="id">ID: ${msg.id}</div>
          <div class="time">Time: ${timeStr}</div>
          <p>${msg.content}</p>
        </div>
      `);
      keepScrolled('#messages');
    }
  }
}

function getLatestMessages () {
  let url = '/messages';
  $.get(url, appendMsgs);
  keepScrolled('#messages')
}

// keep the scroll at the bottom of the element
function keepScrolled(elementId) {
  $(elementId).animate({
    scrollTop: $(elementId)[0].scrollHeight
  }, 100);
}

//  document ready
$(function () {

  //  clear before adding messages from memory
  $('#messages').val();
  //  retrieve the last ten messages
  getLatestMessages();

  //  add a new message
  $('button').click(function () {
    let text = $('input').val();
    text && postMsg(text);
  });

});
