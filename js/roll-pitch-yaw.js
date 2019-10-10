
// Global variables
var hand;
var paused = true;


// Pause settings controlled by space key
window.onkeypress = function(e) {
  if (e.charCode == 32) {
    paused = !paused
    // if (paused == false) {
    //   paused = true;
    // } else {
    //   paused = false;
    // }
  }
};

var controller = new Leap.Controller({
  enableGestures: true
});

controller.loop(function(frame) {
  latestFrame = frame;
  if (paused) {
    // document.getElementById('pause').innerHTML = "<strong>PAUSED</strong>";
    return;
  }

  var str = "";
  for (var i in frame.handsMap) {
    hand = frame.handsMap[i];
    str += "<p>" +
      "<strong>Roll:</strong> " + hand.roll() +
      "<br/><strong>Pitch:</strong> " + hand.pitch() +
      "<br/><strong>Yaw:</strong> " + hand.yaw() +
      "</p>";
  }
  // console.log(str);
  // document.getElementById('out').innerHTML = str;
});

controller.on('ready', function() {
  console.log("ready");
});
controller.on('connect', function() {
  console.log("connect");
});
controller.on('disconnect', function() {
  console.log("disconnect");
});
controller.on('focus', function() {
  console.log("focus");
});
controller.on('blur', function() {
  console.log("blur");
});
controller.on('deviceConnected', function() {
  console.log("deviceConnected");
});
controller.on('deviceDisconnected', function() {
  console.log("deviceDisconnected");
});
