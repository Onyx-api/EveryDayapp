const apiKey = "YOUR_NEWS_API_KEY"; // Replace with your actual API key
const newsContainer = document.getElementById("news-container");

const fetchNews = async () => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
  const data = await response.json();
  const articles = data.articles;

  articles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");

    const titleElement = document.createElement("h3");
    titleElement.classList.add("article-title");
    titleElement.textContent = article.title;
    articleElement.appendChild(titleElement);

    if (article.description) {
      const descriptionElement = document.createElement("p");
      descriptionElement.classList.add("article-description");
      descriptionElement.textContent = article.description;
      articleElement.appendChild(descriptionElement);
    }

    const linkElement = document.createElement("a");
    linkElement.classList.add("article-link");
    linkElement.href = article.url;
    linkElement.target = "_blank";
    linkElement.textContent = "Read More";
    articleElement.appendChild(linkElement);

    newsContainer.appendChild(articleElement);
  });
};

fetchNews();
