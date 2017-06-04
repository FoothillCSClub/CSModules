var position = location.hash && location.hash.slice(1).toLowerCase().split('.') || localStorage.position && localStorage.position.split('.') || ['1a', '1a', 1];

(function() {
	var navMenu = document.getElementById('nav-menu');
	var navLink = document.getElementById('nav-link');
	var navCourses = document.getElementById('nav-courses');
	var navList = document.getElementById('nav-list');
	var touchStartX;
	var touchTime;

	for (var course in modules) {
		// Generate course button
		var courseBtn = document.createElement('button');
		courseBtn.type = 'button';
		courseBtn.className = 'section';
		courseBtn.id = course;
		courseBtn.setAttribute('onclick', 'setCourse("' + course + '")');
		courseBtn.innerHTML = course.toUpperCase();
		navCourses.appendChild(courseBtn);
		navCourses.appendChild(document.createElement('br'));
		// Generate course title
		var courseTitle = document.createElement('h1');
		courseTitle.id = course + '-title';
		courseTitle.innerHTML = course.toUpperCase();
		navList.appendChild(courseTitle);
		for (var c = 0, cLen = modules[course].length; c < cLen; c++) {
			// Generate chapter title
			var chapterTitleContainer = document.createElement('div');
			chapterTitleContainer.setAttribute('onmouseenter', 'scrollTitle(this)');
			chapterTitleContainer.setAttribute('onmouseleave', 'unscrollTitle(this)');
			navList.appendChild(chapterTitleContainer);
			var chapter = modules[course][c].c;
			var chapterTitle = document.createElement('h4');
			chapterTitle.id = course + chapter;
			chapterTitle.innerHTML = '<span>' + chapter.toUpperCase() + '</span>' + ' - ' + modules[course][c].t;
			chapterTitleContainer.appendChild(chapterTitle);
			// Generate section buttons
			for (var s = 1, sLen = modules[course][c].s; s <= sLen; s++) {
				var sectionBtn = document.createElement('button');
				sectionBtn.type = 'button';
				sectionBtn.className = 'section';
				sectionBtn.id = course + '-' + chapter + '-' + s;
				sectionBtn.innerHTML = s;
				navList.appendChild(sectionBtn);
			}
		}
	}

	// Wait for above generated elements to reflow
	// Workaround to support offline use - load event does not work on local web page
	setTimeout(function() {
		setCourse(position[0]);
		setFrame(position[0], position[1], parseInt(position[2]));
	}, 1);

	if (document.location.host)
		// Remove duplicate history entry created by location hash
		history.replaceState(undefined, undefined, '.');

	// Copy module link to clipboard
	var clipboard = new Clipboard('#nav-link', {
		text: function() {
			navLink.classList.add('copied');
			setTimeout(function() {
				navLink.classList.remove('copied');
			}, 1000);
			return document.location + '#' + position.join('.');
		}
	});

	navMenu.onchange = function() {
		if (this.checked) {
			navLink.style.left = '1rem';
			navCourses.style.left = '0.6rem';
			navList.style.left = 0;
		} else {
			navLink.style.left = '-10rem';
			navCourses.style.left = '-10rem';
			navList.style.left = '-24rem';
		}
	};

	// Detect section button click
	navList.addEventListener('click', function(e) {
		if (e.target.className === 'section') {
			var p = e.target.id.split('-');
			setFrame(p[0], p[1], p[2]);
			e.stopPropagation();
		}
	});

	// Detect swipe gesture on touchscreens
	navList.addEventListener('touchstart', function(e) {
		touchStartX = e.changedTouches[0].clientX;
		touchTime = Date.now();
	});

	// List follows finger
	navList.addEventListener('touchmove', function(e) {
		// Throttle execution
		if (Date.now() - touchTime < 25) return;
		touchTime = Date.now();
		var dx = e.changedTouches[0].clientX - touchStartX;
		if (dx < 0) {
			navLink.style.left = 'calc(' + (dx * 0.3) + 'px + 1rem)';
			navCourses.style.left = 'calc(' + (dx * 0.5) + 'px + 0.7rem)';
			navList.style.left = dx + 'px';
		}
	});

	navList.addEventListener('touchend', function(e) {
		if (e.changedTouches[0].clientX - touchStartX < -100)
			hideList();
		else
			navMenu.onchange();
	});
})();

