(function(root){'use strict';const key='zero-to-millionaire-v1';
function validate(s){
 if(!s||s.version!==1||!Array.isArray(s.businesses)||!s.businesses.length||s.businesses.length>500||!s.settings||!s.stats)return false;
 for(const k of ['seed','day','cash','selected','revenue','profit','customers','tutorial','distress'])if(!Number.isFinite(s[k]))return false;
 for(const k of ['transactions','reports','achievements','rivals','marketLog','notice'])if(!Array.isArray(s[k]))return false;
 const ingredients=['beans','milk','tea','cocoa','flour','food'],products=['coffee','tea','cappuccino','latte','chocolate','pastry','cake','meal'];
 for(const b of s.businesses){if(!Number.isInteger(b.type)||b.type<0||b.type>5||!b.stock||!b.products||!b.upgrades||!Array.isArray(b.employees)||!Array.isArray(b.campaigns))return false;
 for(const k of ['id','rep','satisfaction','discount','totalRevenue','totalProfit'])if(!Number.isFinite(b[k]))return false;
 for(const k of ingredients)if(!b.stock[k]||!Number.isInteger(b.stock[k].qty)||b.stock[k].qty<0||!Number.isFinite(b.stock[k].avg)||b.stock[k].avg<0)return false;
 for(const k of products)if(!b.products[k]||!Number.isFinite(b.products[k].price)||b.products[k].price<.1||b.products[k].price>100)return false;
 for(const k of ['machine','storage','counter','decor'])if(!Number.isInteger(b.upgrades[k])||b.upgrades[k]<0||b.upgrades[k]>4)return false;
 if(b.employees.some(e=>!['cashier','barista','supervisor','manager'].includes(e.role)||!Number.isInteger(e.skill)||e.skill<0||e.skill>3))return false;
 }
 if(new Set(s.businesses.map(b=>b.id)).size!==s.businesses.length||!s.businesses.some(b=>b.id===s.selected))return false;
 if(s.loan&&(!Number.isFinite(s.loan.balance)||s.loan.balance<0||!Number.isFinite(s.loan.daily)||s.loan.daily<=0))return false;
 const safe=v=>typeof v==='string'?!/[<>]/.test(v):typeof v==='number'?Number.isFinite(v):v&&typeof v==='object'?Object.values(v).every(safe):true;
 return safe(s);
}
root.ZSave={validate,save(s){try{localStorage.setItem(key,JSON.stringify(s));return true;}catch(e){return false;}},load(){try{const s=JSON.parse(localStorage.getItem(key));return validate(s)?s:null;}catch(e){return null;}},remove(){localStorage.removeItem(key);},key};})(window);
