import{a as m,S as p,i as h}from"./assets/vendor-BOD_307a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="54530633-d87da1398ffb7ca41953b047e",g="https://pixabay.com/api/";function b(s){return m.get(g,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const L=new p(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".loader"),l=document.querySelector(".gallery");function v(s){const r=s.reduce((o,{webformatURL:n,largeImageURL:e,tags:t,likes:i,views:d,comments:u,downloads:f})=>o+=`
        <a class="photo-card" href="${e}">
          <img class="photo-img" src="${n}" alt="${t}" loading="${e}" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${i}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${d}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${u}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${f}
            </p>
          </div>
        </a>`,"");l.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){l.innerHTML=""}function $(){c.classList.remove("hidden")}function q(){c.classList.add("hidden")}const a=document.querySelector(".form");a.addEventListener("submit",s=>{$(),s.preventDefault(),S();const r=a.elements.searchText.value;b(r).then(o=>{o.hits.length===0?h.show({position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}):v(o.hits)}).catch(o=>console.error(o)).finally(q())});
//# sourceMappingURL=index.js.map
