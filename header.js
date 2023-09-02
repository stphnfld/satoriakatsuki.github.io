// JavaScript code to dynamically insert the header HTML
var headerHtml = `
  <header>
    <nav>
      <ul>
        <li><a href="/"><img src="smiley.png" class="headerlogo"></img></a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="https://www.youtube.com/channel/satoriakatsuki" target="_blank">YouTube</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
`;

var body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', headerHtml);

// Get the current URL path
var currentPath = window.location.pathname;

// Add "selected" class to the link that matches the current URL path
document.querySelectorAll('a').forEach(function(link) {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('selected');
    }
});
