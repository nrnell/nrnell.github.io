const audio = document.querySelector('audio');
audio.volume = 0.5;
window.pointermove = function(){audio.play()};