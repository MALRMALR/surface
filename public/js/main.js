// WINDOW
var width = window.innerWidth;
var height = window.innerHeight;

// WEB AUDIO
var ctx = new (window.AudioContext || window.webkitAudioContext);
var currentTime = ctx.currentTime;


// DOCUMENT READY
$(document).ready(function() {
  console.log("READY")

  // THREE JS VARIABLES
  var container;
  var camera, scene, renderer;
  var geometry, material, mesh;

  // INIT THREE SCENE
  init();

  // MODAL
  var modal = $('#modal');
  modal.show();

  // JQUERY UI STUFF
  $('#ctrl-container').draggable({grid: [50, 50]});
  $("#ctrl-container").attr('title', 'Please feel free to put me where ever you like.  You can also hide me using the controls below');
  $('#accordion').accordion();

  $('#hide').click(function() {
    $('#ctrl-container').hide();
    $('#show').show();
    $('#hide').hide();
  })

  $('#show').click(function() {
    $('#ctrl-container').show();
    $('#show').hide()
    $('#hide').show();
  })

  $('#reload').click(function() {
    // location.reload();
    modal.show();
  })

  // KEYDOWN CHORD EVENTS
  $(document).keydown(function(event) {
    var key = event.which;
    var p = playChord;
    if (key == 32) {
      console.log("SPACEBAR");
      modal.hide();
      animate();
    } else if (key == 81) {
      console.log("KEY: Q");
      aSharpMajor(p);
    } else if (key == 87) {
      console.log("KEY: W");
      aMajor(p);
    } else if (key == 69) {
      console.log("KEY: E");
      bMajor(p);
    } else if (key == 82) {
      console.log("KEY: R");
      cSharpMajor(p);
    } else if (key == 85) {
      console.log("KEY: U");
      cMajor(p);
    } else if (key == 73) {
      console.log("KEY: I");
      dSharpMajor(p);
    } else if (key == 79) {
      console.log("KEY: O");
      dMajor(p);
    } else if (key == 80) {
      console.log("KEY: P");
      eMajor(p);
    } else if (key == 65) {
      console.log("KEY: A");
      fSharpMajor(p);
    } else if (key == 83) {
      console.log("KEY: S");
      fMajor(p);
    } else if (key == 68) {
      console.log("KEY: D");
      gSharpMajor(p);
    } else if (key == 70) {
      console.log("KEY: F");
      gMajor(p);
    } else if (key == 72) {
      console.log("KEY: H");
      aSharpMinor(p);
    } else if (key == 74) {
      console.log("KEY: J");
      aMinor(p);
    } else if (key == 75) {
      console.log("KEY: K");
      bMinor(p);
    } else if (key == 76) {
      console.log("KEY: L");
      cSharpMinor(p);
    } else if (key == 90) {
      console.log("KEY: Z");
      cMinor(p);
    } else if (key == 88) {
      console.log("KEY: X");
      dSharpMinor(p);
    } else if (key == 67) {
      console.log("KEY: C");
      dMinor(p);
    } else if (key == 86) {
      console.log("KEY: V");
      eMinor(p);
    } else if (key == 66) {
      console.log("KEY: B");
      fSharpMinor(p);
    } else if (key == 78) {
      console.log("KEY: N");
      fMinor(p);
    } else if (key == 77) {
      console.log("KEY: M");
      gSharpMinor(p);
    } else if (key == 188) {
      console.log("KEY: , ");
      gMinor(p);
    }
  });

})
