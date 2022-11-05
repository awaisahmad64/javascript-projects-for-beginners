const getMyDate = async () => {
  const myGitProfileUrl = 'https://api.github.com/users/awaisahmad64';
  const responseGit = await fetch(myGitProfileUrl);
  const myGitdata = await responseGit.json();
  console.log(myGitdata);
  return showGitData(myGitdata);
};
getMyDate();
const showGitData = (data) => {
  const card = document.getElementById('card');
  card.innerHTML = `<div class="card__header__bg__img">
    <div class="card__header__bg__img__profile">
      <img
        src="${data.avatar_url}"
        alt=""
      />
    </div>
  </div>
  <div class="card__body">
    <h2 class="card__body__title">${data.name}</h2>
    <h5 class="card__body__sub__title">MERN STACK DEVELOPER</h5>
    <p class="card__body__description">
     ${data.bio}
    </p>
    <a href="${data.html_url}" class="card__body__btn">View  Profile</a>
  </div>`;
};
