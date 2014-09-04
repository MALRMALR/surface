// CHORDS

var playChord = function() {
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];

    // REVERB
    var reverbNode = new SimpleReverb(ctx, {
      seconds: 1, // impulse response length
      decay: 1, // impulse response decay rate
      reverse: 0 // reverse the impulse response
    });
    reverbNode.seconds = 2;
    reverbNode.decay = 1

    // GAIN
    var timeConstant = 0.02
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0.9;
    gainNode.gain.setTargetAtTime(1, ctx.currentTime + 1, timeConstant)

    // FILTER
    var filterNode = ctx.createBiquadFilter();
    filterNode.type = 0;
    filterNode.frequency.value = 440;

    // CONNECTIONS
    mainosc.connect(gainNode);
    gainNode.connect(filterNode);
    filterNode.connect(reverbNode.input);
    reverbNode.connect(ctx.destination);

    // TIME - currentTime = 0
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    gainNode.gain.setTargetAtTime(0, ctx.currentTime, timeConstant);
    mainosc.stop(currentTime + 0.6)

  };

    var canvasControls = $('div#canvas-controls');

    canvasControls.find("input[name='reverb']").on('input', function() {
      reverbNode.decay = parseInt($(this).val());
      console.log(parseInt($(this).val()));
    });

    canvasControls.find("input[name='gain']").on('input', function() {
      gainNode.gain.value = parseInt($(this).val());
      console.log(parseInt($(this).val()));
    })

    canvasControls.find("input[name='filterFrequency']").on('input', function() {
      filterNode.frequency.value = parseInt($(this).val());
      console.log(parseInt($(this).val()));
    })

}


// CHORDS

function aMajor(callback) {
  //E, G, B
  this.freq = [294.94, 329.63, 392];
  callback();
}

function aSharpMajor(callback) {
  // A#, C#, F
  this.freq = [466.16, 277.18, 349.23];
  callback();
}

function bMajor(callback) {
  //A, C#, E
  this.freq = [440, 554.37, 329.63, 659.25];
  callback();
}

function cMajor(callback) {
  // C4, E4, D4
  this.freq = [261.63, 329.63, 392.00];
  callback();
}

function cSharpMajor(callback) {
  // C#, F, G#
  this.freq = [277.18, 349.23, 415.30];
  callback();
}

function dMajor(callback) {
  // D, F#, A
  this.freq = [587.33, 369.99, 440];
  callback();
}

function dSharpMajor(callback) {
  // D#, G, A#
  this.freq = [311.13, 392, 466.16]
  callback();
}

function eMajor(callback) {
  //E, G, B
  this.freq = [329.63, 392, 493.88]
  callback();
}

function fMajor(callback) {
  // A, C, E
  this.freq = [440, 523.25, 659.25];
  callback();
}

function fSharpMajor(callback) {
  // F#, A#, C#
  this.freq = [369.99, 466.16, 554.37]
  callback();
}

function gMajor(callback) {
  // G, B, D
  this.freq = [392, 493.88, 293.66];
  callback();
}

function gSharpMajor(callback) {
  // G#, C, D#
  this.freq = [415.30, 440, 622.25]
  callback();
}

function aMinor(callback) {
  // A, E, C
  this.freq = [440, 329.63, 523.25];
  callback();
}

function aSharpMinor(callback) {
  // A#, C#, F
  this.freq = [233.08, 277.18, 349.23]
  callback();
}

function bMinor(callback) {
  // B, D, F#
  this.freq = [493.88, 587.33, 369.99];
  callback();
}

function cMinor(callback) {
  // B, D#, F#
  this.freq = [246.94, 311.13, 369.99]
  callback();
}

function cSharpMinor(callback) {
  // C#, E, G#
  this.freq = [277.18, 349.23, 415.30];
  callback();
}

function dMinor(callback) {
  // A4, D4, F4
  this.freq = [440, 293.66, 349.23];
  callback();
}

function dSharpMinor(callback) {
  // D#, F#, A#
  this.freq = [311.13, 369.99, 466.16]
  callback();
}

function eMinor(callback) {
  // E, G, B
  this.freq = [329.63, 392, 493.88]
  callback();
}

function fMinor(callback) {
  // F, G#, C
  this.freq = [349.23, 415.30, 440]
  callback();
}

function fSharpMinor(callback) {
  // F#, A, C#
  this.freq = [369, 440, 554.37]
  callback();
}

function gMinor(callback) {
  // G, A#, D
  this.freq = [392, 466.16, 587.33]
  callback();
}

function gSharpMinor(callback) {
  // G#, B, D#
  this.freq = [415.30, 493.88, 622.25]
  callback();
}
