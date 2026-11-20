import fs from 'fs';
import path from 'path';
import { createGridGraphic, createStepsGraphic } from './generate-all-graphics.mjs';

const articles = [
  {
    slug: 'new-york-freelance-isnt-free-act-statewide-requirements-contracts',
    title: 'New York Freelance Isn’t Free Act: Statewide Contract Rules',
    seoTitle: 'New York Freelance Isn’t Free Act Contract Rules',
    description: 'Comply with the New York Freelance Isn’t Free Act statewide: mandatory contract terms, 30-day payment deadlines, treble damages, and hiring checklists.',
    pubDate: 'Nov 20 2026',
    authorName: 'Patrick Moumiet',
    badge: 'NEW YORK EMPLOYMENT',
    gridTitle: 'Key Requirements of NY Freelance Isn’t Free Act',
    gridSub: 'Statutory mandates for hiring independent contractors across New York State',
    gridItems: [
      { title: 'Mandatory Written Contract', desc: 'Required whenever cumulative services equal or exceed $800 over a consecutive 12-month period.' },
      { title: 'Strict 30-Day Pay Rule', desc: 'Compensation must be paid on or before the agreed date, or no later than 30 days after work completion.' },
      { title: 'Itemized Pricing Terms', desc: 'Contracts must detail names, addresses, itemization of services, value, rate, and calculation method.' },
      { title: 'Statutory Treble Damages', desc: 'Failure to pay on time exposes hiring parties to double or treble damages plus mandatory attorney fees.' },
      { title: 'No Fee Retaliation', desc: 'Hiring parties cannot require contractors to accept less compensation as a condition of timely payment.' },
      { title: '6-Year Record Retention', desc: 'Hiring parties must retain copies of executed freelance contracts for a minimum of six calendar years.' }
    ],
    stepsTitle: 'Complying with NY FIFA Before Retaining Contractors',
    stepsSub: 'Four essential procedural steps to avoid administrative fines and civil liability',
    steps: [
      { title: 'Audit Cumulative Spend', desc: 'Track 12-month contractor spend thresholds ($800) across all business operating units.' },
      { title: 'Standardize Contract Terms', desc: 'Embed statutory clauses: party details, itemized deliverables, explicit payment due date.' },
      { title: 'Secure Bilateral Signatures', desc: 'Ensure signed execution before service delivery begins; deliver a copy to the contractor.' },
      { title: 'Maintain 6-Year Records', desc: 'Archive executed contracts and proof of payment in compliant vendor files for six years.' }
    ],
    faq: [
      {
        question: 'When does the New York Freelance Isn’t Free Act require a written contract?',
        answer: 'A written contract is required whenever the value of services between a hiring party and a freelance worker equals or exceeds $800, either in a single agreement or aggregated across all contracts between the parties over the preceding 120 days or 12 months.'
      },
      {
        question: 'What happens if a hiring party pays a freelancer late under NY FIFA?',
        answer: 'Under New York Labor Law Article 44-A, a freelancer may file an administrative complaint with the New York State Department of Labor or file a civil action. Remedies include statutory damages of 100% to 200% of the unpaid balance (double to treble damages), injunctive relief, and mandatory attorney fees.'
      },
      {
        question: 'Does the New York statewide FIFA apply to remote freelancers outside NY?',
        answer: 'The statute protects freelance workers providing services in New York State or whose hiring party is located in New York. If your business is incorporated or operating in NY and hires remote contractors, NY DOL guidance advises complying with FIFA contract and payment mandates.'
      },
      {
        question: 'Can a hiring party ask a freelancer to waive their rights under FIFA?',
        answer: 'No. Any contract provision that attempts to waive rights granted under the Freelance Isn’t Free Act is void and unenforceable as against public policy.'
      },
      {
        question: 'What records must employers keep under NY FIFA?',
        answer: 'The hiring party must retain a copy of the written contract for no less than six years and must make it available to the New York State Department of Labor upon request.'
      }
    ],
    toc: [
      { label: '1. Quick answer', anchor: '1-the-quick-answer' },
      { label: '2. The $800 threshold', anchor: '2-the-800-threshold-and-who-qualifies-as-a-freelance-worker' },
      { label: '3. Mandatory contract terms', anchor: '3-mandatory-terms-every-ny-freelancer-agreement-must-contain' },
      { label: '4. 30-day payment rules', anchor: '4-the-strict-30-day-payment-rule-and-prohibited-practices' },
      { label: '5. Penalties and treble damages', anchor: '5-civil-penalties-treble-damages-and-dol-enforcement' },
      { label: '6. Compliance checklist', anchor: '6-compliance-checklist-for-startups-and-businesses' },
      { label: 'Where DoubleCheck fits', anchor: 'where-doublecheck-fits' },
      { label: 'FAQ', anchor: 'faq' }
    ]
  },
  {
    slug: 'california-ab5-b2b-contractor-exemption-checklist-business',
    title: 'California AB 5 & B2B Exemption: Contractor Rules for Businesses',
    seoTitle: 'California AB 5 B2B Contractor Exemption Checklist',
    description: 'Master the California AB 5 Business-to-Business (B2B) contractor exemption under Labor Code § 2776. Twelve mandatory statutory criteria and Borello test guide.',
    pubDate: 'Nov 20 2026',
    authorName: 'Patrick Moumiet',
    badge: 'CALIFORNIA EMPLOYMENT',
    gridTitle: 'California Labor Code § 2776 B2B Exemption Criteria',
    gridSub: 'Key statutory factors required to bypass the ABC test and preserve contractor status',
    gridItems: [
      { title: 'Separate Legal Entity', desc: 'Contractor must be formed as a sole proprietorship, partnership, LLC, or corporation.' },
      { title: 'Business Location', desc: 'Must maintain a separate business location distinct from the contracting business entity.' },
      { title: 'B2B Client Roster', desc: 'Must actually contract with other businesses to provide similar services without restrictions.' },
      { title: 'Control of Performance', desc: 'Must be free from the control and direction of the contracting business in execution.' },
      { title: 'Own Tools & Equipment', desc: 'Contractor must supply all necessary equipment, software, supplies, and tools for the engagement.' },
      { title: 'Negotiated Market Rates', desc: 'Must negotiate its own pricing and rates rather than having them unilaterally set by the client.' }
    ],
    stepsTitle: 'Auditing B2B Contractor Engagements Under AB 5',
    stepsSub: 'Step-by-step verification process to ensure § 2776 safe harbor compliance',
    steps: [
      { title: 'Verify Entity Filings', desc: 'Obtain active Secretary of State certificate of good standing or local business tax registration.' },
      { title: 'Draft Arm’s-Length MSA', desc: 'Execute written Master Services Agreement explicitly addressing all 12 statutory requirements.' },
      { title: 'Document Independence', desc: 'Collect evidence of separate office address, multiple clients, business insurance, and equipment.' },
      { title: 'Apply Borello Multifactor', desc: 'Confirm engagement satisfies common-law Borello right-of-control test once ABC is bypassed.' }
    ],
    faq: [
      {
        question: 'What is the California AB 5 B2B exemption?',
        answer: 'Codified in California Labor Code § 2776, the business-to-business exemption allows qualifying business service relationships to bypass the strict ABC test (Dynamex) and instead be evaluated under the more flexible common-law Borello multi-factor test.'
      },
      {
        question: 'What happens if a contractor fails just one of the 12 B2B criteria?',
        answer: 'If any single statutory requirement under § 2776 is not met, the B2B exemption fails completely. The worker’s status then automatically defaults back to the strict ABC test, where Prong B (work outside usual course of business) frequently triggers misclassification.'
      },
      {
        question: 'Does having an LLC or Corporation automatically exempt a contractor under AB 5?',
        answer: 'No. While having a recognized business entity is mandatory under § 2776, it is only one of 12 distinct requirements. The entity must also maintain separate premises, contract with other clients, provide its own equipment, and exercise full discretion over work performance.'
      },
      {
        question: 'What is the Borello test under California law?',
        answer: 'Established in S.G. Borello & Sons, Inc. v. DIR (1989), the Borello test evaluates whether the hiring firm has the right to control the manner and means of work, along with secondary factors like investment in facilities, degree of skill, and duration.'
      },
      {
        question: 'Are tech consultants and marketing agencies eligible for the B2B exemption?',
        answer: 'Yes, professional services agencies, software development shops, and marketing consultants regularly qualify, provided the services are provided directly to the contracting business rather than to customers of the contracting business.'
      }
    ],
    toc: [
      { label: '1. Quick answer', anchor: '1-the-quick-answer' },
      { label: '2. The ABC test vs B2B', anchor: '2-ab-5-the-abc-test-and-why-the-b2b-exemption-matters' },
      { label: '3. 12 statutory requirements', anchor: '3-the-12-mandatory-statutory-criteria-under-labor-code-2776' },
      { label: '4. The Borello second step', anchor: '4-the-second-hurdle-passing-the-common-law-borello-test' },
      { label: '5. Common traps and audits', anchor: '5-common-b2b-contractor-audit-traps-and-edd-enforcement' },
      { label: '6. Drafting an airtight B2B MSA', anchor: '6-how-to-structure-a-compliant-b2b-contract' },
      { label: 'Where DoubleCheck fits', anchor: 'where-doublecheck-fits' },
      { label: 'FAQ', anchor: 'faq' }
    ]
  },
  {
    slug: 'delaware-franchise-tax-assumed-par-value-method-calculation',
    title: 'Delaware Franchise Tax: How the Assumed Par Value Method Works',
    seoTitle: 'Delaware Franchise Tax Assumed Par Value Method Guide',
    description: 'Slash a $50,000+ Delaware franchise tax bill down to $400. Master the Assumed Par Value Capital Method formula, gross assets calculation, and filing rules.',
    pubDate: 'Nov 20 2026',
    authorName: 'Patrick Moumiet',
    badge: 'DELAWARE CORPORATE',
    gridTitle: 'Delaware Franchise Tax Methods Compared',
    gridSub: 'Authorized Shares Method vs Assumed Par Value Capital Method for C-Corporations',
    gridItems: [
      { title: 'Authorized Shares Default', desc: 'Calculates tax purely on authorized share count. A 10M share startup receives an automated $85,000+ tax assessment.' },
      { title: 'Assumed Par Value Method', desc: 'Calculates tax based on Total Gross Assets and issued share proportions, typically reducing tax to $400.' },
      { title: 'Gross Assets Metric', desc: 'Reported directly from federal Form 1120, Schedule L, Line 15(d) (Total Assets), not market valuation.' },
      { title: 'Minimum Annual Tax', desc: 'The minimum Delaware corporate franchise tax under the Assumed Par Value method is $400 plus the $50 annual report fee.' },
      { title: 'Maximum Cap Limitation', desc: 'Delaware caps franchise tax at $200,000 annually ($250,000 for Large Corporate Filers with $750M+ metrics).' },
      { title: 'March 1 Strict Deadline', desc: 'Delaware corporate annual reports and franchise taxes are strictly due March 1; late penalty is $200 plus 1.5% monthly interest.' }
    ],
    stepsTitle: 'Calculating Assumed Par Value Capital Step-by-Step',
    stepsSub: 'The exact four-step formula prescribed by Delaware Code Title 8, § 503',
    steps: [
      { title: 'Calculate Assumed Par', desc: 'Divide Total Gross Assets by Total Issued Shares (e.g., $100k assets ÷ 5M issued shares = $0.02).' },
      { title: 'Determine Assumed Par Value', desc: 'Take the higher of the calculated assumed par or the actual par value from the Certificate of Incorporation.' },
      { title: 'Compute Assumed Capital', desc: 'Multiply the Assumed Par Value by total Authorized Shares to establish the company’s Assumed Par Value Capital.' },
      { title: 'Apply $400 / Million Rate', desc: 'Tax is $400 for each $1,000,000 or fraction thereof of Assumed Par Value Capital.' }
    ],
    faq: [
      {
        question: 'Why did Delaware send my startup an $85,000 franchise tax bill?',
        answer: 'Delaware’s automated default assessment uses the Authorized Shares Method. If your Certificate of Incorporation authorized 10,000,000 shares, the state computer assesses $85,000+. Recalculating using the Assumed Par Value Capital Method almost always reduces the bill to the $400 minimum.'
      },
      {
        question: 'What counts as Total Gross Assets for the calculation?',
        answer: 'Per 8 Del. C. § 503, Total Gross Assets means those assets reported on the corporation’s federal income tax return on Form 1120, Schedule L, Line 15(d). If no return has been filed yet, it is the total balance sheet asset value at the close of the calendar year.'
      },
      {
        question: 'What is the filing deadline for Delaware C-Corps?',
        answer: 'Delaware corporations must file their Annual Report and pay franchise tax by March 1 every year. Failure to file incurs a $200 statutory penalty plus 1.5% monthly interest and leads to loss of good standing.'
      },
      {
        question: 'Does the Assumed Par Value method apply to Delaware LLCs?',
        answer: 'No. Delaware LLCs do not file annual reports or compute share taxes. LLCs pay a flat annual franchise tax of $300 due on June 1 each year.'
      },
      {
        question: 'Can I change my calculation method every year?',
        answer: 'Yes. Delaware allows corporations to compute their tax under whichever method yields the lower legal tax liability each calendar year.'
      }
    ],
    toc: [
      { label: '1. Quick answer', anchor: '1-the-quick-answer' },
      { label: '2. The two tax methods', anchor: '2-authorized-shares-vs-assumed-par-value-method' },
      { label: '3. The step-by-step formula', anchor: '3-the-exact-assumed-par-value-calculation-formula' },
      { label: '4. Concrete startup calculation', anchor: '4-concrete-example-reducing-85000-to-400' },
      { label: '5. Reporting Gross Assets correctly', anchor: '5-how-to-report-gross-assets-from-form-1120' },
      { label: '6. Deadlines, penalties, and tips', anchor: '6-deadlines-penalties-and-amended-filings' },
      { label: 'Where DoubleCheck fits', anchor: 'where-doublecheck-fits' },
      { label: 'FAQ', anchor: 'faq' }
    ]
  },
  {
    slug: 'texas-business-courts-vs-delaware-chancery-court-startups',
    title: 'Texas Business Courts vs Delaware Chancery: Commercial Disputes',
    seoTitle: 'Texas Business Courts vs Delaware Chancery Court Guide',
    description: 'Compare the new Texas Business Court system with the Delaware Court of Chancery. Jurisdictional thresholds, specialized judges, appeals, and startup choices.',
    pubDate: 'Nov 20 2026',
    authorName: 'Patrick Moumiet',
    badge: 'COMMERCIAL LITIGATION',
    gridTitle: 'Texas Business Court vs Delaware Chancery Comparison',
    gridSub: 'Structural, jurisdictional, and procedural distinctions for commercial entities',
    gridItems: [
      { title: 'Subject Jurisdiction', desc: 'Delaware Chancery handles equity, corporate governance, and fiduciary claims. Texas covers complex commercial contracts & governance.' },
      { title: 'Statutory Dollar Gates', desc: 'Texas Business Courts require a minimum amount in controversy ($5M for governance/commercial, $10M for public companies).' },
      { title: 'Jury Trial Rights', desc: 'Delaware Chancery is strictly bench trials (judges only). Texas Business Courts preserve constitutional rights to civil jury trials.' },
      { title: 'Appellate Review', desc: 'Delaware appeals go directly to the Delaware Supreme Court. Texas established a dedicated 15th Court of Appeals for business cases.' },
      { title: 'Appointment Tenure', desc: 'Delaware chancellors serve 12-year terms. Texas Business Court judges are appointed by the Governor for renewable two-year terms.' },
      { title: 'Forum Selection Enforceability', desc: 'Parties can contractually select Texas Business Court venue in commercial agreements exceeding statutory thresholds.' }
    ],
    stepsTitle: 'Selecting Governing Law & Venue in Commercial Contracts',
    stepsSub: 'Strategic evaluation framework for founders and general counsel',
    steps: [
      { title: 'Evaluate Dollar Stakes', desc: 'Assess whether dispute exposure routinely meets the Texas $5M+ or $10M+ jurisdictional minimums.' },
      { title: 'Jury vs Bench Preference', desc: 'Determine whether you prefer a seasoned jurist resolving equity disputes or preserve potential jury options.' },
      { title: 'Predictability of Precedent', desc: 'Weigh Delaware’s 200-year corporate common law canon against Texas’s emerging statutory business bench.' },
      { title: 'Draft Venue Clauses', desc: 'Draft precise forum selection and governing law clauses aligned with entity formation domicile.' }
    ],
    faq: [
      {
        question: 'When did the Texas Business Court begin operations?',
        answer: 'Created by Texas House Bill 19 (HB 19), the Texas Business Court system officially commenced operations on September 1, 2024, handling major business and corporate governance actions filed thereafter.'
      },
      {
        question: 'What is the minimum monetary threshold for Texas Business Courts?',
        answer: 'Jurisdiction generally requires an amount in controversy exceeding $5,000,000 for internal corporate governance, shareholder derivative suits, and fiduciary actions, or exceeding $10,000,000 for complex commercial transactions, IP disputes, and qualified business contracts.'
      },
      {
        question: 'Can you have a jury trial in the Texas Business Court?',
        answer: 'Yes. Unlike the Delaware Court of Chancery, where cases are heard exclusively by judges without juries, the Texas Constitution protects the right to a trial by jury in civil cases, so jury trials remain available upon demand.'
      },
      {
        question: 'What is the Texas 15th Court of Appeals?',
        answer: 'Texas created the Fifteenth Court of Appeals as a specialized statewide intermediate appellate court with exclusive jurisdiction over appeals arising from the Texas Business Courts and major state agency litigation.'
      },
      {
        question: 'Should a startup re-incorporate from Delaware to Texas for business courts?',
        answer: 'Most venture-backed startups remain Delaware C-Corps due to investor consensus, extensive corporate case law, and predictable DGCL interpretations. However, Texas-headquartered companies and privately held operating businesses increasingly designate Texas law and business courts.'
      }
    ],
    toc: [
      { label: '1. Quick answer', anchor: '1-the-quick-answer' },
      { label: '2. The Texas Business Court structure', anchor: '2-structure-and-launch-of-the-texas-business-court-system' },
      { label: '3. Jurisdictional thresholds', anchor: '3-jurisdictional-thresholds-5m-and-10m-gates' },
      { label: '4. Texas vs Delaware Chancery compared', anchor: '4-comparing-texas-business-court-with-delaware-chancery' },
      { label: '5. The 15th Court of Appeals', anchor: '5-appeals-the-fifteenth-court-of-appeals-role' },
      { label: '6. Choosing your dispute forum', anchor: '6-drafting-choice-of-law-and-venue-clauses' },
      { label: 'Where DoubleCheck fits', anchor: 'where-doublecheck-fits' },
      { label: 'FAQ', anchor: 'faq' }
    ]
  },
  {
    slug: 'florida-remote-employee-tax-nexus-small-business',
    title: 'Hiring Remote Workers in Florida: Corporate Tax & Nexus Guide',
    seoTitle: 'Florida Remote Worker Tax Nexus Guide for Business',
    description: 'Hiring a remote employee in Florida? Learn how physical presence triggers corporate tax nexus, reemployment tax registration, and sales tax compliance.',
    pubDate: 'Nov 20 2026',
    authorName: 'Patrick Moumiet',
    badge: 'FLORIDA TAX & EMPLOYMENT',
    gridTitle: 'Florida Remote Hiring Nexus Triggers',
    gridSub: 'State regulatory, payroll, and tax burdens initiated by one resident remote worker',
    gridItems: [
      { title: 'Physical Presence Nexus', desc: 'Under Florida law, a single remote employee working from home establishes physical presence nexus for corporate income tax.' },
      { title: 'Corporate Income Tax (5.5%)', desc: 'Out-of-state C-Corps must register with Florida Department of Revenue and file Form F-1120, apportioning income.' },
      { title: 'Reemployment Assistance Tax', desc: 'Employers must register for Florida reemployment tax with FDOR; initial rate is 2.7% on the first $7,000 of taxable wages.' },
      { title: 'Zero Personal State Income Tax', desc: 'Florida levies no individual personal income tax, so employers do not withhold state income tax from remote paychecks.' },
      { title: 'Workers’ Comp Coverage', desc: 'Non-construction businesses with 4 or more employees (including out-of-state workers) must secure Florida workers’ compensation.' },
      { title: 'Foreign Entity Qualification', desc: 'Operating businesses maintaining payroll and continuous business activities must file for Florida Foreign Qualification.' }
    ],
    stepsTitle: 'Onboarding a Florida Remote Worker Legally',
    stepsSub: 'Sequential state compliance checklist for out-of-state employers',
    steps: [
      { title: 'Foreign Qualify with Sunbiz', desc: 'Submit Application by Foreign Corporation for Authorization to Transact Business with Florida Division of Corporations.' },
      { title: 'Register with Florida DOR', desc: 'Complete Florida Business Tax Application online (Form DR-1) for reemployment tax and corporate tax accounts.' },
      { title: 'Update Workers’ Comp Policy', desc: 'Endorse workers’ compensation insurance to include Florida under policy coverage Part 3.A.' },
      { title: 'Report New Hire Within 20 Days', desc: 'Submit employee details to the Florida New Hire Reporting Center within 20 calendar days of employment.' }
    ],
    faq: [
      {
        question: 'Does hiring one remote worker in Florida trigger Florida corporate income tax?',
        answer: 'Yes. Under Florida Administrative Code Rule 12C-1.011, having an employee regularly performing services within Florida establishes physical nexus, requiring out-of-state C-corporations to file Florida Form F-1120, even if no tax is ultimately due after apportionment.'
      },
      {
        question: 'Does an out-of-state employer withhold state income tax for a Florida employee?',
        answer: 'No. Florida has no state personal income tax under its state constitution. Employers only withhold federal income tax, Social Security, and Medicare.'
      },
      {
        question: 'What is the Florida Reemployment Tax rate for new employers?',
        answer: 'The initial standard tax rate for new employers in Florida is 2.7% (0.0270) on the first $7,000 of wages paid to each employee during the calendar year, until an experience rating is earned.'
      },
      {
        question: 'Do remote employees count toward Florida workers’ compensation thresholds?',
        answer: 'Yes. In Florida, non-construction employers with four or more employees (full-time or part-time, counted across the company or within Florida) must carry workers’ compensation insurance covering the Florida employee.'
      },
      {
        question: 'Do LLCs pay Florida corporate income tax for remote workers?',
        answer: 'Single-member LLCs and multi-member LLCs treated as partnerships for federal tax purposes generally do not pay Florida corporate income tax. However, LLCs taxed as C-corporations are subject to the 5.5% tax.'
      }
    ],
    toc: [
      { label: '1. Quick answer', anchor: '1-the-quick-answer' },
      { label: '2. Physical presence nexus', anchor: '2-physical-presence-nexus-under-florida-law' },
      { label: '3. Corporate income tax filing (Form F-1120)', anchor: '3-florida-corporate-income-tax-filing-and-apportionment' },
      { label: '4. Reemployment tax and payroll', anchor: '4-reemployment-tax-registration-and-wage-reporting' },
      { label: '5. Workers’ comp and new hire reporting', anchor: '5-workers-compensation-and-new-hire-reporting-rules' },
      { label: '6. Sunbiz foreign qualification', anchor: '6-when-foreign-qualification-with-sunbiz-is-required' },
      { label: 'Where DoubleCheck fits', anchor: 'where-doublecheck-fits' },
      { label: 'FAQ', anchor: 'faq' }
    ]
  },
  {
    slug: 'illinois-bipa-biometric-privacy-small-business-compliance',
    title: 'Illinois BIPA Compliance: Small Business Biometric Privacy Rules',
    seoTitle: 'Illinois BIPA Compliance Guide for Small Business',
    description: 'Comply with the Illinois Biometric Information Privacy Act (BIPA). Understand the 2024 statutory per-person damages reform, consent forms, and time clocks.',
    pubDate: 'Nov 20 2026',
    authorName: 'Patrick Moumiet',
    badge: 'DATA PRIVACY & COMPLIANCE',
    gridTitle: 'Core Pillars of Illinois BIPA (740 ILCS 14/)',
    gridSub: 'Statutory requirements for businesses collecting fingerprints, facial scans, or voiceprints',
    gridItems: [
      { title: 'Written Policy & Schedule', desc: 'Must develop and publish a publicly available written policy setting a retention schedule and destruction guidelines.' },
      { title: 'Advance Written Consent', desc: 'Must inform the subject in writing of collection purpose and term, and receive a signed written release prior to scan.' },
      { title: 'Absolute Sale Prohibition', desc: 'Strict statutory ban on selling, leasing, trading, or otherwise profiting from biometric identifiers or data.' },
      { title: 'Restricted Disclosure', desc: 'Cannot disclose or disseminate biometric data without individual consent or valid legal subpoena.' },
      { title: 'Reasonable Care Storage', desc: 'Must store, transmit, and protect biometric data with the same or higher standard of care as confidential business data.' },
      { title: '2024 Damages Reform (SB 2979)', desc: 'Damages capped at one recovery per person per violation method rather than multiplying per fingerprint scan.' }
    ],
    stepsTitle: 'Deploying Biometric Systems in Illinois Compliantly',
    stepsSub: 'Four compliance steps before turning on biometric time clocks or access scanners',
    steps: [
      { title: 'Publish Retention Policy', desc: 'Post written retention and destruction protocol specifying permanent deletion within 3 years or upon departure.' },
      { title: 'Obtain Signed Releases', desc: 'Execute written BIPA disclosures and consent releases from every employee or visitor before scanning.' },
      { title: 'Audit Vendor Architecture', desc: 'Confirm time clock or software vendor does not sell, transfer, or store unencrypted biometric identifiers.' },
      { title: 'Maintain Signed Logs', desc: 'Store physical and electronic consent records permanently to rebut private right of action class claims.' }
    ],
    faq: [
      {
        question: 'What constitutes a biometric identifier under Illinois BIPA?',
        answer: 'Under 740 ILCS 14/10, biometric identifiers include retina or iris scans, fingerprints, voiceprints, or scans of hand or face geometry. It excludes writing samples, written signatures, photographs, and demographic data.'
      },
      {
        question: 'What changed with the 2024 Illinois BIPA amendment (SB 2979)?',
        answer: 'Governor Pritzker signed SB 2979 into law in August 2024, overruling the Cothron v. White Castle per-scan liability rule. Plaintiffs are now limited to a single statutory damage recovery per person per violating method or practice ($1,000 negligent, $5,000 reckless), rather than racking up damages on every punch of a time clock.'
      },
      {
        question: 'Can employers require biometric time clocks as a condition of employment?',
        answer: 'Employers can utilize biometric systems, but they must provide proper notice and obtain an executed written release. If an employee refuses, best practice is to offer an alternative non-biometric tracking method (such as badge or PIN) to avoid constructive discharge or retaliation claims.'
      },
      {
        question: 'What are the statutory damages under BIPA?',
        answer: 'Liquidated damages are $1,000 for each negligent violation and $5,000 for each intentional or reckless violation, plus reasonable attorney fees and expert witness costs.'
      },
      {
        question: 'Does BIPA apply to out-of-state companies?',
        answer: 'Yes. If your company collects, captures, purchases, receives through trade, or obtains biometric data from individuals located in Illinois, BIPA applies regardless of your corporate domicile.'
      }
    ],
    toc: [
      { label: '1. Quick answer', anchor: '1-the-quick-answer' },
      { label: '2. What BIPA regulates', anchor: '2-what-biometric-data-bipa-regulates' },
      { label: '3. The five statutory requirements', anchor: '3-the-five-mandatory-statutory-compliance-pillars' },
      { label: '4. The 2024 per-person damages reform', anchor: '4-the-2024-legislative-reform-sb-2979-explained' },
      { label: '5. Biometric time clocks in workplaces', anchor: '5-workplace-time-clocks-and-security-access-scanners' },
      { label: '6. Practical compliance steps', anchor: '6-procedural-implementation-guide-for-employers' },
      { label: 'Where DoubleCheck fits', anchor: 'where-doublecheck-fits' },
      { label: 'FAQ', anchor: 'faq' }
    ]
  },
  {
    slug: 'washington-state-non-compete-salary-thresholds-enforceability',
    title: 'Washington State Non-Compete Laws: 2026 Salary Thresholds',
    seoTitle: 'Washington Non-Compete Salary Thresholds & Rules 2026',
    description: 'Understand Washington State non-compete enforceability under RCW 49.62. Review 2026 earnings thresholds, 18-month duration caps, and mandatory $5,000 penalties.',
    pubDate: 'Nov 20 2026',
    authorName: 'Patrick Moumiet',
    badge: 'WASHINGTON EMPLOYMENT',
    gridTitle: 'Washington Non-Compete Law (RCW 49.62) Key Rules',
    gridSub: 'Statutory requirements governing employee and contractor restrictive covenants',
    gridItems: [
      { title: '2026 Employee Threshold', desc: 'Non-competes are void against employees earning less than the inflation-adjusted threshold (exceeding $120,000+ in 2026).' },
      { title: 'Independent Contractor Cap', desc: 'Contractor non-competes are void unless annual earnings from the hiring party exceed $300,000+ (inflation-adjusted).' },
      { title: 'Mandatory Advance Notice', desc: 'Terms must be disclosed in writing no later than the time of formal offer acceptance; mid-employment covenants require new consideration.' },
      { title: '18-Month Rebuttable Cap', desc: 'Agreements exceeding 18 months are presumed unreasonable and unenforceable unless clear and convincing evidence proves necessity.' },
      { title: 'Mandatory $5,000 Statutory Fine', desc: 'An employer who attempts to enforce an unlawful non-compete must pay statutory damages of $5,000 plus attorney fees.' },
      { title: 'Garden Leave for Layoffs', desc: 'If an employee is laid off, the non-compete is void unless the employer pays full compensation during the entire restriction period.' }
    ],
    stepsTitle: 'Auditing Washington Restrictive Covenants',
    stepsSub: 'Procedural steps to ensure non-compete enforceability without statutory liability',
    steps: [
      { title: 'Check W-2 Earnings Gate', desc: 'Audit whether annualized box 1 earnings surpass the L&I published threshold for the calendar year.' },
      { title: 'Verify Offer Timing', desc: 'Ensure covenant terms were provided prior to or alongside the initial formal written offer letter.' },
      { title: 'Review Restriction Duration', desc: 'Limit post-employment geographic and competitive restrictions to 18 months or fewer.' },
      { title: 'Carve Out Non-Solicitation', desc: 'Separate non-solicitation and confidentiality provisions, which are exempt from non-compete salary limits.' }
    ],
    faq: [
      {
        question: 'What are the Washington State non-compete salary thresholds?',
        answer: 'Under RCW 49.62.020 and RCW 49.62.030, the Washington Department of Labor & Industries adjusts earnings thresholds annually for inflation. For 2026, employee thresholds exceed $120,000 and independent contractor thresholds exceed $300,000.'
      },
      {
        question: 'What penalty does an employer face for an overbroad non-compete in Washington?',
        answer: 'Under RCW 49.62.080, if a court or arbitrator finds a non-compete agreement violates the statute, the employer must pay the employee statutory damages of $5,000 or actual damages, whichever is greater, plus reasonable attorney fees and costs.'
      },
      {
        question: 'Are non-solicitation agreements subject to the salary thresholds?',
        answer: 'No. RCW 49.62.010 explicitly excludes non-solicitation agreements (both customer non-solicitation and employee non-solicitation) and confidentiality agreements from the statutory non-compete definition.'
      },
      {
        question: 'What happens to a non-compete if an employee is laid off in Washington?',
        answer: 'If an employee is terminated due to a layoff, the non-compete is unenforceable unless the employer pays the employee compensation equivalent to their base salary for the entire enforcement period (garden leave), minus any earnings from subsequent employment.'
      },
      {
        question: 'Can employers use out-of-state choice of law to bypass Washington rules?',
        answer: 'No. RCW 49.62.050 renders void any clause that requires a Washington-based employee or contractor to adjudicate a dispute outside of Washington or deprives them of the protections of Washington law.'
      }
    ],
    toc: [
      { label: '1. Quick answer', anchor: '1-the-quick-answer' },
      { label: '2. The 2026 earnings thresholds', anchor: '2-statutory-earnings-thresholds-for-employees-and-contractors' },
      { label: '3. Disclosure timing and new consideration', anchor: '3-offer-timing-and-independent-consideration-rules' },
      { label: '4. The 18-month duration cap', anchor: '4-duration-limits-and-the-18-month-presumption' },
      { label: '5. Layoffs, garden leave, and penalties', anchor: '5-layoff-rules-and-the-mandatory-5000-statutory-penalty' },
      { label: '6. Customer non-solicitation carve-outs', anchor: '6-non-solicitation-and-confidentiality-exceptions' },
      { label: 'Where DoubleCheck fits', anchor: 'where-doublecheck-fits' },
      { label: 'FAQ', anchor: 'faq' }
    ]
  },
  {
    slug: 'trademark-office-action-section-2d-likelihood-of-confusion-response',
    title: 'How to Respond to a Section 2(d) Likelihood of Confusion Refusal',
    seoTitle: 'Respond to Section 2(d) Likelihood of Confusion Refusal',
    description: 'Overcome a USPTO Section 2(d) trademark refusal. Analyze the DuPont factors, draft legal arguments, seek consent agreements, and avoid abandonment.',
    pubDate: 'Nov 20 2026',
    authorName: 'Patrick Moumiet',
    badge: 'TRADEMARK PROSECUTION',
    gridTitle: 'Key DuPont Factors in Section 2(d) Refusals',
    gridSub: 'The principal legal standards applied by USPTO Examining Attorneys',
    gridItems: [
      { title: 'Similarity of Marks', desc: 'Evaluating marks in entireties for similarities in appearance, sound, connotation, and commercial impression.' },
      { title: 'Relatedness of Goods/Services', desc: 'Examining whether consumers would mistakenly believe goods or services originate from the same commercial source.' },
      { title: 'Trade Channels', desc: 'Analyzing the established, likely, or regular trade channels through which goods or services reach market.' },
      { title: 'Sophistication of Purchasers', desc: 'Conditions under which sales are made (impulse buying vs careful evaluation by sophisticated professionals).' },
      { title: 'Number & Nature of Similar Marks', desc: 'Evidence of third-party registrations showing common use in the industry, weakening the cited mark.' },
      { title: 'Nature of Actual Confusion', desc: 'Absence of actual confusion over extensive concurrent commercial use without conflict.' }
    ],
    stepsTitle: 'Roadmap for Overcoming a 2(d) Refusal',
    stepsSub: 'Four tactical pathways to secure USPTO trademark registration approval',
    steps: [
      { title: 'Dissect the DuPont Citations', desc: 'Review the cited registration, specimens of use, and USPTO Trademark Trial and Appeal Board precedent.' },
      { title: 'Amend Identification of Goods', desc: 'Narrow or carve out overlapping classes and goods to eliminate relatedness with the cited mark.' },
      { title: 'Draft Substantive Brief', desc: 'Argue distinct commercial impression, purchaser care, different channels, and third-party crowding.' },
      { title: 'Negotiate Consent Agreement', desc: 'Obtain a formal trademark coexistence and consent agreement from the registrant if viable.' }
    ],
    faq: [
      {
        question: 'What is a Section 2(d) trademark refusal?',
        answer: 'Under 15 U.S.C. § 1052(d) of the Lanham Act, a trademark examining attorney refuses registration if the proposed mark so resembles a previously registered mark as to be likely to cause confusion, mistake, or deception among consumers.'
      },
      {
        question: 'How long do I have to respond to an Office Action?',
        answer: 'Applicants have three months from the issue date to respond to an office action. A single three-month extension can be requested for an additional fee, bringing the absolute deadline to six months. Missing the deadline results in abandonment.'
      },
      {
        question: 'What are the DuPont factors?',
        answer: 'Established in In re E. I. du Pont de Nemours & Co. (C.C.P.A. 1973), the 13 DuPont factors are the legal criteria used by the USPTO and courts to evaluate likelihood of confusion, with mark similarity and goods relatedness being the most critical.'
      },
      {
        question: 'Does changing one word or spelling avoid a Section 2(d) refusal?',
        answer: 'Not necessarily. Examining attorneys compare marks based on phonetic equivalence, visual resemblance, and commercial impression. Minor spelling variations or adding generic descriptive terms often fail to eliminate confusion.'
      },
      {
        question: 'What is a trademark coexistence agreement?',
        answer: 'A formal agreement between the applicant and the owner of the cited registration where both parties consent to registration and agree to operational restrictions (differing packaging, channels, or geographic scopes) to prevent actual consumer confusion.'
      }
    ],
    toc: [
      { label: '1. Quick answer', anchor: '1-the-quick-answer' },
      { label: '2. Understanding Section 2(d)', anchor: '2-understanding-the-section-2d-likelihood-of-confusion-refusal' },
      { label: '3. The core DuPont factors', anchor: '3-the-dupont-factors-that-decide-confusion' },
      { label: '4. Amending your goods and services', anchor: '4-narrowing-and-amending-identification-of-goods' },
      { label: '5. Substantive legal arguments', anchor: '5-drafting-persuasive-legal-arguments-to-overcome-refusal' },
      { label: '6. Consent and coexistence agreements', anchor: '6-consent-agreements-and-deadlines-to-respond' },
      { label: 'Where DoubleCheck fits', anchor: 'where-doublecheck-fits' },
      { label: 'FAQ', anchor: 'faq' }
    ]
  },
  {
    slug: 'section-83b-election-certified-mail-proof-irs-filing',
    title: 'Filing a Section 83(b) Election: Certified Mail Proof Checklist',
    seoTitle: 'Section 83(b) Election Certified Mail Proof Checklist',
    description: 'Ensure your Section 83(b) election is bulletproof. The unbending 30-day postmark rule, certified mail return receipt, spousal signatures, and VC due diligence.',
    pubDate: 'Nov 20 2026',
    authorName: 'Patrick Moumiet',
    badge: 'STARTUP TAXATION',
    gridTitle: 'Critical Section 83(b) Filing Requirements',
    gridSub: 'Federal tax compliance mandates under 26 U.S.C. § 83(b) and Treas. Reg. § 1.83-2',
    gridItems: [
      { title: 'Strict 30-Day Deadline', desc: 'Must be filed no later than 30 calendar days after the date stock is transferred; no extensions or late relief exist.' },
      { title: 'USPS Certified Mail Proof', desc: 'Internal Revenue Code § 7502 (Timely Mailing as Timely Filing) requires USPS Certified Mail with Return Receipt.' },
      { title: 'Copy to the Corporation', desc: 'A signed copy of the completed 83(b) election must be delivered to the company secretary and archived.' },
      { title: 'Spousal Consent Signature', desc: 'In community property states (e.g., CA, TX, WA), spousal consent is required to transfer community interests.' },
      { title: 'Fair Market Value Proof', desc: 'Must disclose the property description, restrictions, fair market value, and consideration paid per share.' },
      { title: 'Financing Due Diligence', desc: 'Venture capital investors will demand stamped proof of timely filing before funding any Series Seed or Series A round.' }
    ],
    stepsTitle: 'Mailing Your 83(b) Election Step-by-Step',
    stepsSub: 'The exact physical filing workflow to establish irrefutable legal proof',
    steps: [
      { title: 'Sign Triplicate Originals', desc: 'Sign three original paper election statements within 30 days of executing the stock purchase agreement.' },
      { title: 'Go to USPS Retail Counter', desc: 'Ship to your designated IRS Service Center using USPS Certified Mail with Return Receipt Requested.' },
      { title: 'Obtain Postmarked PS 3800', desc: 'Have the postal clerk hand-stamp the Certified Mail Receipt (PS Form 3800) with the official date.' },
      { title: 'Archive Green Card & Stamp', desc: 'Permanently file the postmarked receipt, returned green card (PS Form 3811), and IRS acknowledgment copy.' }
    ],
    faq: [
      {
        question: 'Can the IRS forgive a late Section 83(b) election?',
        answer: 'No. The IRS and federal courts (including the U.S. Tax Court) have consistently held that the statutory 30-day deadline under IRC § 83(b)(2) is mandatory and inflexible. Neither the IRS nor equitable doctrines can grant late filing relief.'
      },
      {
        question: 'Why is certified mail necessary for an 83(b) election?',
        answer: 'Under IRC § 7502, registered or certified mail is statutory prima facie evidence of delivery and timely postmark. Private couriers (FedEx/UPS) only qualify if using approved services, while ordinary first-class mail offers zero legal proof if lost by the IRS.'
      },
      {
        question: 'Do I still need to attach an 83(b) election to my annual tax return?',
        answer: 'No. IRS regulations (TD 9779) eliminated the requirement to attach a copy of the Section 83(b) election to the individual’s annual personal income tax return (Form 1040), but filing with the IRS Service Center remains mandatory.'
      },
      {
        question: 'What happens if a founder fails to file an 83(b) election?',
        answer: 'As founder shares vest over time, the fair market value of the vesting shares is taxed as ordinary income at each vesting event rather than at capital gains rates upon eventual liquidation, potentially creating massive phantom tax liabilities.'
      },
      {
        question: 'Where do I mail my Section 83(b) election?',
        answer: 'Mail to the IRS Service Center where you file your personal individual tax return, determined by your state of residence.'
      }
    ],
    toc: [
      { label: '1. Quick answer', anchor: '1-the-quick-answer' },
      { label: '2. The unbending 30-day rule', anchor: '2-the-unbending-30-day-statutory-deadline' },
      { label: '3. Certified mail and IRC § 7502', anchor: '3-usps-certified-mail-and-irc-7502-proof-of-filing' },
      { label: '4. Essential election document contents', anchor: '4-what-must-be-included-in-the-83b-election-statement' },
      { label: '5. Spousal consent and corporate copies', anchor: '5-spousal-consent-and-corporate-record-retention' },
      { label: '6. VC due diligence and disaster recovery', anchor: '6-venture-capital-due-diligence-and-lost-filing-remedies' },
      { label: 'Where DoubleCheck fits', anchor: 'where-doublecheck-fits' },
      { label: 'FAQ', anchor: 'faq' }
    ]
  },
  {
    slug: 'safe-harbor-409a-valuation-startup-stock-options-irs-rules',
    title: 'Safe Harbor 409A Valuations: IRS Rules for Startup Stock Options',
    seoTitle: 'Safe Harbor 409A Valuation Startup Stock Option Rules',
    description: 'Protect startup stock option grants from punitive IRS Section 409A penalties. Understand the three safe harbor methodologies, 12-month validity, and triggers.',
    pubDate: 'Nov 20 2026',
    authorName: 'Patrick Moumiet',
    badge: 'STARTUP EQUITY & TAX',
    gridTitle: 'IRS Section 409A Safe Harbor Principles',
    gridSub: 'Statutory valuation rules under 26 U.S.C. § 409A and Treas. Reg. § 1.409A-1(b)(5)',
    gridItems: [
      { title: 'Strike Price Requirement', desc: 'Stock options must be granted with an exercise price equal to or greater than Fair Market Value (FMV) on grant date.' },
      { title: 'Independent Appraisal Harbor', desc: 'Valuation conducted by a qualified independent appraiser enjoys a legal presumption of reasonableness by the IRS.' },
      { title: '12-Month Expiration Window', desc: 'A 409A valuation remains valid for a maximum of 12 months, or until a material financing/operational event occurs.' },
      { title: 'Material Event Trigger', desc: 'New equity financing rounds, secondary sales, term sheets, or major acquisitions immediately invalidate current 409A reports.' },
      { title: 'Punitive Section 409A Penalties', desc: 'Discounted options trigger immediate taxation at vesting, a 20% federal excise penalty, and accrued interest on employees.' },
      { title: 'Board Approval Timing', desc: 'Company board of directors must formally approve stock option grants while the safe harbor valuation is actively valid.' }
    ],
    stepsTitle: 'Managing 409A Valuation Cycles Compliantly',
    stepsSub: 'Four steps to maintain continuous IRS safe harbor protection for option grants',
    steps: [
      { title: 'Retain Independent Appraiser', desc: 'Engage a certified independent appraisal firm to conduct an asset, market, or income-based appraisal.' },
      { title: 'Provide Audited Cap Table', desc: 'Deliver fully reconciled cap table, financial statements, revenue projections, and debt documents.' },
      { title: 'Adopt Formal Board Consent', desc: 'Ensure Board of Directors reviews valuation methodology and formally adopts fair market value.' },
      { title: 'Monitor Material Events', desc: 'Track new funding term sheets or acquisitions that accelerate the 12-month expiration calendar.' }
    ],
    faq: [
      {
        question: 'What is a 409A valuation for a startup?',
        answer: 'A 409A valuation is an independent appraisal of the fair market value (FMV) of a private company’s common stock, established under Section 409A of the Internal Revenue Code to ensure employee stock options are not granted at a discount.'
      },
      {
        question: 'How long does a 409A valuation remain valid?',
        answer: 'Under Treas. Reg. § 1.409A-1(b)(5)(iv)(B), a safe harbor 409A valuation is valid for up to 12 months, provided no material event occurs that would affect the company’s enterprise or equity value.'
      },
      {
        question: 'What happens if a startup grants options below fair market value?',
        answer: 'If the IRS determines option exercise prices were set below FMV, the option holder (employee) faces immediate income taxation upon vesting, a 20% federal penalty tax, state penalty taxes (e.g., California adds 5%), and compounding penalty interest.'
      },
      {
        question: 'What qualifies as a material event triggering a new 409A valuation?',
        answer: 'Material events include executing a term sheet or closing a new round of equity financing, issuing convertible debt, experiencing dramatic revenue shifts, or engaging in merger/acquisition transactions.'
      },
      {
        question: 'Can founders value their own stock options internally?',
        answer: 'While early-stage illiquid startups may technically use internal valuations under very narrow non-expert safe harbors, venture-backed companies universally engage independent third-party appraisers to establish an IRS presumption of reasonableness.'
      }
    ],
    toc: [
      { label: '1. Quick answer', anchor: '1-the-quick-answer' },
      { label: '2. The purpose of Section 409A', anchor: '2-what-section-409a-regulates-and-why-fair-market-value-matters' },
      { label: '3. The three IRS safe harbor methods', anchor: '3-the-three-irs-safe-harbor-valuation-methodologies' },
      { label: '4. The 12-month validity window and material events', anchor: '4-the-12-month-expiration-rule-and-material-event-triggers' },
      { label: '5. Punitive penalties on option holders', anchor: '5-the-20-percent-excise-tax-and-employee-penalties' },
      { label: '6. Board approval and option pool governance', anchor: '6-board-of-directors-governance-and-grant-workflows' },
      { label: 'Where DoubleCheck fits', anchor: 'where-doublecheck-fits' },
      { label: 'FAQ', anchor: 'faq' }
    ]
  },
  {
    slug: 'corporate-transparency-act-finsea-compliance-startups-2026',
    title: 'Corporate Transparency Act in 2026: Beneficial Ownership Rules',
    seoTitle: 'Corporate Transparency Act 2026 BOI Reporting Rules',
    description: 'Navigate the Corporate Transparency Act (CTA) in 2026. Beneficial Ownership Information (BOI) filing deadlines, FinCEN exemptions, and updated ownership reports.',
    pubDate: 'Nov 20 2026',
    authorName: 'Patrick Moumiet',
    badge: 'FEDERAL COMPLIANCE',
    gridTitle: 'Corporate Transparency Act (CTA) Core Standards',
    gridSub: 'FinCEN beneficial ownership reporting requirements for reporting companies',
    gridItems: [
      { title: 'Reporting Company Definition', desc: 'Corporations, LLCs, and entities created by filing documents with a Secretary of State or Indian Tribe.' },
      { title: 'Beneficial Owner Criteria', desc: 'Any individual who exercises substantial control OR owns/controls at least 25% of ownership interests.' },
      { title: '30-Day Update Obligation', desc: 'Any change in beneficial ownership or reporting information must be filed with FinCEN within 30 calendar days.' },
      { title: '23 Statutory Exemptions', desc: 'Exemptions include large operating companies (20+ FTEs & $5M revenue), banks, broker-dealers, and public utilities.' },
      { title: 'Company Applicant Rules', desc: 'Entities formed on or after Jan 1, 2024 must identify the direct filer and the person directing the filing.' },
      { title: 'Civil & Criminal Penalties', desc: 'Willful failure to report carries civil penalties of up to $591/day and criminal fines up to $10,000 and 2 years prison.' }
    ],
    stepsTitle: 'Filing Your FinCEN BOI Report Compliantly',
    stepsSub: 'Four-step procedural filing cycle for new and existing reporting companies',
    steps: [
      { title: 'Identify All Beneficial Owners', desc: 'Analyze operating agreements and cap tables to identify 25%+ equity holders and C-suite control persons.' },
      { title: 'Gather Identity Documents', desc: 'Collect legal names, residential addresses, dates of birth, and non-expired passport or driver’s license images.' },
      { title: 'Submit via FinCEN BOI E-Filing', desc: 'File electronic Beneficial Ownership Information Report (BOIR) directly through FinCEN’s secure portal.' },
      { title: 'Establish 30-Day Update Monitor', desc: 'Implement internal governance triggers to report address, passport, or ownership changes within 30 days.' }
    ],
    faq: [
      {
        question: 'Who is required to file a BOI report under the Corporate Transparency Act?',
        answer: 'All domestic corporations, LLCs, and statutory entities formed by filing with a U.S. Secretary of State, as well as foreign entities registered to do business in the U.S., must file unless they qualify for one of 23 specific statutory exemptions.'
      },
      {
        question: 'What is the Large Operating Company exemption?',
        answer: 'An entity qualifies as an exempt Large Operating Company if it employs more than 20 full-time employees in the United States, maintains an operating physical presence at an office in the U.S., and reported more than $5,000,000 in gross receipts on its prior federal tax return.'
      },
      {
        question: 'Who qualifies as exercising "substantial control" over an entity?',
        answer: 'Under 31 CFR 1010.380(d)(1), individuals exercising substantial control include senior officers (President, CEO, COO, General Counsel), individuals with appointment/removal authority over officers or directors, and important decision-makers.'
      },
      {
        question: 'How quickly must changes to beneficial ownership information be reported?',
        answer: 'Reporting companies must file an updated BOIR with FinCEN within 30 calendar days of any change in the information reported concerning the company or its beneficial owners, including changes of address or updated driver’s license numbers.'
      },
      {
        question: 'Does the CTA apply to single-member LLCs?',
        answer: 'Yes. Unless an exemption applies, single-member LLCs and founder-owned startups are primary targets of the Corporate Transparency Act and must report their beneficial owners.'
      }
    ],
    toc: [
      { label: '1. Quick answer', anchor: '1-the-quick-answer' },
      { label: '2. Reporting companies and who must file', anchor: '2-who-is-a-reporting-company-under-fincen-regulations' },
      { label: '3. Identifying 25% owners and substantial control', anchor: '3-identifying-beneficial-owners-and-substantial-control' },
      { label: '4. The 23 statutory exemptions', anchor: '4-the-23-exemptions-large-operating-company-rules' },
      { label: '5. The 30-day change filing requirement', anchor: '5-the-mandatory-30-day-update-and-correction-rules' },
      { label: '6. Civil penalties and compliance workflow', anchor: '6-penalties-for-non-compliance-and-corporate-governance' },
      { label: 'Where DoubleCheck fits', anchor: 'where-doublecheck-fits' },
      { label: 'FAQ', anchor: 'faq' }
    ]
  }
];

async function run() {
  console.log(`Starting generation of graphics for ${articles.length} articles...`);
  for (const art of articles) {
    const baseDir = path.join(process.cwd(), 'public/images', art.slug);
    console.log(`Generating images for ${art.slug}...`);
    
    // Grid image
    await createGridGraphic(
      path.join(baseDir, 'grid.webp'),
      art.badge,
      art.gridTitle,
      art.gridSub,
      art.gridItems
    );

    // Steps image
    await createStepsGraphic(
      path.join(baseDir, 'steps.webp'),
      art.badge,
      art.stepsTitle,
      art.stepsSub,
      art.steps
    );
  }
  console.log('All graphics successfully generated!');
}

run().catch(err => {
  console.error('Error generating graphics:', err);
  process.exit(1);
});
