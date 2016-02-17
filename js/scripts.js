// VIEWS //

function renderHomeView(){
  // Hide //
  $('#web').hide();
  $('#audio').hide();
  $('#about').hide();
  // Show //
  $('#home').show();
}

function renderWebView(){
  // Hide //
  $('#home').hide();
  $('#audio').hide();
  $('#about').hide();
  // Show //
  $('#web').show();
}

function renderAudioView(){
  // Hide //
  $('#home').hide();
  $('#web').hide();
  $('#about').hide();
  // Show //
  $('#audio').show();
}

function renderAboutView(){
  // Hide //
  $('#home').hide();
  $('#web').hide();
  $('#audio').hide();
  // Show //
  $('#about').show();
}

// LISTENERS //

function setWebListeners(){
  $('.to-web').click(function(){
    renderWebView();
  });
}

function setAudioListeners(){
  $('.to-audio').click(function(){
    renderAudioView();
  });
}

function setAboutListeners() {
  $('.to-about').click(function(){
    renderAboutView();
  });
}

function setHomeListeners() {
  $('.to-home').click(function(){
    renderHomeView();
  });
}

$(function(){
  renderHomeView();
  setWebListeners();
  setAudioListeners();
  setAboutListeners();
  setHomeListeners();
});
