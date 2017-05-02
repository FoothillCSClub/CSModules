function toggleNav() {
	var list = document.getElementById('nav-list');
	if (list.style.display === 'block')
		list.style.display = 'none';
	else
		list.style.display = 'block';
}

function setFrame(course, chapter, section) {
	document.getElementById('frame').src = 'https://fgamedia.org/faculty/anand/cs'.concat(course, '/modules/cs_', course.toUpperCase(), '_', chapter, '_', section, '.html');
}
