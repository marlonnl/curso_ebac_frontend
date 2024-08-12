document.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('name');
    const login = document.getElementById('login');
    const avatar = document.getElementById('avatar');
    const repositories = document.getElementById('repositories');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const profileurl = document.getElementById('profile-url');

    // https://api.github.com/users/marlonnl

    const username = 'marlonnl';
    const endpoint = `https://api.github.com/users/${username}`;

    fetch(endpoint)
        .then(function(callback) {
            return callback.json();
        })
        .then(function(json) {
            name.innerText = json.name;
            login.innerText = `@${json.login}`;
            avatar.src = json.avatar_url;
            repositories.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            profileurl.href = json.url;
        })
})