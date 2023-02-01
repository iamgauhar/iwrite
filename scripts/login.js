const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.getElementById("signup-btn").addEventListener("click", async (e) => {
  e.preventDefault();
  const author = document.querySelector("#sign-name").value;
  const username = document.querySelector("#sign-username").value;
  const email = document.querySelector("#sign-email").value;
  const password = document.querySelector("#sign-password").value;

  let signData = {
    author,
    username,
    email,
    password,
  };

  try {
    const res = await fetch(
      "https://wewrite-production.up.railway.app/author/signup",
      {
        method: "POST",
        body: JSON.stringify(signData),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const result = await res.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
});
