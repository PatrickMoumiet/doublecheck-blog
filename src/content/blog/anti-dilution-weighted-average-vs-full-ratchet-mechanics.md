---
title: 'Anti-Dilution Protection: Weighted Average vs Full Ratchet Mechanics'
seoTitle: 'Anti-Dilution: Weighted Average vs Full Ratchet'
description: 'Anti-dilution mechanics explained: broad-based vs narrow-based weighted average, full ratchet formulas, down rounds, and AI contract review for startups.'
pubDate: 'Nov 24 2026'
authorName: 'Patrick Moumiet'
faq:
  - question: 'What is anti-dilution protection in venture capital?'
    answer: 'Anti-dilution protection is a preferred stock contractual mechanism that adjusts the conversion ratio of preferred shares to common shares if the company issues new shares at a price lower than the prior round (a down round).'
  - question: 'What is the difference between Full Ratchet and Broad-Based Weighted Average?'
    answer: 'Full ratchet reprices prior preferred shares down to the exact new low share price regardless of round size; broad-based weighted average accounts for both the lower price and the total number of shares issued.'
  - question: 'Why do startup founders avoid Full Ratchet anti-dilution?'
    answer: 'Full ratchet creates catastrophic founder dilution; even a small down-round check can grant prior investors millions of extra shares, stripping founders of control.'
  - question: 'What are standard customary carve-outs from anti-dilution triggers?'
    answer: 'Carve-outs include employee stock option pools, stock splits, equipment leasing warrants, commercial bank credit facilities, and strategic acquisitions.'
  - question: 'How can AI tools audit anti-dilution provisions before signing?'
    answer: 'AI tools parse term sheets and charter drafts to verify mathematical definitions, model dilution waterfalls under various down-round scenarios, and confirm broad-based capitalization formulas.'
toc:
  - label: '1. Quick answer'
    anchor: '1-the-quick-answer'
  - label: '2. The down-round dilemma and anti-dilution'
    anchor: '2-the-down-round-dilemma-and-anti-dilution-basics'
  - label: '3. Full Ratchet mechanics & mathematical impact'
    anchor: '3-full-ratchet-mechanics-and-mathematical-impact'
  - label: '4. Broad-based vs narrow-based weighted average'
    anchor: '4-broad-based-vs-narrow-based-weighted-average-formulas'
  - label: '5. Essential anti-dilution carve-outs & safe harbors'
    anchor: '5-essential-anti-dilution-carve-outs-and-safe-harbors'
  - label: '6. AI verification workflow for charter anti-dilution clauses'
    anchor: '6-ai-verification-workflow-for-charter-anti-dilution-clauses'
  - label: 'Where DoubleCheck fits'
    anchor: 'where-doublecheck-fits'
  - label: 'FAQ'
    anchor: 'faq'
---

*A definitive legal and mathematical guide to venture capital anti-dilution provisions, Broad-Based Weighted Average formulas, Full Ratchet penalties, and AI contract verification as of November 2026. General information, not legal advice.*

**Key takeaways:**

- **Anti-dilution protection** adjusts the conversion price of preferred stock if a startup subsequently issues equity at a lower valuation than the prior round (a "down round").
- **Broad-Based Weighted Average** is the universal market standard, adjusting conversion prices proportionally based on the amount of capital raised and total capitalization.
- **Full Ratchet** is an aggressive investor provision that reprices prior preferred shares down to the lowest new price, severely diluting founders even on tiny financing checks.
- Every Certificate of Incorporation must contain explicit **"Exempted Securities" carve-outs** to prevent routine option grants, bank warrants, and stock splits from triggering anti-dilution adjustments.
- Founders use **AI contract analysis** to verify that charter definitions include all common-equivalent shares in the denominator, protecting against accidental narrow-based dilution.

---

## 1. The quick answer

When a startup raises money at a $20 million valuation in Series A, investors pay a specific price per share (e.g., $2.00). If market conditions deteriorate or growth slows, forcing the company to raise a Series B at $1.00 per share, that transaction is a **down round**.

