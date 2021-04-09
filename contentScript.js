var buttonGrabber = setInterval(function () {
  var refreshButton1 = document.querySelector('.T-I.J-J5-Ji.nu.T-I-ax7.L3')
    .parentElement;
  var refreshButton = refreshButton1;
  if (refreshButton !== null) {
    clearInterval(buttonGrabber);
    var observer = new MutationObserver(function (nodes, observer) {
      observer.disconnect();
      refreshButton.setAttribute('style', '');
      observer.observe(refreshButton, { attributes: true });
    }).observe(refreshButton, { attributes: true });
  }
}, 100);
