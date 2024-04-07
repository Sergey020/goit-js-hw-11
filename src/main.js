// https://pixabay.com/api/?key=43264129-0a20e73c7f6f9c0a58d1fd1ca&q=dog&image_type=photo&orientation=horizontal&safesearch=true
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43261093-4c9b6888dd775193ca00ecdb2';

const searchEl = document.querySelector('form');
const ulEl = document.querySelector('.gallery');

searchEl.addEventListener('submit', hendleSubmit);

function hendleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputEl = form.elements.imgName.value;
  console.log(inputEl);

  //console.log(searchImage(inputEl));
  // .then(resp => (ulEl.innerHtml = createMarckup(resp))
  // .catch(err => console.log(err)));

  const params = new URLSearchParams({
    key: API_KEY,
    q: `${inputEl}`,
    imege_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data.hits);
      ulEl.innerHTML = createMarckup(data.hits)
    })
    .catch(error => console.log('catch', error));

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
              <ul class="box-list">
                  <li>
                      <h2 class="box-title">Likes</h2>
                      <p class="box-text">${likes}</p>
                  </li>
                  <li>
                      <h2 class="box-title">Views</h2>
                      <p class="box-text">${views}</p>
                  </li>
                  <li class="box-item">
                      <h2 class="box-title">Comments</h2>
                      <p class="box-text">${comments}</p>
                  </li>
                  <li class="box-item">
                      <h2 class="box-title">Downloads</h2>
                      <p class="box-text">${downloads}</p>
                  </li>
              </ul>
          </a>
        </li>`
      )
      .join('');
  }
  // function createMarckup(arrImg) {
  //   return arrImg
  //     .map(
  //       ({
  //         webformatURL,
  //         largeImageURL,
  //         tags,
  //         likes,
  //         views,
  //         comments,
  //         downloads,
  //       }) => `<li class="gallery-item">
  //       <a class="gallery-link" href=${largeImageURL}>
  //           <img
  //               class="gallery-image"
  //               src=${webformatURL}
  //               alt=${tags}
  //           />
  //           <div class="box-card">
  //               <h2 class="box-title">Likes</h2>
  //               <p class="box-text">${likes}</p>
  //               <h2 class="box-title">Views</h2>
  //               <p class="box-text">${views}</p>
  //               <h2 class="box-title">Comments</h2>
  //               <p class="box-text">${comments}</p>
  //               <h2 class="box-title">Downloads</h2>
  //               <p class="box-text">${downloads}</p>
  //           </div>
  //       </a>
  //     </li>`
  //     )
  //     .join('');
  // }
}
