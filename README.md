# ZERO TO MILLIONAIRE

Your first coffee stall. Your first £100. Your first million.

## Start playing

1. If you downloaded the ZIP, right-click it and choose **Extract All**.
2. Double-click **PLAY-ZERO-TO-MILLIONAIRE.cmd**, or open the **zero-to-millionaire** folder and double-click **index.html**.
3. Choose **Start your journey**, then follow the short Stockroom → Menu → Open tutorial.

Keep the game files together. Nothing needs installing: no account, server, internet connection or payment. Use a modern browser such as Chrome or Edge. The speaker button in the top bar mutes the optional sounds.

## One good day at a time

**Morning:** Stock your shelves, set your menu prices and check your team. The objects in your business are clickable: the machine opens the workshop, the chalkboard opens the menu, the crates open your stockroom, and staff open the team. The buttons along the bottom do the same thing.

**Open for business:** Watch customers walk in, queue, order, react and leave. Sales appear above the counter and your cash rises. These animations reflect actual simulation results and available ingredients. Busy shifts group some purchases into one animation. Use Pause, 1×/3×/8× speed, or **Close & see results**. During trading, you can inspect panels, visit other locations and check the Office. Purchases and price changes reopen between shifts.

**Closing:** Count the revenue, expenses and profit. Read customer feedback and the detailed accounts if you wish. Choose **Next day** to prepare again. Important events and milestones appear before the next shift and need your attention.

The 1/3/7-day selector runs a sequence of visual trading days. It stops for unresolved important events, bankruptcy and the first millionaire victory.

## Your first few days

- Begin with £100 cash, 30 coffee portions, 20 tea portions and 20 milk portions, a basic brewer and no employees or loans.
- Coffee starts at £2.50 and tea at £2. Buy ingredients in the Stockroom. Its balanced delivery button plans for your active menu while keeping £15 cash.
- Stock shortages lose customers. Long queues suggest a faster machine or more staff. Very high prices can drive customers away.
- The first machine upgrade unlocks cappuccino, latte and hot chocolate. Switch new products on in the Menu and buy their ingredients.
- Save for both a new business and its running costs. New locations begin with empty shelves and no staff.

## Build something you can see

Your starting table grows into a better stall. Equipment, counters, storage, plants, lighting and seating change as you buy upgrades. Cafés, trucks, bakeries, restaurants and franchise branches have different illustrations.

**Team** lets you recruit, train and dismiss four staff roles. A manager can restock automatically when enabled. **Marketing** offers campaigns, discounts and a loyalty programme. **City & empire** shows owned locations on an illustrated map; click a location to visit it. The property deeds show purchase costs and unlock requirements. Look for stock, staffing and equipment warnings.

All owned locations trade each day. Each has its own prices, menu, stock, staff, upgrades and campaigns. Larger businesses need staff to reach full capacity. Managers do not change your prices. Their £15 restocking buffer does not guarantee you can afford every bill.

The **Office** holds accounts, loans, revenue history, transaction records and save backups. The local market noticeboard shows competitors, their promotions and customer groups. The trophy shelf records achievements. Reach £1,000,000 net worth to celebrate your journey, then continue playing.

## Money made understandable

**Net worth = cash + business base values + equipment resale values + inventory value − loan balance.**

Your complimentary stall and ingredients have value, so initial net worth is £232.60 while cash is exactly £100. Equipment contributes 65% of its purchase cost. Business base valuations remain fixed; borrowing does not create net worth.

Operating profit counts ingredients when sold, wages, rent, maintenance, loyalty, campaigns, events, recruitment, training and loan interest. Stock purchases, equipment, new locations and loan principal affect cash separately. Local business comparisons show trading profit before centrally recorded campaign, event, recruitment, training and interest expenses; the empire's daily report includes these additional costs.

Loans last approximately 60 days with equal principal payments rounded to pennies, plus 0.2% daily interest on the outstanding balance. Rounding can add one repayment day. Only one loan is available at a time; early repayment has no fee.

Bankruptcy requires three consecutive negative-cash days and negative net worth on the third day. Sell spare ingredients for 50% of their average cost or consider an available loan to recover. Unsold stock does not spoil.

## Save and continue

The game saves automatically after actions and each trading day. The floppy-disk button also saves manually. Reopen the same **index.html** in the same browser and choose **Continue your journey**. Existing saves from the previous edition remain supported.

If you close or refresh during the trading animation, the calculated day's result is already safe. Continue opens its closing report, without repeating sales or rolling the day again.

Browser saves depend on the profile and file location. Moving the folder, private browsing or clearing browser data can make a save unavailable. Use **Office → Export save** for a portable backup and **Import save** to restore it. Starting a new journey or restarting asks before replacing progress.

## Included

- Six business tiers, eight products, five customer groups and independent locations.
- Four staff roles, training, four visible upgrade tracks, campaigns, discounts and loyalty.
- Two adaptive competitors and 28 event scenarios with working choices.
- Illustrated scenes and city, moving customers, sale feedback, closing reports and milestone celebrations.
- Accounts, loans, history, seven economy achievements, extra visual wealth milestones, victory and continued play.
- Offline graphics and sound, responsive layouts, keyboard controls and reduced-motion support.

Franchises use repeatable independently managed branches. Event supply-price and footfall effects last one trading day. The clock presents an eight-hour shift; the economy remains a day-based simulation. There is no multiplayer or online service.

## For developers

`config.js` tunes recipes, prices, costs and unlocks. `engine.js`, `events.js` and `save.js` own the existing economy and persistence. `trading.js` presents exact simulated outcomes; `art.js`, `scene.js`, `animations.js`, `city.js`, `panels.js`, `accounts.js`, `ui.js` and `style.css` build the game experience.

No commands are needed to play. With Node.js, run `node tests.js` and `node presentation-tests.js` to repeat the included checks. See **TEST-REPORT.md** for the tests actually executed and their limits.