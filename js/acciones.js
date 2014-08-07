//JavaScript
	var audio;
$(document).ready(function(e){
	 $("#Principal").height($("#page").height());
	document.addEventListener("deviceready",function(){
 audio=window.plugins.LowLatencyAudio;
audio.preloadFX('Do','audio/C.mp3',function(msg){},function(msg){alert('error: '+ msg);});
audio.preloadFX('Re','audio/D.mp3',function(msg){},function(msg){alert('error: '+ msg);});
audio.preloadFX('Mi','audio/E.mp3',function(msg){},function(msg){alert('error: '+ msg);});
audio.preloadFX('Fa','audio/F.mp3',function(msg){},function(msg){alert('error: '+ msg);});
audio.preloadFX('Sol','audio/G.mp3',function(msg){},function(msg){alert('error: '+ msg);});
audio.preloadFX('La','audio/A.mp3',function(msg){},function(msg){alert('error: '+ msg);});
audio.preloadFX('Si','audio/B.mp3',function(msg){},function(msg){alert('error: '+ msg);});
 },false); //deviceready
});//ready