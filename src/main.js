const searchEl = document.querySelector('.search-form');
const ulEl = document.querySelector('ul');

searchEl.addEventListener('summit', hendleSubmit);

function hendleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputEl = form.elements.imgName.value;

  searchImage(inputEl).then(resp =>
    (ulEl.innerHtml = createMarckup(resp)).catch(err => console.log(err))
  );
}
console.log(imputEl);


function searchImage(inputEl) {
  // https://pixabay.com/api/?key=43264129-0a20e73c7f6f9c0a58d1fd1ca&q=dog&image_type=photo&orientation=horizontal&safesearch=true
  const BASE_URL = 'https://pixabay.com/api';
  const API_KEY = '43264129-0a20e73c7f6f9c0a58d1fd1ca';
  const params = new URLSearchParams({
    key: API_KEY,
    q: dog,
    imege_type: photo,
    orientation: horizontal,
    safesearch: true,
  });

  return fetch(`${BASE_URL}&${params}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function createMarckup(arrImg) {
  return arrImg
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
        <a class="gallery-link" href=${largeImageURL}>
            <img 
                class="gallery-image" 
                src=${webformatURL} 
                alt=${tags}
            />
            <div class="box-card">
                <h2 class="box-title">Likes</h2>
                <p class="box-text">${likes}</p>
                <h2 class="box-title">Views</h2>
                <p class="box-text">${views}</p>
                <h2 class="box-title">Comments</h2>
                <p class="box-text">${comments}</p>
                <h2 class="box-title">Downloads</h2>
                <p class="box-text">${downloads}</p>
            </div>
        </a>
      </li>`
    )
    .join('');
}
