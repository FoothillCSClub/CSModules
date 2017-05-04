var position = ['1a', '1a', 1],
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

window.onreadystatechange = initList();

function initList() {
	var navCourses = document.getElementById('nav-courses'),
	    navList = document.getElementById('nav-list');

	// loadJSON(function(response) {
	// 	list = JSON.parse(response);
	// });

	for (var course in list) {
		// Generate course button
		navCourses.appendChild(document.createElement('br'));
		var courseBtn = document.createElement('button');
		courseBtn.type = 'button';
		courseBtn.className = 'section';
		courseBtn.id = course;
		courseBtn.innerHTML = course.toUpperCase();
		navCourses.appendChild(courseBtn);
		// Generate course title
		navList.appendChild(document.createElement('br'));
		var courseSpan = document.createElement('span');
		courseSpan.style.fontSize = '250%';
		courseSpan.innerHTML = course.toUpperCase();
		navList.appendChild(courseSpan);
		navList.appendChild(document.createElement('br'));
		navList.appendChild(document.createElement('br'));
		for (var c = 0; c < list[course].c.length; c++) {
			// Generate chapter title
			var chapter = list[course].c[c],
			    chapterSpan = document.createElement('span');
			chapterSpan.innerHTML = chapter.toUpperCase();
			navList.appendChild(chapterSpan);
			// Generate section buttons
			for (var s = 1; s <= list[course].s[c]; s++) {
				var sectionBtn = document.createElement('button');
				sectionBtn.type = 'button';
				sectionBtn.className = 'section';
				sectionBtn.id = course + chapter + s;
				sectionBtn.setAttribute('onclick', 'setFrame("' + course + '","' + chapter + '",' + s + ')');
				sectionBtn.innerHTML = s;
				navList.appendChild(sectionBtn);
			}
			navList.appendChild(document.createElement('br'));
		}
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

function hideList() {
	document.getElementById('nav-menu').checked = false;
}

function jumpPrev() {
	var pos = position.slice();
	if (position[2] > 1)
		pos[2] = position[2] - 1;
	else if (position[1] !== '1a') {
		var idx = list[position[0]].c.indexOf(position[1]);
		pos[1] = list[position[0]].c[idx - 1];
		pos[2] = list[position[0]].s[idx - 1];
	}
	setFrame(pos[0], pos[1], pos[2]);
}

function jumpNext() {
	var pos = position.slice(),
	    idx = list[position[0]].c.indexOf(position[1]);
	if (position[2] < list[position[0]].s[idx])
		pos[2] = position[2] + 1;
	else if (idx < list[position[0]].c.length - 1) {
		pos[1] = list[position[0]].c[idx + 1];
		pos[2] = 1;
	}
	setFrame(pos[0], pos[1], pos[2]);
}

function setCourse(course) {
	// TODO
}

function setFrame(course, chapter, section) {
	var url = 'https://fgamedia.org/faculty/loceff/cs_courses/cs_' + course + '/cs_' + course.toUpperCase() + '_' + chapter + '_' + section + '.html';
	document.getElementById('frame').src = url;
	console.log(url);
	document.getElementById('chapter').innerHTML = chapter.toUpperCase();
	document.getElementById(position[0]).classList.remove('selected');
	document.getElementById(position[0] + position[1] + position[2]).classList.remove('selected');
	document.getElementById(course).classList.add('selected');
	document.getElementById(course + chapter + section).classList.add('selected');
	position = [course, chapter, section];
}
