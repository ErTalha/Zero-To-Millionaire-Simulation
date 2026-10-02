/* Presents the existing engine's exact results, without another economy model.
   The committed v1 save is written before animation. Reloading opens its closing
   report, so interrupted animation can never duplicate earnings or reroll a day. */
(function(root){'use strict';
const G=root.ZEngine||(typeof require==='function'&&require('./engine.js'));
const copy=x=>JSON.parse(JSON.stringify(x));
function plan(state,frameCount=36){const before=copy(state),after=copy(state),trace=[];const report=G.simulate(after,event=>trace.push(event));const openings=trace.filter(e=>e.kind==='opening'),customers=trace.filter(e=>e.kind==='customer');const frames=Array.from({length:frameCount},()=>[]);
 for(const event of customers){const index=Math.min(frameCount-1,Math.floor(event.index/Math.max(1,event.total)*frameCount));frames[index].push(event);}
 const display=copy(before);display.weather=after.weather;for(const opening of openings){const b=display.businesses.find(b=>b.id===opening.business);b.stock=copy(opening.stock);b.today={visitors:0,sold:0,revenue:0,queue:0,stock:0,price:0};}
 // Restock purchases are the only opening cash movements. The observer gives
 // their amounts directly; manual preparation purchases are already in before.
 display.cash=G.round(before.cash-openings.reduce((n,e)=>n+(e.restockCost||0),0));
 return{before,after,report,display,frames,trace,index:0,revealedRevenue:0,openingCash:display.cash};
}
function reveal(plan,index){const frame=plan.frames[index]||[];const feedback=[];const grouped=new Map();for(const event of frame){const b=plan.display.businesses.find(b=>b.id===event.business);b.today.visitors++;if(event.outcome==='sale'){b.today.sold++;b.today.revenue+=event.amount;plan.revealedRevenue+=event.amount;for(const [key,qty]of Object.entries(G.C.products[event.product].recipe))b.stock[key].qty-=qty;}else b.today[event.outcome]++;
 const key=event.business+'-'+event.outcome+'-'+(event.product||'');const group=grouped.get(key)||{...event,count:0,amount:0};group.count++;group.amount+=event.amount||0;grouped.set(key,group);}
 plan.display.cash=G.round(plan.openingCash+plan.revealedRevenue);plan.index=index+1;
 for(const group of grouped.values())feedback.push({...group,amount:G.round(group.amount)});return feedback;
}
const api={plan,reveal,copy};root.ZTrading=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
