"use strict";

var projectTemplate;
var fileUrl = "./project-template.html";
var projectsDOM = document.querySelector("main");
fetch(fileUrl).then(function (r) {
  return r.text();
}).then(function (t) {
  var projectTemplate = Handlebars.compile(t);
  projects.forEach(function (project) {
    var article = document.createElement("article");
    article.innerHTML = projectTemplate({
      project: project
    });
    console.log(article.innerHTML);
    projectsDOM.appendChild(article);
  });
});