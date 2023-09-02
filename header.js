// JavaScript code to dynamically insert the header HTML
var headerHtml = `
  <header>
    <nav>
      <ul>
        <li><a href="/about.html">About</a></li>
        <li><a href="https://www.youtube.com/channel/satoriakatsuki" target="_blank">YouTube</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
`;

var body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', headerHtml);