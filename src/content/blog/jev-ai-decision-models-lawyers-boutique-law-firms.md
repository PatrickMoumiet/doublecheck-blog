---
title: "Jev for Lawyers: How AI Decision Models and OpenAI's Decisions API Can Improve Boutique Law Firm Workflows"
description: "How Jev and OpenAI's Decisions API can help independent attorneys and boutique law firms build more reliable AI workflows for document review, drafting, triage, and quality control — without replacing the lawyer or the generative AI doing the writing."
pubDate: 'Oct 6 2026'
faq:
  - question: 'What is Jev AI?'
    answer: 'Jev is a decision-focused AI model from TypeSafe AI. Instead of generating open-ended text, it evaluates supplied information against predefined questions and returns structured choices, scores, or probabilities. TypeSafe released it in September 2026 as its first "System One Model."'
  - question: 'Can lawyers use Jev to draft contracts?'
    answer: 'Not directly. Jev is not a generative text model. A lawyer could use an LLM for drafting and use Jev separately for classification, workflow routing, scoring, or checking whether another step should occur.'
  - question: 'How could a boutique law firm use decision AI?'
    answer: 'Potential uses include document routing, workflow triage, AI-output quality gates, deciding when a draft needs another revision, flagging when a human should review an AI workflow, and classifying documents into predefined internal processes.'
  - question: 'Is a decision model always correct?'
    answer: 'No. Structured outputs make AI easier to integrate into software, but structured does not mean correct. Confidence thresholds, deterministic safeguards, testing, and human review remain important.'
  - question: 'Could Jev replace ChatGPT or Gemini in a law firm?'
    answer: 'Probably not for conversational and drafting tasks. The more compelling use case is complementary: generative models handle language, decision models handle narrow software decisions.'
  - question: 'Are decision models useful only to large law firms?'
    answer: 'No. They may be especially useful for smaller firms, since they can make sophisticated AI workflows easier to build without manually encoding every conditional rule.'
toc:
  - label: 'The Problem: Lawyers Do Not Only Need AI to Write'
    anchor: 'the-problem-lawyers-do-not-only-need-ai-to-write'
  - label: 'What Is Jev?'
    anchor: 'what-is-jev'
  - label: 'OpenAI Is Moving in a Similar Direction'
    anchor: 'openai-is-moving-in-a-similar-direction'
  - label: 'Why This Matters for Independent Attorneys'
    anchor: 'why-this-matters-for-independent-attorneys'
  - label: 'Example: Adding Quality Control to AI Drafting'
    anchor: 'example-adding-quality-control-to-ai-drafting'
  - label: 'Example: Document-Review Routing'
    anchor: 'example-document-review-routing'
  - label: 'Example: Deciding When AI Should Ask the Lawyer'
    anchor: 'example-deciding-when-ai-should-ask-the-lawyer'
  - label: 'Jev Is Not a Replacement for ChatGPT, Gemini, or Claude'
    anchor: 'jev-is-not-a-replacement-for-chatgpt-gemini-or-claude'
  - label: 'The Right Architecture for a Boutique Law Firm'
    anchor: 'the-right-architecture-for-a-boutique-law-firm'
  - label: 'Could This Make Legal AI Less Expensive?'
    anchor: 'could-this-make-legal-ai-less-expensive'
  - label: 'What This Could Mean for Small Law Firms'
    anchor: 'what-this-could-mean-for-the-future-of-small-law-firms'
  - label: 'FAQ'
    anchor: 'frequently-asked-questions'
---

*This article is about technology and workflow design, not legal advice.*

AI is already becoming useful inside small law firms. An attorney can ask a language model to summarize a document, create a first draft, compare two versions of an agreement, extract important provisions, or prepare questions for further review.

But there is a recurring problem: **generative AI is very good at writing, while many legal workflows also require consistent decisions.**

Should this document go through an additional review step? Does the draft appear to contain all the sections the firm expected? Which workflow should handle this document next? Should the AI revise the document again, ask the attorney a question, or stop?

Traditionally, developers solve these problems with rules and `if/else` statements. But legal work contains too much nuance for many rigid rules.

