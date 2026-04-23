let input = document.getElementById("userInput");
let submitBtn = document.getElementById("searchButton");
let result = document.getElementById("result");

async function getData() {
    let username = input.value;

    if (username === "") {
        result.textContent = "Enter a valid username please!";
        return;
    }

    try {
        result.textContent = "Loading...";

        let res = await fetch(`https://api.github.com/users/${username}`);

        if (!res.ok) {
            throw new Error("No user found");
        }

        let data = await res.json();

        result.innerHTML = `
            <div style="display: flex; gap:15px;">
                <img src="${data.avatar_url}" width="80" style="border-radius:50%">
                <div>
                    <h2>${data.name || "No Name"}</h2>
                    <p>@${data.login}</p>
                </div>
            </div>

            <p style="margin-top:10px;">${data.bio || "No bio available"}</p>

            <div style="display:flex; justify-content:space-between; margin-top:15px;">
                <p>Repos: ${data.public_repos}</p>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
            </div>
        `;
    } catch (err) {
        result.textContent = err.message;
    }
}

submitBtn.addEventListener("click", getData);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getData();
    }
});

let mode = document.getElementById("mode");
mode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        mode.textContent = "Mode: Dark";
        localStorage.setItem("theme", "dark");
    } else {
        mode.textContent = "Mode: Light";
        localStorage.setItem("theme", "light");
    }
});

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark");
    mode.textContent = "Mode: Dark";
}else{
    mode.textContent = "Mode: Light";
}