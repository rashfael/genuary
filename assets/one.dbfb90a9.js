import{r as x,o as p,a as h,c as _,b as g}from"./vendor.ccf00442.js";const b=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};b();const v={props:{},emits:[],setup(d,{emit:c}){const r=x(null);function s(e,t,o,n,l){const i=3*(o.x-t.x),u=3*(n.x-o.x)-i,y=l.x-t.x-i-u,a=3*(o.y-t.y),f=3*(n.y-o.y)-a,m=l.y-t.y-a-f;return{x:y*e**3+u*e**2+i*e+t.x,y:m*e**3+f*e**2+a*e+t.y}}return p(()=>{r.value.width=document.body.offsetWidth,r.value.height=document.body.offsetHeight;const e=r.value.getContext("2d"),t=[{x:100,y:100},{x:150,y:20},{x:300,y:300},{x:300,y:100}];for(let o=0;o<=1;o+=.01){const n=s(o,t[0],t[1],t[2],t[3]);e.beginPath(),e.arc(n.x,n.y,2,0,2*Math.PI),e.stroke()}}),(e,t)=>(h(),_("canvas",{class:"bezier",ref_key:"canvas",ref:r},null,512))}};g(v).mount("#app");
