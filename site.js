
document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.links')?.classList.toggle('open'));
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
