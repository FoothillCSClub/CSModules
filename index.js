var position = location.hash && location.hash.slice(1).split('.') || ['1a', '1a', 1],
    list;

window.onreadystatechange = initList();

function initList() {
	var navCourses = document.getElementById('nav-courses'),
	    navList = document.getElementById('nav-list');

	var xObj = new XMLHttpRequest();
	xObj.onreadystatechange = function() {
		if (xObj.readyState == 4 && xObj.status == 200) {
			list = JSON.parse(xObj.responseText);
			console.log('inside', list);
		}
	};
	xObj.open('GET', 'modules.json', true);
	xObj.send();
	console.log('outside', list);

	for (var course in list) {
		// Generate course button
		navCourses.appendChild(document.createElement('br'));
		var courseBtn = document.createElement('button');
		courseBtn.type = 'button';
		courseBtn.className = 'section';
		courseBtn.id = course;
		courseBtn.setAttribute('onclick', 'setCourse("' + course + '")');
		courseBtn.innerHTML = course.toUpperCase();
		navCourses.appendChild(courseBtn);
		var courseAnchor = document.createElement('div');
		courseAnchor.id = course + '-anchor';
		navList.appendChild(courseAnchor);
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
			chapterSpan.id = course + chapter;
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

	if (/Android|iP(hone|od)/.test(navigator.userAgent)) {
		function togglePortrait() {
			var nav = document.getElementsByClassName('nav');
			for (var i = 0; i < nav.length; i++)
				nav[i].classList.toggle('portrait');
		}

		if (screen.height > screen.width) {
			document.body.style.fontSize = '200%';
			togglePortrait();
		} else
			document.body.style.fontSize = '125%';

		window.addEventListener('orientationchange', function() {
			togglePortrait();
			if (screen.height > screen.width)
				document.body.style.fontSize = '200%';
			else
				document.body.style.fontSize = '125%';
		});
	}

	document.cookie = 'position=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	setFrame(position[0], position[1], parseInt(position[2]));
	setCourse(position[0]);
}

function hideList() {
	document.getElementById('nav-menu').checked = false;
}

function jumpPrev() {
	var p = position.slice();
	if (position[2] > 1)
		p[2]--;
	else if (position[1] !== '1a') {
		var idx = list[position[0]].c.indexOf(position[1]);
		p[1] = list[position[0]].c[idx - 1];
		p[2] = list[position[0]].s[idx - 1];
	} else return;
	setFrame(p[0], p[1], p[2]);
}

function jumpNext() {
	var p = position.slice(),
	    idx = list[position[0]].c.indexOf(position[1]);
	if (position[2] < list[position[0]].s[idx])
		p[2]++;
	else if (idx < list[position[0]].c.length - 1) {
		p[1] = list[position[0]].c[idx + 1];
		p[2] = 1;
	} else return;
	setFrame(p[0], p[1], p[2]);
}

function jumpChapter(n) {
	var p = position.slice(),
	    idx = list[position[0]].c.indexOf(position[1]);
	if (n < 0 && idx > 0)
		p[1] = list[position[0]].c[--idx];
	else if (n > 0 && idx < list[position[0]].c.length - 1)
		p[1] = list[position[0]].c[++idx];
	else return;
	if (p[2] > list[position[0]].s[idx])
		p[2] = list[position[0]].s[idx];
	setFrame(p[0], p[1], p[2]);
}

document.addEventListener('keydown', function(e) {
	switch (e.keyCode) {
		case 37: // Left arrow
			jumpPrev();
			break;
		case 38: // Up arrow
			jumpChapter(-1);
			break;
		case 39: // Right arrow
			jumpNext();
			break;
		case 40: // Down arrow
			jumpChapter(1);
	}
}, false);

function setCourse(course) {
	var navList = document.getElementById('nav-list'),
	    scrollPosition = navList.scrollTop,
	    distance = document.getElementById(course + '-anchor').offsetTop - scrollPosition,
	    counter = 0;

	function smoothStep(n) {
		return n * n * (3 - 2 * n);
	}

	var sI = setInterval(function() {
		navList.scrollTop = scrollPosition + distance * smoothStep(counter++ / 30);
		if (counter > 30)
			clearInterval(sI);
	}, 10);

	if (position[0] !== course)
		setFrame(course, '1a', 1);
}

function setFrame(course, chapter, section) {
	var url = 'https://fgamedia.org/faculty/loceff/cs_courses/cs_' + course + '/cs_' + course.toUpperCase() + '_' + chapter + '_' + section + '.html';
	document.getElementById('frame').src = url;
	console.log(url);

	document.getElementById('chapter').innerHTML = chapter.toUpperCase();
	document.getElementById(position[0]).classList.remove('selected');
	document.getElementById(position[0] + position[1]).classList.remove('selected');
	document.getElementById(position.join('')).classList.remove('selected');
	document.getElementById(course).classList.add('selected');
	document.getElementById(course + chapter).classList.add('selected');
	document.getElementById(course + chapter + section).classList.add('selected');
	document.title = 'CS ' + (course + ' ' + chapter).toUpperCase() + '.' + section;

	position = [course, chapter, section];
	history.replaceState(undefined, undefined, '#' + position.join('.'));
}
