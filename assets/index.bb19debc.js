var e=Object.defineProperty,t=("undefined"!=typeof require&&require,(t,r,n)=>(((t,r,n)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n})(t,"symbol"!=typeof r?r+"":r,n),n));import{S as r,P as n,W as i,B as s,M as o,a,d as c,o as d,b as u,c as l,e as m,f as h,g as p}from"./vendor.8b22e38a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class f{constructor(e,c){t(this,"scene"),t(this,"camera"),t(this,"renderer"),t(this,"cube"),this.scene=new r,this.camera=new n(75,e/c,.1,1e3),this.renderer=new i,this.renderer.setSize(e,c),this.animate=this.animate.bind(this);const d=new s(1,1,1),u=new o({color:65280});this.cube=new a(d,u),this.scene.add(this.cube),this.camera.position.z=5}update(){this.cube.rotation.x+=.01,this.cube.rotation.y+=.01}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}getRendererDomElement(){return this.renderer.domElement}animate(){requestAnimationFrame(this.animate),this.update(),this.renderer.render(this.scene,this.camera)}}const w={id:"canvas-container"};var b=c({setup(e){const t=new f(window.innerWidth,window.innerHeight);function r(e){t.resize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",r),d((()=>{var e;null==(e=document.getElementById("canvas-container"))||e.appendChild(t.getRendererDomElement()),t.animate()})),u((()=>{window.removeEventListener("resize",r)})),(e,t)=>(l(),m("div",w))}});p(c({setup:e=>(e,t)=>(l(),h(b))})).mount("#app");