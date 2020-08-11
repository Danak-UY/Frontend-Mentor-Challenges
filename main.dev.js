"use strict";

var projectTemplate;
var fileUrl = "./project-template.html";
var projectsDOM = document.querySelector("main");
Handlebars.registerHelper("evaluateLink", function (folder, link, options) {
  if (!link) options.data.root.project["projectLink"] = folder;
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