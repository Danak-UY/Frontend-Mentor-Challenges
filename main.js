let projectTemplate;
const fileUrl = "./project-template.html";
const projectsDOM = document.querySelector("main");

Handlebars.registerHelper("evaluateLink", function (folder, link, options) {
  if (!link) options.data.root.project["projectLink"] = folder;
});

Handlebars.registerHelper("githubLink", function (folder, options) {
  options.data.root.project["codeLink"] =
    "https://github.com/Danak-UY/Frontend-Mentor-Challenges/tree/master/" +
    folder;
});

fetch(fileUrl)
  .then((r) => r.text())
  .then((t) => {
    let projectTemplate = Handlebars.compile(t);

    projects.forEach((project) => {
      let article = document.createElement("article");
      article.innerHTML = projectTemplate({ project });
      projectsDOM.appendChild(article);
    });
  });
