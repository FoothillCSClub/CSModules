var position = location.hash && location.hash.slice(1).toLowerCase().split('.') || localStorage.position && localStorage.position.split('.') || ['1a', '1a', 1];

document.onreadystatechange = function () {
	const navMenu = document.getElementById('nav-menu');
	const navLink = document.getElementById('nav-link');
	const navCourses = document.getElementById('nav-courses');
	const navInfo = document.getElementById('nav-info');
	const navList = document.getElementById('nav-list');

	for (let course in modules) {
		// Generate course button
		const courseBtn = document.createElement('button');
		courseBtn.type = 'button';
		courseBtn.className = 'section';
		courseBtn.id = course;
		courseBtn.setAttribute('onclick', 'setCourse("' + course + '")');
		courseBtn.innerHTML = course.toUpperCase();
		navCourses.appendChild(courseBtn);
		navCourses.appendChild(document.createElement('br'));
		// Generate course title
		const courseTitle = document.createElement('h1');
		courseTitle.id = course + '-title';
		courseTitle.innerHTML = course.toUpperCase();
		navList.appendChild(courseTitle);
		for (let c = 0, cLen = modules[course].length; c < cLen; c++) {
			// Generate chapter title
			const chapterTitleContainer = document.createElement('div');
			chapterTitleContainer.setAttribute('onmouseenter', 'scrollTitle(this)');
			chapterTitleContainer.setAttribute('onmouseleave', 'unscrollTitle(this)');
			navList.appendChild(chapterTitleContainer);
			const chapter = modules[course][c].c;
			const chapterTitle = document.createElement('h4');
			chapterTitle.id = course + chapter;
			chapterTitle.innerHTML = '<span>' + chapter.toUpperCase() + '</span> - ' + modules[course][c].t;
			chapterTitleContainer.appendChild(chapterTitle);
			// Generate section buttons
			for (let s = 1, sLen = modules[course][c].s; s <= sLen; s++) {
				const sectionBtn = document.createElement('button');
				sectionBtn.type = 'button';
				sectionBtn.className = 'section';
				sectionBtn.id = course + '-' + chapter + '-' + s;
				sectionBtn.innerHTML = s;
				navList.appendChild(sectionBtn);
			}
		}
	}

	// Force reflow
	void navList.offsetWidth;
	setCourse(position[0]);
	setFrame(position[0], position[1], parseInt(position[2]));

	if (document.location.host)
		// Remove duplicate history entry created by location hash
		history.replaceState(undefined, undefined, '.');

	// Detect section button click
	navList.onclick = function (e) {
		if (e.target.className === 'section') {
			const p = e.target.id.split('-');
			setFrame(p[0], p[1], p[2]);
			e.stopPropagation();
		}
	};

	// Detect swipe gesture on touchscreens
	navList.addEventListener('touchstart', function (e) {
		window.touchStartX = e.changedTouches[0].clientX;
		window.touchTime = Date.now();
	});

	// List follows finger
	navList.addEventListener('touchmove', function (e) {
		// Throttle animation
		if (Date.now() - touchTime < 25) return;
		touchTime = Date.now();
		const dx = e.changedTouches[0].clientX - touchStartX;
		if (dx < 0) {
			navLink.style.left = 'calc(' + (dx * 0.3) + 'px + 1rem)';
			navCourses.style.left = 'calc(' + (dx * 0.5) + 'px + 0.7rem)';
			navInfo.style.left = 'calc(' + (dx * 0.5) + 'px + 1rem)';
			navList.style.left = dx + 'px';
		}
	});

	navList.addEventListener('touchend', function (e) {
		navLink.removeAttribute('style');
		navCourses.removeAttribute('style');
		navInfo.removeAttribute('style');
		navList.removeAttribute('style');
		if (e.changedTouches[0].clientX - touchStartX < -100)
			hideList();
		window.touchStartX = null;
		window.touchTime = null;
	});
};

// Change module when user pastes module link into address bar post-load
window.onhashchange = function () {
	const p = location.hash.slice(1).toLowerCase().split('.');
	setFrame(p[0], p[1], p[2]);
	history.replaceState(undefined, undefined, '.');
};

function hideList() {
	document.getElementById('nav-menu').checked = false;
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
	return modules[course].findIndex(function (obj) { return obj.c === chapter; });
}

function jumpPrev() {
	const p = position.slice();
	if (p[2] > 1)
		p[2]--;
	else if (p[1] !== modules[p[0]][0].c) {
		let idx = getIndex(p[0], p[1]);
		p[1] = modules[p[0]][--idx].c;
		p[2] = modules[p[0]][idx].s;
	} else return;
	setFrame(p[0], p[1], p[2]);
}

function jumpNext() {
	const p = position.slice();
	let idx = getIndex(p[0], p[1]);
	if (p[2] < modules[p[0]][idx].s)
		p[2]++;
	else if (idx < modules[p[0]].length - 1) {
		p[1] = modules[p[0]][++idx].c;
		p[2] = 1;
	} else return;
	setFrame(p[0], p[1], p[2]);
}

function jumpChapter(n) {
	const p = position.slice();
	let idx = getIndex(p[0], p[1]);
	if (n < 0 && idx > 0)
		p[1] = modules[p[0]][--idx].c;
	else if (n > 0 && idx < modules[p[0]].length - 1)
		p[1] = modules[p[0]][++idx].c;
	else return;
	if (p[2] > modules[p[0]][idx].s)
		p[2] = modules[p[0]][idx].s;
	setFrame(p[0], p[1], p[2]);
}

document.onkeydown = function (e) {
	switch (e.key) {
		case 'ArrowUp':
			jumpChapter(-1);
			break;
		case 'ArrowDown':
			jumpChapter(1);
			break;
		case 'ArrowLeft':
			jumpPrev();
			break;
		case 'ArrowRight':
			jumpNext();
	}
};

function copyLink() {
	const navLink = document.getElementById('nav-link');
	const link = document.getElementById('link');
	link.value = document.location + '#' + position.join('.');
	link.select();
	document.execCommand('copy');
	link.blur();
	navLink.classList.add('copied');
	setTimeout(function () {
		navLink.classList.remove('copied');
	}, 1000);
}

// Scroll module list to selected course
function setCourse(course) {
	const navList = document.getElementById('nav-list');
	const scrollPosition = navList.scrollTop;
	const distance = document.getElementById(course + '-title').offsetTop - scrollPosition;
	let counter = 0;

	function smoothStep(n) {
		return n * n * (3 - 2 * n);
	}

	// Smooth scroll
	const sI = setInterval(function () {
		navList.scrollTop = scrollPosition + distance * smoothStep(counter++ / 30);
		if (counter > 30)
			clearInterval(sI);
	}, 10);

	if (position[0] !== course)
		setFrame(course, modules[course][0].c, 1);
}

// Load selected module in iframe
function setFrame(course, chapter, section) {
	const url = urls.base + (urls[course][chapter] && urls[course][chapter][section] || 'cs_' + course + '/cs_' + course.toUpperCase() + '_' + chapter + '_' + section) + '.html';
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
	console.info(position.join('.').toUpperCase(), url);
}

function toggleInfo(e) {
	if (e.target !== e.currentTarget) return;
	const info = document.getElementById('info');
	info.style.display = info.style.display === 'none' ? 'block' : 'none';
}
