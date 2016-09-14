(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function() {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date();
	a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-65896068-1', 'auto');
ga('send', 'pageview');

$(function() {
	var ranVideo = Math.floor((Math.random() * 8) + 1);
	var videoFile = 'vid/background-' + ranVideo + '.mp4';

	$('#bgvid source').attr('src', videoFile);
	$('#bgvid')[0].load();
});