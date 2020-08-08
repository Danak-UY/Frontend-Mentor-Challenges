let projectTemplate;
const fileUrl = "./project-template.html";
const projectsDOM = document.querySelector("main");

fetch(fileUrl)
  .then((r) => r.text())
  .then((t) => {
    let projectTemplate = Handlebars.compile(t);

    projects.forEach((project) => {
      let article = document.createElement("article");
      article.innerHTML = projectTemplate({ project });
      console.log(article.innerHTML);
      projectsDOM.appendChild(article);
    });
  });
