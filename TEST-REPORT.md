# Redesign test report

Executed on 2 October 2026 with Node.js, Google Chrome through Playwright, and a manual in-app-browser play-through. Automated browser checks opened `index.html` directly through `file:` with no server. A temporary localhost server was used only for manual preview.

## Existing economy: all 16 groups passed again

The original `tests.js` was retained unchanged. It verifies starting cash and stock, recipes and price elasticity, purchasing and storage, exact inventory consumption, capacity limits, revenue/profit/cash reconciliation, employees and wages, training, upgrades, marketing, all choices of all 28 events, expansion milestones and independent locations, loan interest and principal, net worth, bankruptcy, achievements, saving/loading, victory and continued play.

The five extended progression runs buy ingredients, pay all costs, hire required staff and expand through all six tiers. They do not inject money or bypass unlocks.

| Seed | Trading days to win | Final net worth | Locations |
|---|---:|---:|---:|
| 1 | 96 | £1,047,767.87 | 12 |
| 17 | 96 | £1,001,945.30 | 11 |
| 42 | 96 | £1,031,135.01 | 12 |
| 2026 | 98 | £1,041,877.40 | 12 |
| 98765 | 96 | £1,045,962.57 | 12 |

Every simulated day checks finite finances, nonnegative stock and sales within actual staffed capacity. These runs demonstrate viable progression, not that every strategy wins.

## Economy preservation: 360 comparison days passed

Ran the previous engine and redesigned engine on matching states and seeds for 360 complete days across six seeds. Entire states and reports were deeply equal, including events, upgrades and expansion. The only engine addition is an optional presentation observer; it does not consume random numbers or change calculations. Configuration, event definitions, save validation and original tests remain unchanged.

## New presentation tests: all seven groups passed

Included in `presentation-tests.js`:

- The observer preserves seeded results across 50 seeds and records actual customer outcomes.
- Every frame reconciles displayed cash, stock, customers and sales with the exact daily report.
- Six simultaneous locations preserve independent inventory and trading results.
- Manager restocking appears at opening with its actual cash cost and is not duplicated.
- Price, empty-stock and queue reactions match the engine's lost-customer counts.
- Existing version-1 saves validate and round-trip with optional presentation settings.
- Revealing animations neither simulates another day nor changes the saved result.

## Browser interaction checks passed

- New game, £100 balance, short interactive tutorial, stock purchase and custom menu prices.
- Visible moving customers, progressive sales/cash, trading controls, pause/resume and closing. A final targeted check held a six-second pause: existing customers remained frozen, the simulation frame stayed fixed, and resume/closing worked.
- Preparation changes locked during trading; inspection remains available.
- Refresh in mid-shift restores exactly the committed day, cash, RNG and inventory in a closing report.
- Recruitment, training, manager automation and menu activation.
- All four upgrades, visible upgraded scene, clickable machine and chalkboard, and keyboard activation of the machine. Decorative title artwork is excluded from interactive focus.
- Campaigns, discounts, loyalty, borrowing and repayment.
- All six business types, City map and entering owned locations.
- Paid festival choice deducts its cost and applies the stated demand effect; competitors render.
- Manual save, export/import and reload restore six locations and the saved finances.
- All nine supporting panels and City navigation at 1440, 768, 390, 360 and 300 px widths.
- No horizontal page overflow; Open for business stays inside the viewport at each tested width.
- Fast 8× trading reaches closing normally.
- Millionaire celebration, continued trading, bankruptcy, restart cancellation and confirmation.
- Zero JavaScript runtime errors and zero external HTTP/HTTPS requests in the successful offline run.

Later business tiers, special events, bankruptcy and millionaire UI checks used disposable funded or terminal-state fixtures to exercise those screens promptly. Natural progression and insolvency rules were verified separately by the unchanged economy tests above.

## Manual play and visual inspection

Played three consecutive days through the actual in-app-browser controls: started from £100, bought ingredients, edited coffee to £2.80, opened trading, viewed results, continued mornings, upgraded the machine using earned cash, bought balanced deliveries, hired and trained a barista, and inspected closing accounts. The staffed day showed the changed wages and recruitment/training costs. Save recovery after interrupted trading was observed directly. Clicked the scene's machine to open its workshop. The saved journey continued into day 4.

Visually inspected the introduction, initial stall, customer trading, upgraded stall, bakery, City map, phone scene and phone Stockroom. A very narrow preview exposed a wrapped HUD; a compact layout was added and the 300 px browser checks passed. Opening controls, focus changes on price inputs, machine click targets and illustration artifacts were corrected during testing and checked again. The final 300 px run also exposed rotating victory decoration changing the modal scroll extent. The rays were clipped to a fixed region; victory continuation, another trading day, bankruptcy and restart then passed targeted reruns at 300, 360, 390 and 1440 px.

## Scope and remaining verification limits

Desktop Chrome and the in-app browser were used. Phone/tablet sizes were emulated; physical touch devices, Safari, Firefox and audible speaker output were not tested. Sound is synthesised locally, with a working mute setting. Browser-save availability remains tied to browser profile and location; portable export/import was tested.

The trading presentation streams the existing day-based simulation. Cash includes completed sales while the animation plays; bills are displayed at closing. The canonical result is saved before animation so refreshing cannot replay income. Some visitors are grouped visually on very busy days while all actual visits and sales remain counted.

## Repeat the included tests

For developers with Node.js, from the game folder:

```
node tests.js
node presentation-tests.js
```

No testing tools or commands are needed to play.