A new category of AI is emerging specifically for that layer. [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev), released by TypeSafe AI in September 2026, is designed to make bounded, structured decisions rather than generate prose. OpenAI has also introduced a [Decisions API](https://developers.openai.com/api/reference/typescript/resources/decisions) for evaluating predicates, choices, and scores against shared input.

For independent attorneys and boutique firms, these systems could eventually become an important complement to the generative models they already use.

## The Problem: Lawyers Do Not Only Need AI to Write

Consider a simple AI drafting workflow.

An attorney gives an AI a document and asks it to produce a revised version. The language model might generate an excellent draft.

But the firm's software may still need to answer narrower questions afterward:

Does the draft contain the sections the attorney requested?

Did the AI follow the firm's preferred structure?

Does this output require another review?

Which internal workflow should handle it next?

Is there enough confidence to continue automatically, or should the attorney inspect it?

A traditional LLM can answer those questions too. But asking a generative model to repeatedly produce JSON, confidence scores, classifications, or yes/no decisions can add latency, cost, and another opportunity for inconsistent output.

That is the gap decision-focused models are trying to address.

## What Is Jev?

TypeSafe describes Jev as its first **System One Model**: a model designed specifically for fast, structured judgments inside software.

Instead of asking Jev to write a paragraph, an application provides some state — for example, information about a document or the output of another AI — and defines bounded questions.

Jev can return a **choice**, a **score**, or a yes/no-style probability. The possible structure is specified in advance, which makes the result easier for software to use directly. TypeSafe positions these models as something closer to "smart if-statements" than chatbots.

For example, a workflow could conceptually ask:

```text
STATE:
The current AI-generated contract draft and the firm's review criteria.

QUESTION 1:
Does the draft appear to contain every required section?
→ yes / no probability

QUESTION 2:
What should happen next?
→ attorney_review
→ ai_revision
→ ready_for_next_step

QUESTION 3:
How strongly should this document be prioritized for human review?
→ low
→ medium
→ high
```

Jev does not then write the contract. A generative model can still do that.

**Jev decides what the software should do next.**

That separation is potentially very useful.

## OpenAI Is Moving in a Similar Direction

OpenAI's Decisions API follows a related pattern.

Developers provide shared input and a set of bounded questions. OpenAI currently documents three types of decisions: predicates, choices, and scores. Responses include probabilities or confidence information rather than requiring the application to extract the answer from a normal conversational response.

This suggests an emerging architecture for professional AI applications:

**Generative AI handles open-ended reasoning and writing. Decision models handle routing, scoring, verification, and branching. Traditional code handles hard rules.**

For a small law firm, that could make AI workflows substantially easier to control.

## Why This Matters for Independent Attorneys

Large law firms can afford engineering teams, custom workflow systems, and complex internal review processes.

A boutique practice often cannot.

An attorney may instead be building lightweight workflows around ChatGPT, Gemini, Claude, document-management software, or a small custom application.

This is where decision models could become particularly valuable.

You no longer need every piece of workflow logic to be either **a rigid rule written by a programmer**, or **a giant prompt asking an LLM to decide everything at once**.

There can be a middle layer.

The lawyer or software developer defines the available paths. The decision model evaluates the current situation and selects or scores those paths.

## Example: Adding Quality Control to AI Drafting

Imagine a boutique corporate attorney using AI to help prepare first drafts.

The workflow could begin with a generative model:

**Client information → firm instructions → LLM → draft**

Instead of immediately presenting the draft as finished, the application could then pass information about the draft into a decision layer.

That layer could evaluate whether the expected drafting requirements appear to have been followed, whether another model pass is appropriate, or whether the draft should be surfaced for attorney review.

The software could then use ordinary code:

```text
if confidence is high and revision_needed:
    send back to drafting model

if confidence is low:
    send to attorney review

if requirements appear satisfied:
    continue workflow
```

The decision model is therefore not replacing the attorney and is not replacing the model producing the draft.

It is helping the software make the **workflow decision between steps**.

## Example: Document-Review Routing

The same architecture could help with high-volume document review.

Suppose a small firm receives dozens of documents from clients.

A generative model might extract and summarize their contents. A decision model could then classify each document into the firm's predefined workflow:

Corporate formation.

Employment.

Commercial agreement.

Tax/accounting coordination.

Requires attorney attention.

Requires additional client information.

No action yet.

Because the available outputs are predefined, the application can route the document immediately rather than trying to interpret an open-ended AI paragraph.

For a boutique practice, that could mean less administrative work without pretending that an AI system is itself practicing law.

## Example: Deciding When AI Should Ask the Lawyer

One particularly interesting use case is **uncertainty management**.

AI systems often create a poor experience when they are forced to act even when the situation is ambiguous.

Decision-focused systems can instead expose uncertainty.

TypeSafe says Jev attaches probabilities and confidence to its outputs, allowing developers to define thresholds for when software should proceed automatically and when it should escalate.

A firm's workflow might therefore say:

High confidence → continue automatically.

Medium confidence → ask another structured question.

Low confidence → surface the issue to the attorney.

That is potentially much more useful than pretending every AI output deserves the same level of trust.

## Jev Is Not a Replacement for ChatGPT, Gemini, or Claude

This distinction is essential.

Jev is deliberately **not a text-generation model**. It is not designed to draft a contract, explain a complicated concept to a client, produce a memo, or hold a natural conversation.

TypeSafe's API takes state plus structured questions and returns typed answers. Its current public API supports bounded decision types rather than open-ended text generation.

So the interesting architecture is not:

**Jev instead of an LLM.**

It is:

**LLM + decision model + software rules + attorney oversight.**

Each component handles the kind of work it is best suited for.

### Why the "smart if-statement" idea is powerful

Software traditionally needs exact instructions.

```text
IF X happens → do Y.
```

That works beautifully when X is objectively measurable.

But many professional workflows look more like:

```text
IF this document probably needs another review
AND the missing information is material
AND confidence is sufficiently high
→ request additional information.
```

That is much harder to express with ordinary deterministic code.

Decision models essentially allow developers to put learned judgment inside these conditional branches.

TypeSafe explicitly describes Jev as useful for AI-powered workflows and "smart if-statements," while OpenAI's Decisions API similarly exposes structured choice, predicate, and score outputs that applications can consume programmatically.

That could be one of the more consequential changes in how professional AI software is built.

## The Right Architecture for a Boutique Law Firm

The safest conceptual model is a layered one.

**Hard rules remain code.** Permissions, authentication, payment rules, document access, deadlines entered by users, and other deterministic requirements should not be delegated to probabilistic AI.

**Generative models handle language.** Drafting, summarization, explanation, extraction, and conversational assistance remain natural LLM tasks.

**Decision models handle fuzzy branching.** Classification, routing, scoring, prioritization, and determining whether another workflow step may be appropriate are where Jev-like systems become interesting.

**The attorney remains responsible for professional judgment.** A decision model's structured output is easier for software to consume; that does not mean its substantive judgment is infallible.

TypeSafe itself distinguishes type safety from substantive correctness: constraining the output prevents schema errors, but the model can still make an incorrect decision.

## Could This Make Legal AI Less Expensive?

Potentially.

TypeSafe currently advertises Jev at **$0.042 per million input tokens**, with output tokens not billed, and reports very low latency for its targeted decision workloads. Those are TypeSafe's own published figures and performance claims, so firms should benchmark them against their actual workflows rather than assume identical results.

The bigger potential saving, however, may not be API cost.

It may be avoiding the use of a large generative model for hundreds of tiny decisions such as:

Which queue?

Does this need another step?

Which template category?

Should the system escalate?

Is this output sufficiently aligned with the specified criteria?

A specialized decision call may be a more natural tool for those questions.

## What This Could Mean for the Future of Small Law Firms

The first wave of legal AI has largely focused on **generation**: write faster, summarize faster, research faster.

The next wave may be about **orchestration**.

A boutique law firm could eventually build a highly structured AI workflow without building a giant autonomous legal agent.

One model drafts.

Another system retrieves information.

A decision model evaluates what should happen next.

Traditional code enforces the firm's hard rules.

The lawyer handles the points where professional judgment is actually required.

That model is less glamorous than "AI replaces the whole workflow."

It may also be considerably more useful.

## Frequently Asked Questions

### What is Jev AI?

Jev is a decision-focused AI model developed by TypeSafe AI. Instead of generating open-ended text, it evaluates supplied information against predefined questions and returns structured choices, scores, or probabilities. TypeSafe released Jev in September 2026 as its first "System One Model."

### Can lawyers use Jev to draft contracts?

Not directly. Jev is not a generative text model. A lawyer could use an LLM for drafting and potentially use Jev as a separate decision layer for classification, workflow routing, scoring, or checking whether another step should occur.

### How could a boutique law firm use decision AI?

Potential applications include document routing, workflow triage, AI-output quality gates, deciding when a draft needs another revision, identifying when a human should review an AI workflow, and classifying documents into predefined internal processes.

### Is a decision model always correct?

No. Structured outputs can make AI easier to integrate into software, but structured does not mean correct. Confidence thresholds, deterministic safeguards, testing, and human review remain important.

### Could Jev replace ChatGPT or Gemini in a law firm?

Probably not for normal conversational and drafting tasks. The more compelling use case is complementary: use generative models for language and decision models for narrow software decisions.

### Are decision models useful only to large law firms?

No. In some respects they may be especially interesting for smaller firms because they could make relatively sophisticated AI workflows easier to build without requiring every conditional rule to be manually encoded.

---

**Building AI workflows at your firm?**

Get peace of mind. Have expert attorneys review your AI-drafted contracts, NDAs, and policies before you rely on them.

[Get it DoubleChecked](https://www.contactdoublecheck.com)
