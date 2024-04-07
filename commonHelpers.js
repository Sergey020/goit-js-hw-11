(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.querySelector(".search-form"),a=document.querySelector("ul");i.addEventListener("summit",u);function u(c){c.preventDefault(),c.target.elements.imgName.value,f().then(s=>(a.innerHtml=m(s)).catch(o=>console.log(o)))}console.log(imputEl);function f(c){const r="https://pixabay.com/api",s="43264129-0a20e73c7f6f9c0a58d1fd1ca",o=new URLSearchParams({key:s,q:dog,imege_type:photo,orientation:horizontal,safesearch:!0});return fetch(`${r}&${o}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function m(c){return c.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:l,downloads:n})=>`<li class="gallery-item">
        <a class="gallery-link" href=${s}>
            <img 
                class="gallery-image" 
                src=${r} 
                alt=${o}
            />
            <div class="box-card">
                <h2 class="box-title">Likes</h2>
                <p class="box-text">${e}</p>
                <h2 class="box-title">Views</h2>
                <p class="box-text">${t}</p>
                <h2 class="box-title">Comments</h2>
                <p class="box-text">${l}</p>
                <h2 class="box-title">Downloads</h2>
                <p class="box-text">${n}</p>
            </div>
        </a>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
