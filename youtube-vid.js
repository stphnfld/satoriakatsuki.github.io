var youtubeLinks = [
    "https://www.youtube.com/watch?v=VxMK4poGDOU", // Add more video URLs as needed
    "https://www.youtube.com/watch?v=spuwX4rPhDA"// Add other YouTube video URLs here
];

var randomIndex = Math.floor(Math.random() * youtubeLinks.length);
var randomVideoUrl = youtubeLinks[randomIndex];

var youtubeIframe = document.getElementById('youtube-iframe');
youtubeIframe.src = "https://www.youtube.com/embed/" + getVideoId(randomVideoUrl);

// Function to extract video ID from a YouTube URL
function getVideoId(url) {
    var regex = /(?:\/watch\?v=|\/embed\/|\/v\/|\/\d\/|\/\d#)([^#\&\?]*).*/;
    var match = url.match(regex);
    return match && match[1].length === 11 ? match[1] : null;
}