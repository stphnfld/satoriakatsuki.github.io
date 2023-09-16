// JavaScript code to dynamically insert the header HTML
var headerHtml = `
<header>
    <nav>
        <ul id="header-nav">
            <li><a href="/"><img src="/images/smiley.png" class="headerlogo"></a></li>
            <li><a href="/about/">About</a></li>
            <li><a href="https://www.youtube.com/@satoriakatsuki" target="_blank">YouTube</a></li>
            <li><a href="/contact/">Contact</a></li>
            <li><a href="shop.satoriakatsuki.com" class="disabled coming-soon" data-tooltip="Coming Soon!">Merch</a></li>
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
