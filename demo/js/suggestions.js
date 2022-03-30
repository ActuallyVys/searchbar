let suggestions = [
    "Incognito",
    "Inflopnito",
    "Vys",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "The Rat",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become a Freelancer",
    "How to become a Web Designer",
    "How to start a Gaming Channel",
    "How to start a YouTube Channel",
    "What does HTML stand for?",
    "What does CSS stand for?",
];

let timeout;

document.querySelector('input').addEventListener('input', (event) => {
  if (timeout) clearTimeout(timeout);
  
  timeout = setTimeout(async () => {

    var url = 'https://duckduckgo.com/ac/?q=' + encodeURIComponent(event.target.value);

    var Url = new URL(url);
    
    // uses bare to fetch because duckduckgo blocks CORS, can change to any proxy with UV for this
    var fetched = await fetch('https://ludicrous.icu/bare/v1/', {
      method: 'GET',
      headers: {
        'x-bare-headers': '{}',
        'x-bare-protocol': 'https:',
        'x-bare-host': 'duckduckgo.com',
        'x-bare-port': 443,
        'x-bare-forward-headers': '[]',
        'x-bare-path': '/ac/?q=' + encodeURIComponent(event.target.value),
      }
    });
    
    (await fetched.json()).map(entry => {
      suggestions.push(entry.phrase)
    });
  }, 200);
}, false);
