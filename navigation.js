/*
 * This file is based on the code found in chapter 10 of 
 * John Dean's book "Web Programming"
*/

class Page {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }    
}

/* 
* Creates the navigation bar at the top of the screen and the footer at the bottom
*/
function createHeaderFooter(isIndexPage) {
    var h1 = document.createElement("h1");            
    var header = document.createElement("header");
    var footer = document.createElement("footer");
    var nav = document.createElement("nav");
    var ul = document.createElement("ul");
    var li;
    let pages = [
        new Page("mainPage.html", "Home"), 
        new Page("projects.html", "Projects"), 
        new Page("japanTrip.html", "Japan Trip 2023"), 
        new Page("https://github.com/daniel-mitchell011?tab=repositories", "GitHub")
    ]
   
    if(isIndexPage) {
        h1.innerHTML = "Welcome to Daniel's Domain!";
        header.appendChild(h1);
    }

    for(page of pages) {
        li = getli(page.name, page.link);
        li.className = "navigationBar";

        // Make the current page a different color on the nav bar.
        var splitPath = (window.location.pathname).split('/');
        let fileName = splitPath[splitPath.length - 1]; 
        if (page.name == fileName) {
            var aInner = li.getElementsByTagName("a")[0];
            aInner.className += " currentWebpage"         
        }
        console.log(fileName);
        ul.appendChild(li);
        nav.appendChild(ul);
        header.appendChild(nav)
        document.body.insertBefore(header, document.body.childNodes[0]);
    }

    nav = document.createElement("nav");
    ul = document.createElement("ul");
    li = getli("#", "Top");
    ul.appendChild(li);
    li = getli("index.html", "Home");
    ul.appendChild(li);
    nav.appendChild(ul);
    footer.appendChild(nav);
    document.body.appendChild(footer)
}

function getli(ref, label) {
    var li = document.createElement("li")
    var a = document.createElement("a")
    
    a.setAttribute("href", ref);
    a.innerHTML = label;
    li.appendChild(a); // insert a into li
    return li;
}
