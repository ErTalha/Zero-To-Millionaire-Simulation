(function(root){
const E=[
 ['rain','Rain on the high street','A downpour sends pedestrians indoors.',[['Ride it out',0,.65,0],['Put up a canopy',18,.95,1]]],
 ['festival','The town comes alive','The local festival is looking for coffee.',[['Welcome the crowds',0,1.6,2],['Sponsor the programme',65,2,4]]],
 ['supplier','Supplier price squeeze','Your supplier changes tomorrow’s rates.',[['Accept the increase',0,1,0,1.3],['Negotiate a fixed delivery',20,1,1,.85]]],
 ['machine','A worrying rattle','Your equipment needs attention.',[['Temporary repair',0,.65,-2],['Call an engineer',45,1,2]]],
 ['influencer','Spotted on social','A creator wants to feature your counter.',[['Offer a free tasting',15,1.65,4],['Politely decline',0,1,0]]],
 ['rival','A new neighbour','A rival opens around the corner.',[['Focus on regulars',0,.85,1],['Welcome-day samples',25,1.15,3]]],
 ['salary','A team conversation','Your team wants recognition for their work.',[['Give a team bonus',35,1.15,3],['Offer a sincere thank you',0,.95,-1]]],
 ['corporate','An office coffee run','A nearby office is planning a large order. Sales still need stock and capacity.',[['Accept the extra demand',0,1.8,2],['Keep the usual pace',0,1,0]]],
 ['inspection','Inspection day','An inspector checks your food preparation.',[['Deep-clean before opening',20,.95,5],['Follow the regular checklist',0,1,0]]],
 ['complaint','A very public complaint','A customer’s disappointing visit is circulating online.',[['Refund and apologise',12,1,3],['Ignore it',0,.8,-7]]],
 ['heat','Unexpected sunshine','Iced-drink weather makes hot drinks harder to sell.',[['Stick to the menu',0,.8,0],['Offer chilled versions',18,1.15,2]]],
 ['cold','A crisp morning','Everyone wants something warm.',[['Make the most of it',0,1.35,1],['Hand out warm samples',15,1.5,2]]],
 ['road','Roadworks ahead','Access to your business is disrupted.',[['Wait for the works',0,.72,0],['Add wayfinding signs',20,.98,1]]],
 ['press','The local food column','A journalist asks to photograph your business.',[['Make time for an interview',0,1.3,4],['Host a tasting',30,1.5,6]]],
 ['market','Saturday makers market','A pop-up market attracts new faces.',[['Open as usual',0,1.3,1],['Book a featured spot',30,1.65,3]]],
 ['power','A short power outage','Opening will be delayed.',[['Wait for power',0,.7,0],['Rent a generator',35,1,1]]],
 ['delivery','A delivery delay','Your usual supplier is running late.',[['Use existing stock',0,1,0,1.15],['Pay express freight',15,1.1,1,1]]],
 ['club','The neighbourhood book club','Readers need a new place to meet.',[['Reserve a corner',0,1.15,3],['Sponsor their next meeting',20,1.35,4]]],
 ['waste','A sustainability challenge','Locals are looking for greener businesses.',[['Start recycling',12,1.05,4],['Keep current packaging',0,1,0]]],
 ['tour','A coach tour arrives','A guide is seeking a reliable pit stop.',[['Welcome the group',0,1.7,1],['Keep it quiet',0,1,0]]],
 ['sports','Match-day energy','Fans are gathering nearby.',[['Join the excitement',15,1.6,2],['Business as usual',0,1.2,0]]],
 ['training','A masterclass in coffee','A local roaster offers a morning workshop.',[['Attend the session',25,1.1,5],['Keep the doors open',0,1,0]]],
 ['rent','Landlord maintenance','A planned maintenance visit disrupts the frontage.',[['Work around it',0,.85,0],['Pay for an early visit',20,1,1]]],
 ['music','A busker at the corner','Live music brings a crowd.',[['Enjoy the footfall',0,1.25,2],['Sponsor a short set',20,1.45,3]]],
 ['fair','The school fair','Families are looking for a treat.',[['Welcome families',0,1.3,2],['Donate refreshments',25,1.4,5]]],
 ['reviews','A wave of reviews','Customers are sharing their opinions.',[['Reply personally',0,1.1,3],['Thank them with samples',15,1.25,5]]],
 ['supplydeal','A roaster’s special','Your supplier offers a one-day wholesale discount.',[['Take the offer',0,1,0,.75],['Use the normal supplier',0,1,1,1]]],
 ['commute','Commuter disruption','Train delays change the morning rush.',[['Adapt to the later crowd',0,1.15,1],['Keep the normal routine',0,.85,0]]]
].map(([id,title,body,options])=>({id,title,body,options:options.map(([label,cost,demand,rep,supply=1])=>({label,cost,demand,rep,supply}))}));
root.ZEvents=E;if(typeof module!=='undefined')module.exports=E;
})(typeof window!=='undefined'?window:globalThis);
