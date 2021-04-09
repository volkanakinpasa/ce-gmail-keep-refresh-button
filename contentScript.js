var buttonGrabber = setInterval(function () {
  var refreshButton1 = document.querySelector('.T-I.J-J5-Ji.nu.T-I-ax7.L3')
    .parentElement;
  var refreshButton = refreshButton1;
  if (refreshButton !== null) {
    console.log('refresh button exists');
    clearInterval(buttonGrabber);
    var observer = new MutationObserver(function (nodes, observer) {
      observer.disconnect();
      refreshButton.setAttribute('style', '');
      moveButtonToFront(refreshButton);
      observer.observe(refreshButton, { attributes: true });
    }).observe(refreshButton, { attributes: true });
  }
}, 100);
