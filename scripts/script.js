


var Model = function() {
	this.links = {
		1  : "https://www.dropbox.com/s/cws94nver8ioj02/Legacy-Basketball.mp4?dl=1", 
		2  : "https://www.dropbox.com/s/u8hw322ioip5who/PHS_OREGON.mov?dl=1",
		3  : "https://www.dropbox.com/s/b6d3ai6qbw526o9/KCE_Center%20of%20The%20Future.mp4?dl=1",
		4  : "https://www.dropbox.com/s/ru03vauq64jyjqt/what-is-a-game-jam.mp4?dl=1",
		5  : "https://www.dropbox.com/s/94vxx0gh3w1z0hs/Nautilus_Schwinn.mp4?dl=1",
		6  : "https://www.dropbox.com/s/3abgkdoblqmx5ik/FA14%20WT%20Nike%20Dri%20Fit%20Knit%20Infinity%20Coverup%20R01%20V06%20en%20FINAL.mp4?dl=1",
		7  : "https://www.dropbox.com/s/s711dzr9k08homs/Portland-Funniest-Video-Intro.mp4?dl=1",
		8  : "https://www.dropbox.com/s/yx7i3tencyy4kyf/Nike_Disruptive-Innovation.mp4?dl=1",
		9  : "",
		10 : "",
		11 : "",
		12 : "",
	};
};

let View = function(controller, model) {	
	
	let videoButtons = document.querySelectorAll('.video-link');
	
	videoButtons.forEach(function(link, index) {
		
		link.addEventListener('click', function() {
			controller.changeVideo(model.links[index + 1]);
		});
	});

}; //END VIEW

var Controllers = function(player, videoBox) {
	
	this.changeVideo = function(input){
		videoBox.pause();
		player.src = input;
		videoBox.load();
		videoBox.play();
		window.scrollTo({ top: 0, behavior: 'smooth' });

	};
}; //END CONTROLLER


var run = function() {
	var player = document.getElementById('player');
	var videoBox = document.getElementById('video-box');
	
	var model = new Model();
	var controllers = new Controllers(player, videoBox);
	var view = new View(controllers, model);

}(); //END RUN
