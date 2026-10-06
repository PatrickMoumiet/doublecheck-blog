---
title: 'What California SB 574 Can Mean for AI-Native Law Firms'
description: 'SB 574 ties the attorney confidentiality duty to who can reach an AI input, not how long a vendor retains it — what that means for AI-native firms, and four questions to ask any AI vendor before January 1.'
pubDate: 'Oct 5 2026'
authorName: 'Daishi Miguel-Tanaka'
toc:
  - label: 'SB 574 Makes Vendor Access a Statutory Question'
    anchor: 'sb-574-makes-vendor-access-a-statutory-question'
  - label: 'Only the Confidentiality and Verification Duties Reach Transactional Work'
    anchor: 'only-the-confidentiality-and-verification-duties-reach-transactional-work'
  - label: 'The Statute Tests Access to Inputs for Every Generative AI System'
    anchor: 'the-statute-tests-access-to-inputs-for-every-generative-ai-system'
  - label: 'Retention Length Is Not the Statutory Test'
    anchor: 'retention-length-is-not-the-statutory-test'
  - label: 'Provider Staff Access Is the Open Question'
    anchor: 'provider-staff-access-is-the-open-question'
  - label: 'Undefined Delegation Compounds the Problem for AI-Native Firms'
    anchor: 'undefined-delegation-compounds-the-problem-for-ai-native-firms'
  - label: 'Standard Enterprise Terms May Already Satisfy the Statute'
    anchor: 'standard-enterprise-terms-may-already-satisfy-the-statute'
  - label: 'Firms Can Answer the Access Test by Contract and Documented Authorization'
    anchor: 'firms-can-answer-the-access-test-by-contract-and-documented-authorization'
  - label: 'SB 574 Settles the Access Test and Leaves Provider Staff Open'
    anchor: 'sb-574-settles-the-access-test-and-leaves-provider-staff-open'
  - label: 'References'
    anchor: 'references'
---

*Status as of October 5, 2026. This post provides general information about a new California statute and does not constitute legal advice.*

AI-native law firms, which build their legal services around generative AI models and not around a traditional staffing model, have risen in popularity, and California-based versions of these firms now face a new statute that reaches the core of how they work. Consider such a firm that builds its drafting product on a frontier model (one of the largest general-purpose models, offered by a provider such as OpenAI or Anthropic) and signs the provider's business terms, setting retention to 30 days or to zero, which means the provider keeps prompts and outputs for 30 days or keeps none beyond the narrow carve-outs its terms describe. An attorney at the firm uploads a client's draft agreement, confident that the retention setting answers the confidentiality question. California Senate Bill 574, signed on September 30, 2026, asks a different question.

## SB 574 Makes Vendor Access a Statutory Question

The statute does not ask how long a provider keeps an attorney's input, and it does not ask whether the model is open or closed, large or small. It asks who can reach the input. A firm that runs on a model provider cannot answer that question from its own records, because the provider's staff and the provider's own vendors (known as subprocessors, the companies that handle data on the provider's behalf) sit outside the firm's walls.

In this post you will learn which parts of SB 574 reach transactional work, how the confidentiality test in Business and Professions Code section 6068.1(a)(3)(A) operates for every generative AI system, why retention length does not decide the question, and where the statute leaves provider staff access unresolved. The post takes the position that the statute turns on who can reach an input, that firms can address the open question through contract and documented attorney authorization, and that no authority yet confirms that standard enterprise terms satisfy the test. It closes with four questions for any AI vendor.

Now that the question is framed, the first task is to separate the provisions that matter to a transactional firm from the provisions that matter only to litigators.

![SB 574: the access test for AI-native law firms. An attorney's input passes through the firm's app to the AI model provider, where authorized access covers what the service needs — but provider staff and subprocessors sit in a zone of potentially unresolved third-party access that the statute leaves open.](/images/sb-574/access-test-flow.webp)

## Only the Confidentiality and Verification Duties Reach Transactional Work

Section 6068.1 governs an attorney "who uses generative artificial intelligence to assist in the practice of law," a phrase that covers contract review and advisory work as fully as it covers litigation.\[1\] Two provisions reach only court work. The disclosure duty in subdivision (a)(3)(C) applies to documents that the attorney submits to a court, and the amendment to Code of Civil Procedure section 128.7 bars any citation that the responsible attorney has not personally verified in a paper filed in any court.\[1\] A firm that files no papers faces neither provision.

The remaining duties apply to every matter. An attorney may not delegate the practice of law to generative AI.\[1\] An attorney also must take reasonable steps to verify AI output and to correct errors in "any material used by the attorney," and must observe the access limit on confidential and other nonpublic information discussed below.\[1\] Harris Beach Murtha reads the phrase "any material used by the attorney" to reach client advice and other work product as well as court filings.\[2\] The Legislative Counsel's digest adds that existing law already requires attorneys to maintain client confidences strictly, so the access limit builds on a duty that attorneys already carry.\[1\]

