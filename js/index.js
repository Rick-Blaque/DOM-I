const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.getElementsByTagName('a')
//individually
// nav1[0].innerHTML = siteContent['nav']['nav-item-1']
// nav1[1].innerHTML = siteContent['nav']['nav-item-2']
// nav1[2].innerHTML = siteContent['nav']['nav-item-3']
// nav1[3].innerHTML = siteContent['nav']['nav-item-4']
// nav1[4].innerHTML = siteContent['nav']['nav-item-5']
// nav1[5].innerHTML = siteContent['nav']['nav-item-6']

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].innerHTML = siteContent['nav'][`nav-item-${i + 1}`]
};
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = 'green'
};

let h1 = document.getElementsByTagName('h1');
h1[0].innerHTML = siteContent['cta']['h1'];

let button = document.getElementsByTagName('button');
button[0].innerHTML = siteContent['cta']['button'];
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
let h4s = document.getElementsByTagName('h4');
h4s[0].innerHTML = siteContent['main-content']['features-h4']
h4s[1].innerHTML = siteContent['main-content']['about-h4']
h4s[2].innerHTML = siteContent['main-content']['services-h4']
h4s[3].innerHTML = siteContent['main-content']['product-h4']
h4s[4].innerHTML = siteContent['main-content']['vision-h4']

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let pars = document.getElementsByTagName('p')
pars[0].innerHTML = siteContent['main-content']['features-content']
pars[1].innerHTML = siteContent['main-content']['about-content']
pars[2].innerHTML = siteContent['main-content']['services-content']
pars[3].innerHTML = siteContent['main-content']['product-content']
pars[4].innerHTML = siteContent['main-content']['vision-content']

h4s[5].innerHTML = siteContent['contact']['contact-h4']
pars[5].innerHTML = siteContent['contact']['address']
pars[6].innerHTML = siteContent['contact']['phone']
pars[7].innerHTML = siteContent['contact']['email']

pars[8].innerHTML = siteContent['footer']['copyright']

let tryThis = document.createElement("h2")
let header = document.querySelector('header')
tryThis.innerHTML = 'Try This';
let h3 = document.createElement("h3")
h3.innerHTML = 'NEW HEADER'
header.appendChild(tryThis)
header.prepend(h3)