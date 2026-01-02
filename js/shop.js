fetch('data/products.json').then(r=>r.json()).then(d=>{
const g=document.getElementById('product-grid');
d.forEach(p=>{
g.innerHTML+=`<div><h3>${p.name}</h3><p>£${p.price}</p><a href="${p.stripeLink}">Buy</a></div>`;
});
});