
function initIndex(){
  const replyButton = document.querySelector('.js-reply');
  const replyArea = document.querySelector('.reply-area');
  const cancelButton = document.querySelector('.js-cancel');

  if (replyButton) {
    function toggleReplyArea(e) {
      e.preventDefault();
      replyArea.classList.toggle('active')
    }
    replyButton.addEventListener('click', toggleReplyArea);
    cancelButton.addEventListener('click', toggleReplyArea);
  }
}

initIndex();

