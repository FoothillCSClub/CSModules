function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    if (menu.style.display === 'block')
        menu.style.display = 'none';
    else
        menu.style.display = 'block';
}

function setFrame(course, chapter, section) {
    document.getElementById('frame').src = 'https://fgamedia.org/faculty/anand/cs'.concat(course, '/modules/cs_', course.toUpperCase(), '_', chapter, '_', section, '.html');
}
