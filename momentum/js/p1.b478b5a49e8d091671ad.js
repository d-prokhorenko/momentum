(()=>{"use strict";const e={en:["Good night","Good morning","Good afternoon","Good evening"],ru:["Доброй ночи","Доброе утро","Добрый день","Добрый вечер"]},t={ru:{wind:"Скорость ветра:",humidity:"Влажность:"},en:{wind:"Wind speed:",humidity:"Humidity"}},n=document.querySelector(".greeting"),o=document.querySelector(".name");function r(){const e=(new Date).getHours();return["night","morning","afternoon","evening"][Math.trunc(e/6)]}const i=document.querySelector(".time"),a=document.querySelector(".date");function s(){return new Date}let c;function l(t){let o=t;const u=s().toLocaleTimeString();i.textContent=u,function(e){const t=new Intl.DateTimeFormat(e,{weekday:"long",month:"long",day:"numeric"}).format(s());a.textContent=t}(o),function(t){let o;switch(r()){case"night":o=0;break;case"morning":o=1;break;case"afternoon":o=2;break;case"evening":o=3}const i=e[`${t}`][o];n.textContent=i}(o),c=setTimeout(l.bind(null,o),1e3)}l("en");const u=document.querySelector(".quote"),d=document.querySelector(".author"),m=document.querySelector(".change-quote");let g;async function p(e){g=e;const t=await async function(e){const t=`./js/quote/quotes[${e}].json`,n=await fetch(t);return await n.json()}(e);let n=(o=t.length,Math.floor(Math.random()*o));var o;u.textContent=t[n].text,d.textContent=t[n].author}p("en"),m.addEventListener("click",(()=>p(g)));const h=document.querySelector(".weather-icon"),y=document.querySelector(".weather-error"),S=document.querySelector(".description-container"),v=document.querySelector(".temperature"),q=document.querySelector(".weather-description"),f=document.querySelector(".city"),w=document.querySelector(".wind"),C=document.querySelector(".humidity");let x;async function b(e){x=e;const n=`https://api.openweathermap.org/data/2.5/weather?q=${f.value}&lang=${e}&appid=7a73451a8444ee4e5138ed821773deab&units=metric`,o=await fetch(n),r=await o.json();r.message?function(e){y.textContent="en"===e?"City not found":"Город не найден",S.style.display="none",h.style.display="none",w.style.display="none",C.style.display="none"}(x):(y.textContent="",S.style.display="block",h.style.display="block",w.style.display="block",C.style.display="block",h.className="weather-icon owf",h.classList.add(`owf-${r.weather[0].id}`),v.textContent=`${Math.round(r.main.temp)}°C`,q.textContent=r.weather[0].description,w.textContent=`${t[`${e}`].wind} ${Math.round(r.wind.speed)} ${"en"===e?"m/s":"м/с"}`,C.textContent=`${t[`${e}`].humidity} ${Math.round(r.main.humidity)} %`)}b("en"),f.addEventListener("change",(()=>b(x)));const L={language:"en",photoSource:"",photoTags:"",blocks:[]},E=document.querySelector(".settings-btn"),k=document.querySelector(".settings"),_=k.querySelector(".settings__language"),I=k.querySelector(".settings__photoSource"),$=k.querySelector(".settings__item--hideelem"),j=k.querySelector(".settings__time"),M=k.querySelector(".settings__date"),T=k.querySelector(".settings__greeting"),N=k.querySelector(".settings__quote"),A=k.querySelector(".settings__weather"),G=k.querySelector(".settings__audio"),O=k.querySelector(".settings__item--tags input");let D=!1;function R(){L.language=this.value;let e=this.value;var t;clearInterval(c),l(e),t=e,o.placeholder="en"===t?"[Enter name]":"[Введите имя]",function(e){f.placeholder="en"===e?"[Enter city]":"[Введите город]"}(e),p(e),b(e),W(e)}function W(e){"en"===e?(_.previousElementSibling.textContent="Language",_.options[0].textContent="English",_.options[1].textContent="Russian",I.previousElementSibling.textContent="Photo source:",O.placeholder="write photo tags",$.textContent="Hide elements:",j.previousSibling.textContent="Time",M.previousSibling.textContent="Date",T.previousSibling.textContent="Greeting",N.previousSibling.textContent="Quote",A.previousSibling.textContent="Weather",G.previousSibling.textContent="Audio"):"ru"===e&&(_.previousElementSibling.textContent="Язык",_.options[0].textContent="Английский",_.options[1].textContent="Русский",I.previousElementSibling.textContent="Источник фото:",O.placeholder="Напишите теги для фото",$.textContent="Скрыть элементы:",j.previousSibling.textContent="Время",M.previousSibling.textContent="Дата",T.previousSibling.textContent="Приветствие",N.previousSibling.textContent="Цитата",A.previousSibling.textContent="Погода",G.previousSibling.textContent="Аудио")}function F(){let e=this.className.lastIndexOf("_"),t=this.className.slice(++e);"greeting"===t&&(t="greeting-container"),"audio"===t&&(t="player"),"quote"===t&&(t="quote-container",document.querySelector(".change-quote").classList.toggle("hidden")),document.querySelector(`.${t}`).classList.toggle("hidden")}function H(){let e=I.value,t=O.value;L.photoSource=e,L.photoTags=t,"github"===e?(O.parentElement.classList.add("hide"),Z()):(O.parentElement.classList.remove("hide"),U(e,O.value))}E.addEventListener("click",(function(){D?(k.classList.remove("open"),D=!1):(k.classList.add("open"),D=!0)})),_.addEventListener("change",R),j.addEventListener("change",F),M.addEventListener("change",F),T.addEventListener("change",F),N.addEventListener("change",F),A.addEventListener("change",F),G.addEventListener("change",F),I.addEventListener("change",H),O.addEventListener("change",H),window.addEventListener("beforeunload",(function(){let e=k.querySelectorAll("input");for(let t=0;t<e.length;t++)if(e[t].checked){let n=e[t].className;L.blocks.push(n)}}));const P=document.querySelector("body"),Y=document.querySelector(".slide-next"),J=document.querySelector(".slide-prev"),X=document.querySelector(".settings__photoSource");let Q;async function U(e,t){const n=r(),o=new Image;o.src=await async function(e,t,n){let o=n?n.split(" ").join(",")+","+t:t;if("flickr"===e){const e=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=32c6e3283e5533e4277b8411ab5835bc&tags=${o}&extras=url_l&format=json&nojsoncallback=1`,t=await fetch(e);return(await t.json()).photos.photo[Math.round(100*Math.random())].url_l}if("Unsplash API"===e){const e=`https://api.unsplash.com/photos/random?orientation=landscape&query=${o}&client_id=cLlSZd1EjPLoNOROx3oxj-k_3CYvio5IIyuCMjIjqLA`,t=await fetch(e);return(await t.json()).urls.regular}}(e,n,t),o.onload=()=>{P.style.backgroundImage=`url(${o.src})`}}function Z(){const e=r();let t=Q;t>0&&t<10&&(t=`${t}`.padStart(2,"0"));const n=new Image;n.src=`https://raw.githubusercontent.com/r1skd/stage1-tasks/assets/images/${e}/${t}.jpg`,n.onload=()=>{P.style.backgroundImage=`url(${n.src})`}}Q=Math.round(19*Math.random()+1),Z(),Y.addEventListener("click",(function(){Q=20===Q?1:++Q,"github"!==X.value?U(X.value,O.value):Z()})),J.addEventListener("click",(function(){Q=1===Q?20:--Q,"github"!==X.value?U(X.value,O.value):Z()}));const z=[{title:"Aqua Caelestis",src:"../momentum/assets/sounds/Aqua Caelestis.mp3",duration:"00:39"},{title:"Ennio Morricone",src:"../momentum/assets/sounds/Ennio Morricone.mp3",duration:"01:37"},{title:"River Flows In You",src:"../momentum/assets/sounds/River Flows In You.mp3",duration:"01:37"},{title:"Summer Wind",src:"../momentum//assets/sounds/Summer Wind.mp3",duration:"01:50"}],B=document.querySelector(".player-controls"),K=B.querySelector(".play"),V=B.querySelector(".play-prev"),ee=B.querySelector(".play-next"),te=B.querySelector(".timeline"),ne=B.querySelector(".volume-slider"),oe=B.querySelector(".volume-button"),re=B.querySelector(".audioName"),ie=document.querySelector(".play-list");z.forEach((e=>{const t=document.createElement("li");t.classList.add("play-item"),t.textContent=e.title,ie.append(t)}));const ae=new Audio(z[0].src);re.textContent=z[0].title;let se=.75,ce=!1,le=0,ue=0;function de(){ce?(ae.pause(),ce=!1):(ae.src=z[ue].src,ae.currentTime=0,ae.play(),re.textContent=z[ue].title,ce=!0),ce?K.classList.add("pause"):K.classList.remove("pause"),ge()}function me(){le=ue,ue=ue===z.length-1?0:++ue,de(),de()}function ge(){ie.children[le].classList.remove("item-active"),ie.children[ue].classList.add("item-active")}function pe(e){let t=parseInt(e),n=parseInt(t/60);t-=60*n;const o=parseInt(n/60);return n-=60*o,0===o?`${n}:${String(t%60).padStart(2,0)}`:`${String(o).padStart(2,0)}:${n}:${String(t%60).padStart(2,0)}`}ge(),K.addEventListener("click",de),V.addEventListener("click",(function(){le=ue,ue=0===ue?z.length-1:--ue,de(),de()})),ee.addEventListener("click",me),ae.addEventListener("ended",me),ae.addEventListener("loadeddata",(()=>{B.querySelector(".audioTime .length").textContent=pe(ae.duration),ae.volume=se})),te.addEventListener("click",(e=>{const t=window.getComputedStyle(te).width,n=e.offsetX/parseInt(t)*ae.duration;ae.currentTime=n})),setInterval((()=>{B.querySelector(".progress").style.width=ae.currentTime/ae.duration*100+"%",B.querySelector(".audioTime .current").textContent=pe(ae.currentTime)}),500),ne.addEventListener("click",(e=>{const t=window.getComputedStyle(ne).width,n=e.offsetX/parseInt(t);ae.volume=n,se=n,B.querySelector(".volume-percentage").style.width=100*n+"%"})),oe.addEventListener("click",(()=>{ae.muted=!ae.muted,ae.muted?(oe.classList.add("mute"),B.querySelector(".volume-percentage").style.width="0%"):(oe.classList.remove("mute"),B.querySelector(".volume-percentage").style.width=100*se+"%")})),window.addEventListener("beforeunload",(function(){localStorage.setItem("name",o.value),localStorage.setItem("city",f.value),localStorage.setItem("settings",JSON.stringify(L))})),window.addEventListener("load",(function(){localStorage.getItem("name")&&(o.value=localStorage.getItem("name")),localStorage.getItem("city")&&(f.value=localStorage.getItem("city"));const e=JSON.parse(localStorage.getItem("settings"));_.value=e.language,R.call(_,e.language);let t=e.blocks;for(let e=0;e<t.length;e++){let n=document.querySelector("."+t[e]);n.checked=!0,F.apply(n)}I.value=""!=e.photoSource?e.photoSource:"github",O.value=e.photoTags,H()}))})();