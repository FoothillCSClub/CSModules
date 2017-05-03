window.onreadystatechange = initList();

function initList() {
	var list,
	    navList = document.getElementById('nav-list'),
	    navCourses = document.getElementById('nav-courses');

	loadJSON(function(response) {
		list = JSON.parse(response);
	});

	for (var course in list) {
		// Generate course button
		var courseBtn = document.createElement('button');
		courseBtn.type = 'button';
		courseBtn.className = 'section';
		courseBtn.style.width = '2.2em';
		courseBtn.setAttribute('onclick', 'setCourse("'.concat(course, '")'));
		courseBtn.innerHTML = course.toUpperCase();
		navCourses.appendChild(courseBtn);
		// Generate course module container
		var navModules = document.createElement('div');
		navModules.id = course;
		navList.appendChild(navModules);
		// Generate module list
		for (var c = 0; c < list[course].c.length; c++) {
			// Generate chapter label
			var chapter = list[course].c[c],
			    chapterSpan = document.createElement('span');
			chapterSpan.innerHTML = chapter.toUpperCase();
			navModules.appendChild(chapterSpan);
			// Generate section buttons
			for (var s = 1; s <= list[course].s[c]; s++) {
				var sectionBtn = document.createElement('button');
				sectionBtn.type = 'button';
				sectionBtn.className = 'section';
				sectionBtn.setAttribute('onclick', 'setFrame("'.concat(course, '","', chapter, '","', s, '")'));
				sectionBtn.innerHTML = s;
				navModules.appendChild(sectionBtn);
			}
			navModules.appendChild(document.createElement('br'));
		}
	}
}

function loadJSON(callback) {
	var xObj = new XMLHttpRequest();
	xObj.overrideMimeType('application/json');
	xObj.open('GET', 'modules.json', true);
	xObj.onreadystatechange = function() {
		if (xObj.readyState == 4 && xObj.status == '200')
			callback(xObj.responseText);
	};
	xObj.send(null);
}

function toggleNav() {
	var navList = document.getElementById('nav-list');
	if (navList.style.display === 'block')
		navList.style.display = 'none';
	else
		navList.style.display = 'block';
}

function setCourse(course) {
	// TODO
}

function setFrame(course, chapter, section) {
	var url = 'https://fgamedia.org/faculty/loceff/cs_courses/cs_'.concat(course, '/cs_', course.toUpperCase(), '_', chapter, '_', section, '.html');
	document.getElementById('frame').src = url;
	console.log(url);
}