To protect their economic stake, venture capital investors require **anti-dilution provisions** in the Certificate of Incorporation. Instead of receiving additional cash, the existing preferred stockholders receive an upward adjustment to their **conversion ratio**. When they eventually convert into Common Stock (upon an IPO or acquisition), each preferred share converts into more than one share of Common Stock.

The critical distinction is *how* that adjustment is calculated: **Broad-Based Weighted Average** formulas soften the impact based on deal size, whereas predatory **Full Ratchet** formulas can wipe out founder equity entirely.

## 2. The down-round dilemma and anti-dilution basics

Under standard corporate law, when new shares are issued at a lower valuation, all existing shareholders suffer economic dilution. Preferred investors, however, refuse to bear down-round valuation hits alone.

Anti-dilution clauses work by modifying the **Conversion Price**:
$$	ext{Shares of Common Stock Issued upon Conversion} = rac{	ext{Original Purchase Price}}{	ext{Adjusted Conversion Price}}$$

In an up round, the Conversion Price equals the Original Purchase Price ($2.00 / $2.00 = 1.00x), meaning 1 Preferred Share converts into 1 Common Share. In a down round, the Conversion Price decreases, forcing the company to issue 1.25, 1.50, or 2.00 Common Shares per Preferred Share.

## 3. Full Ratchet mechanics and mathematical impact

Under a **Full Ratchet** clause, if the company sells even a single share of stock at a lower price, the Conversion Price for all existing preferred shares instantly drops to match that new price, completely ignoring how many shares were issued.

### The Full Ratchet Horror Story
- **Series A:** Investors purchase 5,000,000 shares at $2.00 ($10,000,000 invested).
- **Subsequent Down Round:** Facing a cash crunch, the company issues $100,000 of new stock at $0.50 per share to an angel investor.
- **Adjustment Under Full Ratchet:**
  - The Series A Conversion Price drops immediately from $2.00 to $0.50.
  - Series A conversion ratio jumps from 1:1 to 4:1 ($2.00 / $0.50).
  - The Series A investors now convert into **20,000,000 shares** of Common Stock instead of 5,000,000 shares.

For raising a modest $100,000 check, the founders surrendered 15,000,000 extra shares of ownership to prior investors. Consequently, founders must reject Full Ratchet terms unconditionally.

## 4. Broad-based vs narrow-based weighted average formulas

The industry standard is the **Broad-Based Weighted Average** anti-dilution formula, endorsed by the NVCA. It factors in both the lower price and the relative size of the new dilutive round:

$$CP_2 = CP_1 	imes rac{A + B}{A + C}$$

Where:
- **$CP_2$:** The new, adjusted Series A Conversion Price.
- **$CP_1$:** The existing Series A Conversion Price prior to the down round.
- **$A$:** The total number of shares of Common Stock outstanding immediately prior to the new issuance.
- **$B$:** The number of shares that the total new investment would have purchased if sold at the old conversion price ($CP_1$).
- **$C$:** The actual number of new shares issued in the down round.

### Broad-Based vs Narrow-Based
The critical lever is definition **$A$ (Capitalization)**:
- **Broad-Based:** Includes all issued common stock, preferred stock (on as-converted basis), all granted options, and all unallocated option pool reserves. A larger denominator dilutes the adjustment, protecting the founders.
- **Narrow-Based:** Only includes currently issued common and preferred stock, excluding unexercised options and unallocated pools. This produces a harsher downward adjustment for founders.

## 5. Essential anti-dilution carve-outs and safe harbors

A company issues equity for dozens of operational reasons unrelated to venture fundraising. The Certificate of Incorporation must include explicit **"Exempted Securities" carve-outs** stipulating that the following issuances never trigger anti-dilution adjustments:

