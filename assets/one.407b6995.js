import{r as y,o as d,a as i,c as x,b as m}from"./vendor.ccf00442.js";const p=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};p();const h={props:{},emits:[],setup(f,{emit:l}){const c=y(null);function u(e,t,n,s,o){return{x:(1-e)**3*t.x+3*(1-e)**2*e*n.x+3*(1-e)*e**2*s.x+e**3*o.x,y:(1-e)**3*t.y+3*(1-e)**2*e*n.y+3*(1-e)*e**2*s.y+e**3*o.y}}return d(()=>{c.value.width=document.body.offsetWidth,c.value.height=document.body.offsetHeight;const e=c.value.getContext("2d");let t=0;function n(o){for(let r=0;r<=1;r+=.0025){const a=u(r,o[0],o[1],o[2],o[3]);e.beginPath(),e.arc(a.x,a.y,4,0,2*Math.PI),e.stroke(),t++}}function s(o,r){n([{x:o+20,y:r+130},{x:o+250,y:r-50},{x:o+350,y:r+200},{x:o,y:r+400}]),n([{x:o,y:r+400},{x:o+100,y:r+350},{x:o+100,y:r+500},{x:o+250,y:r+400}])}s(100,300),n([{x:400,y:550},{x:400,y:300},{x:600,y:300},{x:600,y:550}]),n([{x:400,y:550},{x:400,y:780},{x:600,y:780},{x:600,y:550}]),s(630,300),s(950,300),console.log(t)}),(e,t)=>(i(),x("canvas",{class:"bezier",ref_key:"canvas",ref:c},null,512))}};m(h).mount("#app");