## The Statute Tests Access to Inputs for Every Generative AI System

The statute defines generative AI by function, as an artificial intelligence system that can generate derived synthetic content emulating the structure and characteristics of its training data.\[1\] The definition says nothing about license, size, host, or vendor. A closed frontier model and a self-hosted open-weight model (one whose trained parameters the firm downloads and runs on its own servers) both fall inside it, and a legal-specific product built on either falls inside as well.

The operative duty then attaches to the system regardless of model type. Subdivision (a)(3)(A) forbids an attorney from entering confidential and other nonpublic information into a system unless access to that input stays restricted to the attorney and to persons the attorney authorizes who owe obligations to protect its confidentiality.\[1\] Morgan Lewis observes that the restriction does not turn on whether a lawyer uses a "public" or "enterprise" product but on who can reach what the lawyer enters.\[3\] The text also does not confine the duty to client information, so it reaches the firm's own nonpublic material.\[1\]

A firm that hosts an open-weight model on infrastructure it controls can list the people with access from its own records, and that arrangement makes the test easier to satisfy without exempting the firm from it. A firm that calls a provider's model must instead rely on the provider's documentation and contract, which brings the next question into view: whether the length of the provider's retention changes the analysis.

## Retention Length Is Not the Statutory Test

The confidentiality duty never mentions retention, the training of models on inputs, or opt-outs.\[1\] Retention matters only through access, because a longer retention window gives more people more occasions to reach the data. Provider documentation shows how uneven the windows are, and as of October 5, 2026 it reads as follows. OpenAI states that it retains abuse monitoring logs, which may contain prompts and responses, for up to 30 days by default, unless the law requires longer retention or the protection of its services reasonably necessitates it, and that eligible customers can obtain zero data retention or modified abuse monitoring after approval.\[4\] Anthropic states that it deletes commercial API inputs and outputs within 30 days subject to four exceptions: services with longer retention under the customer's control, agreed arrangements such as zero data retention, retention needed to enforce its usage policy, and retention required by law.\[5\]

A zero-retention label also varies by model. Anthropic's help center states that for designated covered models it retains prompts and outputs for 30 days to support safety work, including for organizations that otherwise operate under zero data retention, subject to limited arrangements it describes.\[6\] A firm therefore cannot treat "zero retention" as a uniform fact about a provider, and it cannot treat any retention period as a statement about who has access. Both questions need an answer in the contract, which leads to the point where the statute gives the least guidance.