1. **Employee Equity Plans:** Shares, options, or restricted stock issued to employees, officers, and directors under board-approved stock incentive plans.
2. **Stock Splits & Dividends:** Proportional share dividends, forward stock splits, or recapitalizations affecting all shares equally.
3. **Equipment Leasing & Bank Warrants:** Warrants issued to commercial banks or equipment lenders in connection with debt facilities.
4. **Commercial Strategic Partners:** Equity or warrants issued in connection with bona fide joint ventures, licensing deals, or real estate leases approved by the board.
5. **Acquisition Consideration:** Stock issued as merger consideration when acquiring another technology company.

## 6. AI verification workflow for charter anti-dilution clauses

Drafting errors in the algebraic anti-dilution formulas of corporate charters have caused multi-million-dollar disputes during IPOs. Modern AI contract review tools automate this verification:

1. **Verify Broad-Based Denominator Language:** Audit the charter definition of "Company Capitalization" to confirm that all option pool reserves and convertible securities are included in variable $A$.
2. **Check for Unintended Full Ratchet Triggers:** Ensure no "springing" or "reset" clauses revert a weighted average formula back to full ratchet if specific revenue targets are missed.
3. **Examine Pay-to-Play Sanctions:** Verify whether preferred investors must participate pro-rata in the down round to receive anti-dilution protection (a "pay-to-play" provision).
4. **Simulate Scenario Waterfalls:** Run mathematical down-round models across different share prices to project exact cap table shifts before executing financing term sheets.

## Where DoubleCheck fits

[DoubleCheck](https://www.contactdoublecheck.com) provides startup founders, CFOs, and venture teams with AI-driven contract verification and term sheet auditing. DoubleCheck helps teams review anti-dilution provisions, verify NVCA weighted average formulas, check exempted securities carve-outs, and collaborate with specialized corporate counsel to protect founder equity throughout challenging financing cycles.

**Related reading:**
- [Anti-Dilution Provisions in Venture Term Sheets](/blog/anti-dilution-provisions-term-sheet/)
- [Cap Table Cleanup Before Series A Common Problems](/blog/cap-table-cleanup-before-series-a-common-problems/)
- [Valuation Cap vs Discount in SAFEs](/blog/valuation-cap-vs-discount-safe-how-they-work-together/)
- [Series A Legal Due Diligence Checklist](/blog/series-a-legal-due-diligence-checklist/)

**Sources:** [National Venture Capital Association (NVCA), Model Certificate of Incorporation](https://nvca.org/model-legal-documents/); [Delaware General Corporation Law § 151 (Classes and Series of Stock)](https://delcode.delaware.gov/title8/c001/sc05/); [Benchmark Capital Partners IV, L.P. v. Vague, 2002 WL 1732423 (Del. Ch. 2002)](https://courts.delaware.gov); [Finch v. Warrior Sports, Inc., 2012 WL 1188339 (Del. Ch. 2012)](https://courts.delaware.gov).

## FAQ

**What is anti-dilution protection in venture capital?**

Anti-dilution protection is a preferred stock contractual mechanism that adjusts the conversion ratio of preferred shares to common shares if the company issues new shares at a price lower than the prior round (a down round).

**What is the difference between Full Ratchet and Broad-Based Weighted Average?**

Full ratchet reprices prior preferred shares down to the exact new low share price regardless of round size; broad-based weighted average accounts for both the lower price and the total number of shares issued.

**Why do startup founders avoid Full Ratchet anti-dilution?**

Full ratchet creates catastrophic founder dilution; even a small down-round check can grant prior investors millions of extra shares, stripping founders of control.

**What are standard customary carve-outs from anti-dilution triggers?**

Carve-outs include employee stock option pools, stock splits, equipment leasing warrants, commercial bank credit facilities, and strategic acquisitions.

**How can AI tools audit anti-dilution provisions before signing?**

AI tools parse term sheets and charter drafts to verify mathematical definitions, model dilution waterfalls under various down-round scenarios, and confirm broad-based capitalization formulas.

---

*General information only. This article is not legal, tax, investment, or accounting advice.*
