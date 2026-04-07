import{a as q,S as w,i as l}from"./assets/vendor-BOD_307a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const $="54530633-d87da1398ffb7ca41953b047e",B="https://pixabay.com/api/";async function u(s,t){return(await q.get(B,{params:{key:$,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const M=new w(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".loader"),m=document.querySelector(".gallery"),h=document.querySelector(".load-more");function p(s){const t=s.reduce((o,{webformatURL:a,largeImageURL:e,tags:r,likes:n,views:L,comments:v,downloads:S})=>o+=`
        <a class="photo-card" href="${e}">
          <img class="photo-img" src="${a}" alt="${r}" loading="${e}" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${n}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${L}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${v}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${S}
            </p>
          </div>
        </a>`,"");m.insertAdjacentHTML("beforeend",t),M.refresh()}function x(){m.innerHTML=""}function y(){f.classList.remove("hidden")}function g(){f.classList.add("hidden")}function b(){h.classList.remove("hidden")}function c(){h.classList.add("hidden")}let i=1;const d=document.querySelector(".form"),E=document.querySelector(".load-more");d.addEventListener("submit",s=>{y(),s.preventDefault(),c(),x();const t=d.elements.searchText.value;u(t,i).then(o=>{o.hits.length>0?(p(o.hits),o.totalHits>15*i?b():c()):l.info({position:"center",title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(o=>{l.error({position:"center",title:"Error",message:"Something went wrong. Try again later"}),console.error(o)}).finally(g())});E.addEventListener("click",()=>{i++,c(),y();const s=d.elements.searchText.value;u(s,i).then(t=>{if(p(t.hits),t.totalHits>15*i){b();const o=document.querySelectorAll(".photo-card");window.scrollBy({top:Number(3*o[o.length-1].getBoundingClientRect().height),behavior:"smooth"})}else c(),l.info({position:"center",title:"Info",message:"We're sorry, but you've reached the end of search results."})}).catch(t=>console.error(t)).finally(g())});
//# sourceMappingURL=index.js.map
