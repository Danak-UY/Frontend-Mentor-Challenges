"use strict";

var projectTemplate;
var fileUrl = "./project-template.html";
var projectsDOM = document.querySelector("main");
Handlebars.registerHelper("evaluateLink", function (folder, link, options) {
  if (!link) options.data.root.project["projectLink"] = folder;
});
Handlebars.registerHelper("githubLink", function (folder, options) {
  options.data.root.project["codeLink"] = "https://github.com/Danak-UY/Frontend-Mentor-Challenges/tree/master/" + folder;
});
fetch(fileUrl).then(function (r) {
  return r.text();
}).then(function (t) {
  var projectTemplate = Handlebars.compile(t);
  projects.forEach(function (project) {
    var article = document.createElement("article");
    article.innerHTML = projectTemplate({
      project: project
    });
    projectsDOM.appendChild(article);
  });
});