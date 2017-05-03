var position,
    navList = document.getElementById('nav-list');

window.onreadystatechange = initList();

function initList() {
	var list,
	    navCourses = document.getElementById('nav-courses');
	list = {
		"1a":{
			"c":["1a","1b","2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b","10c"],
			"s":[5,2,7,7,4,5,5,6,6,5,5,6,8,5,6,6,2,3,7,4,8]
		},
		"1b":{
			"c":["1a","1b","2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b","10c"],
			"s":[7,7,6,5,1,5,5,4,8,8,6,5,3,4,5,8,5,6,4,6,6]
		},
		"1c":{
			"c":["1a","1b","2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b","11a","11b"],
			"s":[8,9,4,7,5,5,4,5,6,6,3,4,4,2,4,3,4,5,6,3,5,2]
		},
		"2a":{
			"c":["1a","1b","2a","2b","3a","3b","3c","4a","4b","4c","5a","5b","6a","6b","6c","7a","7b","8a","8b","9a","9b","9c","10a","10b"],
			"s":[5,7,7,5,8,6,5,6,4,6,6,5,5,5,6,8,5,5,5,2,3,3,4,4]
		},
		"2b":{
			"c":["1a","1b","2a","2b","3a","3b","4a","4b","4c","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b","10c"],
			"s":[8,7,7,7,8,7,5,3,8,6,5,4,4,5,6,5,4,6,4,5,1,4]
		},
		"2c":{
			"c":["1a","1b","2a","2b","3a","3b","4a","4b","5a","5b","6a","6b","7a","7b","8a","8b","9a","9b","10a","10b","11a","11b"],
			"s":[9,9,4,7,5,5,4,5,6,6,3,4,4,2,4,4,6,4,6,3,5,2]
		}
	};

	// loadJSON(function(response) {
	// 	list = JSON.parse(response);
	// });

	for (var course in list) {
		// Generate course button
		var courseBtn = document.createElement('button');
		courseBtn.type = 'button';
		courseBtn.className = 'section';
		courseBtn.style.width = '2.3em';
		courseBtn.setAttribute('onclick', 'setCourse("'.concat(course, '")'));
		courseBtn.innerHTML = course.toUpperCase();
		navCourses.appendChild(courseBtn);
		// Generate course module list container
		var navModules = document.createElement('div');
		navModules.id = course;
		navList.appendChild(navModules);
		// Generate module list
		// TEMP: Generate course title
		var courseSpan = document.createElement('span');
		courseSpan.style.fontSize = '250%';
		courseSpan.innerHTML = course.toUpperCase();
		navModules.appendChild(courseSpan);
		navModules.appendChild(document.createElement('br'));
		navModules.appendChild(document.createElement('br'));
		for (var c = 0; c < list[course].c.length; c++) {
			// Generate chapter title
			var chapter = list[course].c[c],
			    chapterSpan = document.createElement('span');
			chapterSpan.innerHTML = chapter.toUpperCase();
			navModules.appendChild(chapterSpan);
			// Generate section buttons
			for (var s = 1; s <= list[course].s[c]; s++) {
				var sectionBtn = document.createElement('button');
				sectionBtn.type = 'button';
				sectionBtn.className = 'section';
				sectionBtn.setAttribute('onclick', 'setFrame("'.concat(course, '","', chapter, '",', s, ')'));
				sectionBtn.innerHTML = s;
				navModules.appendChild(sectionBtn);
			}
			navModules.appendChild(document.createElement('br'));
		}
		navModules.appendChild(document.createElement('br'));
	}

	setFrame('1a', '1a', 1);
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

function toggleList() {
	if (navList.style.display === 'block')
		navList.style.display = 'none';
	else
		navList.style.display = 'block';
}

function jumpPrev() {
	// TODO: Jump to previous chapter
	setFrame(position[0], position[1], position[2] - 1);
}

function jumpNext() {
	// TODO: Jump to next chapter
	setFrame(position[0], position[1], position[2] + 1);
}

function setCourse(course) {
	// TODO
}

function setFrame(course, chapter, section) {
	var url = 'https://fgamedia.org/faculty/loceff/cs_courses/cs_'.concat(course, '/cs_', course.toUpperCase(), '_', chapter, '_', section, '.html');
	document.getElementById('frame').src = url;
	console.log(url);
	position = [course, chapter, section];
}
