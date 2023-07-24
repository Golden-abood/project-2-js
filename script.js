function load(target, url) {
  var r = new XMLHttpRequest();
  r.open("GET", url, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    target.innerHTML = r.responseText;
  };
  r.send();
}
let includes = Array.from(document.querySelectorAll("[data-include]"));
includes.map((include) => {
  let file = include.dataset["include"] + ".html";
  load(include, file);
});

/*
let home = document.getElementById("home");
let profile = document.getElementById("profile");
console.log(profile);
console.log(home);

home.addEventListener("click", () => {
  home.classList.add("active");
  profile.classList.remove("active");
});

profile.addEventListener("click", () => {
  profile.classList.add("active");
  home.classList.remove("active");
});
*/

// Get All Posts
let baseUrl = "https://tarmeezacademy.com/api/v1";
// Get Posts
const getPosts = async () => {
  const res = await fetch(`${baseUrl}/posts`);
  const data = await res.json();
  console.log(data);
  let posts = data.data;
  let postsElement = document.querySelector(".posts");
  console.log(posts);
  for (let post of posts) {
    console.log(post);
    postsElement.innerHTML += `
    <div class="post bg-white rounded-lg p-[20px] mt-[40px]">
    <div class="user pb-3 flex items-center gap-x-[20px]">
      <img src="${post.author.profile_image}" class="max-w-[6%] rounded-full" />
      <h3 class="font-semibold">${post.author.name}</h3>
    </div>
    <hr class="bg-[#6666] border-none h-[1px] mx-auto mb-[20px]" />
    <img src="${post.image}" class="w-full rounded-md" />
    <span class="text-[#666] text-sm">${post.created_at}</span>
    <div class="text pb-3">
      <h3 class="text-lg font-semibold py-2">${post.title}</h3>
      <p class="text-base">
        ${post.body}
      </p>
    </div>
    <hr class="bg-[#6666] border-none h-[1px] mx-auto mb-[20px]" />

    <div class="comments text-sm flex items-center gap-x-4">
      <i class="ri-pencil-fill"></i>
      <span>${post.comments_count} Comments</span>
    </div>
  </div>`;
  }
  console.log(post);
};
getPosts();

const loginform = async () => {
  const userName = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  console.log(userName);
  console.log(password);
  const params = {
    username: userName,
    password: password,
  };
  const res = await fetch(`${baseUrl}/login`, {
    method: "POST",
    body: JSON.stringify(params),
  });
};
