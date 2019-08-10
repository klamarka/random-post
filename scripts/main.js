const postPara = document.querySelector(".post");
const postTitle = document.querySelector(".post-title");
const changeStoryButton = document.querySelector(".changeStory");
const posts = [];
postPara.textContent = "Czeka na dane";

fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then(response => response.json())
  .then(json =>
    json.forEach(e => {
      postPara.textContent = json[0].body;
      postTitle.textContent = json[0].title;
      posts.push(e);
    })
  );

changeStoryButton.addEventListener("click", changePost, false);

function changePost() {
  let number = generateRandomNbInRange(0, posts.length - 1);
  postPara.textContent = posts[number].body;
  postTitle.textContent = posts[number].title;
}

function generateRandomNbInRange(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