![Retention is not the same as access. Retention describes how long data is kept — 30 days, zero retention, or exceptions for security and legal requirements. Access describes who can reach it — provider employees, support staff, or subprocessors. SB 574's confidentiality test turns on access.](/images/sb-574/retention-vs-access.webp)

## Provider Staff Access Is the Open Question

Both providers document circumstances in which their staff can reach content that the customer sent. Anthropic states that by default no personnel can read retained conversations, but that human review can occur through a controlled access path when automated systems flag content, performed by a small set of approved reviewers whose access it logs.\[6\] OpenAI reserves the right to make particular models ineligible for zero retention for specific customers when reasonably necessary to investigate or prevent severe risk activity, in which case it may retain and review flagged content.\[4\]

The statutory question is whether such reviewers count as "persons authorized by the attorney under obligations to protect the confidentiality of the information."\[1\] The statute supports two possible readings, and no source reviewed adopts either. Under the first, the attorney's authorization of the provider through the contract extends to provider personnel whom the provider's own confidentiality commitments bind. Under the second, authorization must be specific enough that the attorney can identify who has access, so that reviewers whom a safety classifier summons, and whom the attorney never selected, fall outside it. Harris Beach Murtha cautions that if a vendor keeps inputs for abuse monitoring or allows human review, people outside the attorney's control may still have access, and it advises firms to read each tool's retention and review terms.\[2\] The sources reviewed for this post identify no court decision or State Bar guidance that resolves the point as of October 5, 2026.

Legal process adds a related exposure. Both providers state that they may retain data where the law requires.\[4\]\[5\] A compelled disclosure of that kind raises the confidentiality concern that existing law already addresses, and the statute does not say whether it affects the access analysis.

## Undefined Delegation Compounds the Problem for AI-Native Firms

Subdivision (a)(2) bars an attorney from delegating the practice of law to generative AI and leaves "delegate" undefined.\[1\] Morgan Lewis notes that the statute does not say where permissible assistance becomes prohibited delegation, and that it leaves open how the rule applies to autonomous or agentic tools.\[3\] Harris Beach Murtha reads the statute to permit an attorney to use AI for a first draft that the attorney then reviews and stands behind.\[2\]

An AI-native firm sits close to that line because its product runs the analysis through a model before an attorney sees the result. Such a firm should keep records that show what the attorney reviewed and changed. The architecture raises a second, narrower point. The access duty speaks of information "the attorney inputs," and the statute does not say whether an attorney inputs a document that the firm's own software forwards to a model through an API after the attorney uploads it.\[1\] A firm in that position cannot rely on the question having a safe answer.

## Standard Enterprise Terms May Already Satisfy the Statute

The strongest counterargument holds that ordinary business or enterprise terms already meet the test. On that view, the provider's contract binds its employees to confidentiality and restricts staff access by default, and the attorney authorizes the provider by signing. Harris Beach Murtha supports part of this view, stating that an enterprise tool with strong confidentiality terms, limited retention, and no vendor access to inputs should satisfy the statute.\[2\]

That reading may prove correct, and a court or the State Bar could adopt it. It still depends on facts that vary by provider and by model, including the retention exceptions and review paths described above, and it assumes that a firm-level signature authorizes every individual who might reach an input. The statute does not say so, and the sources reviewed for this post identify no authority that does. A firm that relies on the counterargument therefore relies on a prediction, and it should record the facts that would support the prediction if a regulator asks.

## Firms Can Answer the Access Test by Contract and Documented Authorization

### Provider Terms Can Show Who Has Access and for How Long

The statute prescribes no form for these steps, so the points below describe one approach to sound practice and not a statutory requirement. Reading the terms for each model a firm calls, and not for the provider in general, can show where retention and review treatment differ by model and by agreement, as the Anthropic and OpenAI documentation above shows. Such a reading can identify who can reach content and under what obligation.

### Written Authorization Can Record Each Person in the Chain

The statute makes the attorney the authorizing party, so a record can show that each attorney authorized the providers and the internal staff who can reach inputs. A written acknowledgment that names the providers, together with internal access limits that the firm logs, can give the firm evidence that access stayed restricted. The record can also answer the narrower API question above, because it shows the attorney's knowledge of where the input travels.

### Four Questions a Firm Can Put to an AI Vendor Before January 1

A firm can put four questions to a vendor. First, which companies and which people can read an input, including staff who review flagged content, and what confidentiality obligation binds each of them? Second, how long does each company keep prompts and outputs, and which exceptions, such as abuse monitoring and legal process, override the stated period? Third, does the contract bind the vendor's own subprocessors to the same obligations? Fourth, can the firm show, from the contract and from its own logs, that no one outside the authorized group can reach an input?

![Four questions to ask every AI vendor before January 1, 2027: who can read the input, how long is it retained, are subprocessors bound by the same confidentiality obligations, and can the vendor prove the access boundary with contracts, authorization records, and access logs.](/images/sb-574/four-questions-ai-vendor.webp)

## SB 574 Settles the Access Test and Leaves Provider Staff Open

SB 574 settles that the confidentiality duty attaches to every generative AI system, open or closed, and that it asks who can reach an input and not how long a provider keeps it. It leaves open whether provider staff who review flagged content count as authorized persons, and it leaves open where assistance ends and delegation begins. Firms with California-licensed attorneys can begin with the four vendor questions before January 1, 2027, and should confirm their reading with California ethics counsel, because the statute does not yet have an authoritative gloss. Founders who hire AI-native firms can put the same four questions to the firm.

## References

1. S.B. 574, 2025-26 Reg. Sess., 2026 Cal. Stat. ch. 858, §§ 1, 3 (adding Cal. Bus. & Prof. Code § 6068.1 and amending Cal. Civ. Proc. Code § 128.7), [leginfo.legislature.ca.gov](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB574) (approved Sept. 30, 2026).
2. Brendan M. Palfreyman, [California SB 574: First Law in Nation Governing AI Use by Attorneys](https://www.harrisbeachmurtha.com/insights/california-sb-574-first-law-in-nation-governing-ai-use-by-attorneys/), Harris Beach Murtha (Oct. 1, 2026).
3. Jason E. Gettleman & Adam D. Teitcher, [California SB 574: What Legal Departments Should Know About New Rules for Lawyer Use of GenAI](https://www.morganlewis.com/pubs/2026/10/california-sb-574-what-legal-departments-should-know-about-new-rules-for-lawyer-use-of-genai), Morgan Lewis (Oct. 2, 2026).
4. OpenAI, [Data controls in the OpenAI platform](https://developers.openai.com/api/docs/guides/your-data) (accessed Oct. 5, 2026).
5. Anthropic, [How long do you store my organization's data?](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data) (updated July 1, 2026).
6. Anthropic, [Data retention practices for Covered Models](https://support.claude.com/en/articles/15425996-data-retention-practices-for-covered-models) (updated Sept. 5, 2026).

---

**Using AI in your legal practice?**

Get peace of mind. Have expert attorneys review your AI-drafted contracts, NDAs, and policies before you rely on them.

[Get it DoubleChecked](https://www.contactdoublecheck.com)
