(function(){
  var saved=null; try{saved=localStorage.getItem('lang')}catch(e){}
  var nav=(navigator.language||'en').toLowerCase();
  var l=saved||(nav.indexOf('cs')===0||nav.indexOf('sk')===0?'cs':'en');
  function fromHash(){return (location.hash==='#cs'||location.hash==='#en')?location.hash.slice(1):null}
  l=fromHash()||l;
  function mark(){var b=document.querySelectorAll('.lang button');for(var i=0;i<b.length;i++)b[i].classList.toggle('on',b[i].getAttribute('data-set')===document.documentElement.lang)}
  function set(x){document.documentElement.lang=x;try{localStorage.setItem('lang',x)}catch(e){}mark()}
  set(l);
  document.addEventListener('DOMContentLoaded',mark);
  window.addEventListener('hashchange',function(){var h=fromHash();if(h)set(h)});
  document.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('[data-set]');if(t)set(t.getAttribute('data-set'))});
})();
