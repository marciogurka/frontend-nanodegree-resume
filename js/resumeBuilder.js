var bio = {
	"name": "Márcio José Gurka Júnior",
	"role": "Front-End and Mobile Developer",
	"contacts": {
		"mobile": "+55999824591",
		"email": "marciogurkajr@gmail.com",
		"github": "https://github.com/marciogurka",
		"twitter": "@marciogurka",
		"location": "Ponta Grossa, Paraná, Brazil"
	},
	"welcomeMessage": "Welcome to my portifolio",
	"skills": [
	"JavaScript", 
	"CSS", 
	"AngularJS 1",
	"Ionic 2",
	"PHP",
	"Material Design"
	],
	"biopic": "https://avatars0.githubusercontent.com/u/16693227?v=3&s=460",
	"display": function(){
		var name = HTMLheaderName.replace("%data%", bio.name);
		var role = HTMLheaderRole.replace("%data%", bio.role);
		var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var email = HTMLemail.replace("%data%", bio.contacts.email);
		var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var github = HTMLgithub.replace("%data%", bio.contacts.github);
		var location = HTMLlocation.replace("%data%", bio.contacts.location);
		var biopic = HTMLbioPic.replace("%data%", bio.biopic);
		var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(role);
		$("#header").prepend(name);
		$("#header").append(biopic);
		$("#header").append(welcomeMessage);
		$("#header").append(HTMLskillsStart);
		$("#topContacts").prepend(mobile);
		$("#topContacts").append(email);
		$("#topContacts").append(github);
		$("#topContacts").append(twitter);
		$("#topContacts").append(location);

		appendSkills(bio.skills);
		$("#footerContacts").append(mobile);
		$("#footerContacts").append(email);
		$("#footerContacts").append(twitter);
		$("#footerContacts").append(github);
		$("#footerContacts").append(location);

		document.getElementById('header').style.display = "";
		document.getElementById('lets-connect').style.display = "";
	}
};

var education = {
	"schools": [
	{
		"name": "Sant'Ana College and Faculty",
		"location": "Ponta Grossa, Paraná, Brazil",
		"degree": "Computer Science Technician",
		"majors": ['CS'],
		"dates": "31/12/2011",
		"url": ""
	},
	{
		"name": "Ponta Grossa State University",
		"location": "Ponta Grossa, Paraná, Brazil",
		"degree": "Bachelor's degree in Computer Engineering",
		"majors": ['Computer Engineering'],
		"dates": "31/12/2016",
		"url": ""
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Nanodegree",
		"school": "Udacity",
		"dates": "31/12/2016",
		"url": ""
	}
	],
	"display": function(){
		$("#education").append(HTMLschoolStart);
		this.schools.forEach(function(school){
			var name = HTMLschoolName.replace("%data%", school.name);
			var degree = HTMLschoolDegree.replace("%data%", school.degree);
			var titleSchool = name + degree;
			var dates = HTMLschoolDates.replace("%data%", school.dates);
			var location = HTMLschoolLocation.replace("%data%", school.location);
			var major = updateMajors(school.majors);
			$(".education-entry").append(titleSchool);
			$(".education-entry").append(dates);
			$(".education-entry").append(location);
			$(".education-entry").append(major);
		});
		updateOnlineClasses(this.onlineCourses);
		document.getElementById('education').style.display = "";
	}
};

var work = {
	"jobs": [
	{
		"employer": "Ponta Grossa State University",
		"title": "Web Developer Intern",
		"location": "Ponta Grossa, Paraná, Brazil",
		"dates": "31/12/2014",
		"description": "Web Development of the academic systems"
	},
	{
		"employer": "DF Systems",
		"title": "Web Developer Intern",
		"location": "Ponta Grossa, Paraná, Brazil",
		"dates": "31/10/2016",
		"description": "Innovation and web development"
	}
	],
	"display": function(){
		$("#workExperience").append(HTMLworkStart);
		this.jobs.forEach(function(work){
			var employer = HTMLworkEmployer.replace("%data%", work.employer);
			var title = HTMLworkTitle.replace("%data%", work.title);
			var titleJob = employer + title;
			var dates = HTMLworkDates.replace("%data%", work.dates);
			var location = HTMLworkLocation.replace("%data%", work.location);
			var description = HTMLworkDescription.replace("%data%", work.description);
			$(".work-entry").append(titleJob);
			$(".work-entry").append(dates);
			$(".work-entry").append(location);
			$(".work-entry").append(description);
		});
		document.getElementById('workExperience').style.display = "";
	}
};

var projects = {
	"projects": [
	{
		"title": "Project 1",
		"dates": "2015 - now",
		"description": "First project",
		"images": [
		"http://lorempixel.com/400/200/technics/mac",
		"http://lorempixel.com/400/200/technics/iphone"
		]
	}, 
	{
		"title": "Project 2",
		"dates": "2014 - 2015",
		"description": "Second project",
		"images": [
		"http://lorempixel.com/400/200/technics/windows",
		"http://lorempixel.com/400/200/technics/ubuntu"
		]
	}],
	"display": function() {
		$("#projects").append(HTMLprojectStart);
		projects.projects.forEach(function(project){
			var title = HTMLprojectTitle.replace("%data%", project.title);
			var dates = HTMLprojectDates.replace("%data%", project.dates);
			var description = HTMLprojectDescription.replace("%data%", project.description);
			var images = updateImages(project.images);
			$(".project-entry").append(title);
			$(".project-entry").append(dates);
			$(".project-entry").append(description);
			$(".project-entry").append(images);
		});
		document.getElementById('projects').style.display = "";
	}
}



$(document).ready(function(){
	bio.display();
	work.display();
	projects.display();
	education.display();
	initMap();
})

function appendSkills(skills){
	skills.forEach(function(skill){
		var skillHTML = HTMLskills.replace("%data%", skill);
		$("#skills").append(skillHTML);
	})
}

function updateImages(images) {
	var imageHTML = "";
	images.forEach(function(image){
		imageHTML += HTMLprojectImage.replace("%data%", image);
	});
	return imageHTML;
}

function updateMajors(majors){
	var majorsHTML = "";
	majors.forEach(function(major){
		majorsHTML += HTMLschoolMajor.replace("%data%", major);
	});
	return majorsHTML;
}

function updateOnlineClasses(onlineCourses){
	$(".education-entry").append(HTMLonlineClasses);
	onlineCourses.forEach(function(course){
		var title = HTMLonlineTitle.replace("%data%", course.title);
		var school = HTMLonlineSchool.replace("%data%", course.school);
		var titleCourse = title + school;
		var dates = HTMLonlineDates.replace("%data%", course.dates);
		var url = HTMLonlineURL.replace("%data%", course.url);
		$(".education-entry").append(titleCourse);
		$(".education-entry").append(dates);
		$(".education-entry").append(url);
	});
}

function initMap(){
	$("#mapDiv").append(googleMap);
	document.getElementById('mapDiv').style.display = "";
}