// Change module when user pastes module link into address bar post-load
window.onhashchange = function() {
	var p = location.hash.slice(1).toLowerCase().split('.');
	setFrame(p[0], p[1], p[2]);
	history.replaceState(undefined, undefined, '.');
};

function hideList() {
	var navMenu = document.getElementById('nav-menu');
	navMenu.checked = false;
	navMenu.onchange();
}

// Scroll long chapter title text into view
function scrollTitle(el) {
	if (el.clientWidth < el.firstChild.offsetWidth)
		el.firstChild.style.left = (el.clientWidth - el.firstChild.offsetWidth - 6) + 'px';
}

function unscrollTitle(el) {
	el.firstChild.style.left = el.firstChild.style.left && 0;
}

// Get array index of chapter in course
function getIndex(course, chapter) {
	return modules[course].findIndex(obj => obj.c === chapter);
}

function jumpPrev() {
	var p = position.slice();
	if (p[2] > 1)
		p[2]--;
	else if (p[1] !== modules[p[0]][0].c) {
		var idx = getIndex(p[0], p[1]);
		p[1] = modules[p[0]][--idx].c;
		p[2] = modules[p[0]][idx].s;
	} else return;
	setFrame(p[0], p[1], p[2]);
}

function jumpNext() {
	var p = position.slice();
	var idx = getIndex(p[0], p[1]);
	if (p[2] < modules[p[0]][idx].s)
		p[2]++;
	else if (idx < modules[p[0]].length - 1) {
		p[1] = modules[p[0]][++idx].c;
		p[2] = 1;
	} else return;
	setFrame(p[0], p[1], p[2]);
}

function jumpChapter(n) {
	var p = position.slice();
	var idx = getIndex(p[0], p[1]);
	if (n < 0 && idx > 0)
		p[1] = modules[p[0]][--idx].c;
	else if (n > 0 && idx < modules[p[0]].length - 1)
		p[1] = modules[p[0]][++idx].c;
	else return;
	if (p[2] > modules[p[0]][idx].s)
		p[2] = modules[p[0]][idx].s;
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
});

// Scroll module list to selected course
function setCourse(course) {
	var navList = document.getElementById('nav-list');
	var scrollPosition = navList.scrollTop;
	var distance = document.getElementById(course + '-title').offsetTop - scrollPosition;
	var counter = 0;

	function smoothStep(n) {
		return n * n * (3 - 2 * n);
	}

	// Smooth scroll
	var sI = setInterval(function() {
		navList.scrollTop = scrollPosition + distance * smoothStep(counter++ / 30);
		if (counter > 30)
			clearInterval(sI);
	}, 10);

	if (position[0] !== course)
		setFrame(course, modules[course][0].c, 1);
}

// Load selected module in iframe
function setFrame(course, chapter, section) {
	var url = urls.base + (urls[course][chapter] && urls[course][chapter][section] || 'cs_' + course + '/cs_' + course.toUpperCase() + '_' + chapter + '_' + section) + '.html';
	document.getElementById('frame').src = url;

	// Highlight corresponding module list buttons
	document.getElementById(position[0]).classList.remove('selected');
	document.getElementById(position[0] + position[1]).firstChild.classList.remove('selected');
	document.getElementById(position.join('-')).classList.remove('selected');
	document.getElementById(course).classList.add('selected');
	document.getElementById(course + chapter).firstChild.classList.add('selected');
	document.getElementById(course + '-' + chapter + '-' + section).classList.add('selected');
	document.getElementById('nav-chapter').innerHTML = chapter.toUpperCase();
	document.title = 'CS ' + (course + ' ' + chapter).toUpperCase() + '.' + section;

	position = [course, chapter, section];
	localStorage.position = position.join('.');
	console.log(position.join('.').toUpperCase(), url);
}
