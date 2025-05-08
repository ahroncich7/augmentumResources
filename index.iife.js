(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode("")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();(function(){"use strict";const k=async(n,a,o)=>(await(await fetch("https://cichautomation.duckdns.org/webhook/9a97cd47-cd26-47ae-91f8-b92d0a62ee5a",{method:"POST",body:JSON.stringify({text:n,sender:a,id:o,timestamp:new Date})})).json()).content,E=async n=>(await(await fetch(`https://cichautomation.duckdns.org/webhook/9a97cd47-cd26-47ae-91f8-b92d0a62ee5a?id=${n}`)).json()).content,u=(n,a)=>`
                    <div class="flex w-full mt-2 space-x-3 max-w-xs justify-start flex-col">
						<div>
							<div class="bg-zinc-200 text-gray-500 p-3 rounded-r-lg rounded-bl-lg">
								<p class="text-sm">${n}</p>
							</div>
							<span data-timestamp='${a}' class="messageTimeStamp text-xs text-gray-500 leading-none">2 min ago</span>
						</div>
				    </div>`,p=(n,a,o)=>`<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
					<div>
						<div class="bg-${o}-200 text-gray-500 p-3 rounded-l-lg rounded-br-lg">
							<p class="text-sm">${n}</p>
						</div>
						<span data-timestamp='${a}' class="messageTimeStamp text-xs text-gray-500 leading-none">2 min ago</span>
					</div>
				</div>`;(async()=>{const n=document.getElementById("AlcLabsScript").getAttribute("data-theme")||"sky",a=document.getElementById("AlcLabsScript").getAttribute("data-apikey"),o=document.createElement("div");document.body.appendChild(o);const c=o.attachShadow({mode:"open"}),r="fixed top-0 pt-20 w-full px-4 z-50 transition-all duration-300 flex justify-center",M="fixed bottom-4 right-4 z-50 transition-all duration-300",g=document.createElement("style"),C="https://cdn.jsdelivr.net/gh/ahroncich7/augmentumResources/styles.css";g.textContent=await fetch(C).then(t=>t.text());const i=document.createElement("div");i.className=r;let d=!0;const T=(t,s)=>`
     <div class="flex flex-col flex-grow w-full max-w-xl shadow-xl rounded-3xl overflow-hidden">
       <div class="w-full bg-${s}-300/60 backdrop-blur-sm z-10 flex shadow-lg">
         <button id="close-widget" class="text-zinc-600 hover:text-black text-sm ms-auto me-5 py-1 my-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-x"><path d="M6 6l12 12M6 18L18 6"/></svg>
         </button>
       </div>
       <div class="bg-zinc-50/80 backdrop-blur-sm p-2">
         <div id="chat-container" class="flex flex-col flex-grow h-0 p-4 overflow-auto min-h-40 z-0">
           ${t.map(e=>e.sender==="user"?p(e.text,e.timestamp,s):u(e.text,e.timestamp)).join("")}
         </div>
       </div>
       <div class="bg-zinc-100/80 backdrop-blur-sm p-4 z-30 shadow-lg-top flex flex-row">
         <textarea id="chat-input" class="flex bg-transparent items-center h-10 w-full rounded px-3 text-sm focus-visible:outline-none text-gray-500" placeholder="Type your message…"></textarea>
         <button id="sendButton" class="text-${s}-500 flex flex-col justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-send"><path d="M10 14l11-11M21 3l-6.5 18a.55.55 0 01-1 0l-3.5-7-7-3.5a.55.55 0 010-1l18-6.5"/></svg>
         </button>
       </div>
     </div>
   `,B=`
  <div id="chat-bubble" class="bg-${n}-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg cursor-pointer hover:bg-${n}-600 transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chart-bubble"><path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0"/></svg>
  </div>
`,h=()=>{i.className=r,i.innerHTML=T(f,n),requestAnimationFrame(()=>{S(),v(),y()})},j=()=>{i.className=M,i.innerHTML=B;const t=i.querySelector("#chat-bubble");t==null||t.addEventListener("click",x)},x=()=>{d?j():h(),d=!d},S=()=>{var s,e;const t=c;(s=t.getElementById("sendButton"))==null||s.addEventListener("click",w),(e=t.getElementById("close-widget"))==null||e.addEventListener("click",x)},w=async()=>{const t=document.getElementById("chat-input"),s=t.value;if(!s)return;b({text:s,sender:"user",timestamp:new Date().toString()}),t.value="";const e=await k(s,"user",a);b(e)},v=()=>{const t=new Date;c.querySelectorAll(".messageTimeStamp").forEach(e=>{const l=new Date(e.dataset.timestamp);if(!l)return;const m=Math.ceil((t-l)/(1e3*60));e.innerHTML=`Hace ${m} min.`})},f=await E(a);c.appendChild(g),c.appendChild(i),h(),document.addEventListener("keydown",t=>{d&&t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),w())});const b=t=>{const s=document.getElementById("chat-container"),e=t.sender=="user"?p(t.text,t.timestamp,n):u(t.text,t.timestamp),l=document.createElement("div");l.innerHTML=e;const m=l.firstElementChild;s.appendChild(m),f.push(t),requestAnimationFrame(()=>{y(),v()})},y=()=>{const t=document.getElementById("chat-container");t.scrollTo({top:t.scrollHeight,behavior:"smooth"})}})()})();
