---
title: 'AI Agents May Soon Negotiate Deals for You. Who Is Responsible for What They Agree To?'
seoTitle: 'AI Agents Negotiating Deals: What Businesses Should Know'
description: 'Anthropic is reportedly consulting lawyers on rules for AI agents that negotiate deals. What businesses should know about authority and verification.'
pubDate: 'Oct 23 2026'
authorName: 'Patrick Moumiet'
faq:
  - question: 'Can AI agents negotiate contracts?'
    answer: 'AI agents are increasingly able to negotiate with other systems and people, and companies such as Anthropic are researching agent-to-agent markets. Using them for consequential contracts still raises legal, technical, and governance questions.'
  - question: 'What is agentic contract negotiation?'
    answer: 'It refers to AI systems performing multiple steps of a negotiation on a user''s behalf, rather than only suggesting language or answering questions.'
  - question: 'Should an AI agent be allowed to accept a contract?'
    answer: 'For important agreements, human approval before the company is committed is a useful safeguard. The right level of autonomy depends on the transaction and risk.'
  - question: 'What instructions should a negotiating AI agent receive?'
    answer: 'Beyond the objective, define constraints such as price limits, contract duration, liability, intellectual-property rules, confidentiality, data rights, and situations that require human approval.'
  - question: 'Can AI agents negotiate with other AI agents?'
    answer: 'Yes. Anthropic''s Project Swap is one example, in which AI agents traded books with each other on behalf of their human participants.'
toc:
  - label: 'Anthropic experiments'
    anchor: 'anthropic-is-already-experimenting-with-ai-agents-negotiating'
  - label: 'What it may agree to'
    anchor: 'the-biggest-question-what-is-the-agent-allowed-to-agree-to'
  - label: 'Negotiating authority'
    anchor: 'ai-agents-will-need-negotiating-authority'
  - label: 'Beyond price'
    anchor: 'an-agent-should-not-optimize-one-number-blindly'
  - label: 'Confidential information'
    anchor: 'confidential-information-becomes-another-problem'
  - label: 'Human approval'
    anchor: 'humans-will-probably-remain-approval-points'
  - label: 'Agent vs. agent'
    anchor: 'what-happens-when-two-ai-agents-negotiate'
  - label: 'Legal work'
    anchor: 'this-could-change-legal-work-too'
  - label: 'DoubleCheck'
    anchor: 'where-doublecheck-fits'
  - label: 'FAQ'
    anchor: 'faq'
---

*AI agents can already search the web, read email, and complete multi-step tasks. The next step may be more consequential: negotiating for you. Here is how to think about authority, confidentiality, approvals, and verification.*

**Key takeaways:**

- Define constraints for a negotiating agent, not just a goal like lowest price.
- Separate authority to negotiate from authority to commit the company.
- Keep humans as approval points, and keep an audit trail of the agent's actions.
- Verify what the agent agreed to before you sign.

Anthropic is reportedly consulting lawyers as it thinks through rules for AI agents that could negotiate prices, resolve disputes, bargain over employment offers, and make other deals on behalf of users, according to the Financial Times. Until now, most businesses thought of AI as something that helps make a decision. Agents raise a new question: **what happens when the AI can actually negotiate the decision?**

## Anthropic is already experimenting with AI agents negotiating

This is not entirely theoretical. In Anthropic's [Project Swap](https://www.anthropic.com/news/project-swap) experiment, 201 Anthropic employees each brought a book to give away and had a short chat with Claude about their reading tastes. Claude-powered agents then traded books with each other in a small marketplace on their behalf.

![Project Swap: Claude's ranking agreed with participants' own book rankings 61 percent of the time; books are not a 100,000 dollar contract](/images/ai-agents-negotiate-contracts-deals/project-swap.webp)

Anthropic reports that Claude's ordering of books agreed with the participants' own rankings 61% of the time, compared with 50% for random guessing. Anthropic itself notes caveats: the participants were employees, the setting was a single domain (books), and the benchmark rankings may be noisy.

That is impressive, and also not 100%. And negotiating a book is very different from negotiating a $100,000 software contract, an employment offer, a settlement, vendor pricing, intellectual-property rights, or liability provisions.

## The biggest question: what is the agent allowed to agree to?

Imagine telling an agent: *"Get me the lowest possible SaaS price."* The vendor offers 30% cheaper pricing, but requires a three-year commitment. What if the agent saves another 10% in exchange for broader data rights? What if it agrees to automatic renewal, or accepts an unfavorable indemnification clause?

The agent completed its stated objective, lowering the price, but it may have created a bigger problem somewhere else. Businesses need to define more than a goal. They need to define **constraints.**

## AI agents will need negotiating authority

Humans already understand this. A junior employee may negotiate with a vendor but need approval before agreeing to anything over $50,000. The same idea can apply to agents:

> Agent may negotiate pricing but cannot accept a contract longer than 12 months.

> Agent may propose contract changes but cannot accept them.

> Agent may negotiate commercial terms but any change involving intellectual property, liability, confidentiality, or data rights requires human approval.

![Give the agent a mandate: it may negotiate pricing, propose changes, and escalate unclear items, while a human approves IP, liability, confidentiality, data rights, renewal, anything over your limit, and acceptance of the contract](/images/ai-agents-negotiate-contracts-deals/mandate.webp)

That creates a boundary between **negotiation** and **authority to commit the company.** If the agent has access to your email or files, the checks in our guide to [connecting an AI agent to Gmail, Slack, or Drive](/blog/ai-agent-gmail-slack-drive-security-checklist/) apply too.

## An agent should not optimize one number blindly

Price matters, but so might liability, payment timing, termination rights, intellectual property, confidentiality, data usage, service levels, renewal, exclusivity, and jurisdiction. An agent optimizing only price could make terrible trade-offs. A more sophisticated instruction might read:

> "Negotiate this agreement while minimizing total cost. Do not accept unlimited liability, a commitment longer than one year, use of our confidential data for model training, automatic renewal without notice, or transfer of our intellectual property. Escalate any proposal outside these constraints."

That begins to look like a real negotiating mandate. Our [AI vendor contract checklist](/blog/ai-vendor-contract-checklist/) lists many of the terms worth putting on the do-not-accept list.

## Confidential information becomes another problem

To negotiate effectively, an agent may know your maximum budget, minimum acceptable price, deadline, which terms you care about, your alternatives, or how badly you need the deal. That information is valuable precisely because the other side does not know it.

A simple rule: **an agent should know what it needs to negotiate, but should not automatically reveal everything it knows.** Whether the other side is a person or another agent, assume it may try to get more out of yours than you intended.

## Humans will probably remain approval points

The most practical near-term workflow is probably not *AI negotiates → AI signs.* It is more likely:

![Negotiate, then approve: the agent negotiates within limits, proposes final terms, AI flags changes from the prior deal, the owner reviews and escalates legal issues, and an authorized person accepts](/images/ai-agents-negotiate-contracts-deals/approval-flow.webp)

For low-risk transactions, companies may allow more autonomy. For important contracts, human approval remains a useful checkpoint. That still saves substantial work, because the AI does not need unlimited authority to create value. If the difference between agents and chatbots is new to you, start with [AI agent vs chatbot for legal work](/blog/ai-agent-vs-chatbot-legal-work/).

## What happens when two AI agents negotiate?

Imagine your company's agent negotiating with the vendor's agent. Both can process thousands of terms instantly and generate new proposals every few seconds. Negotiations that take days could happen very quickly.

But speed creates its own problem. If 30 versions of a deal are exchanged in 60 seconds, who confirms that version 30 still reflects what the human actually wanted? That makes **auditability** important.

![Keep a record of the deal: the agent's instructions, what it disclosed, offers it rejected, trade-offs it made, when it escalated, and who gave final approval](/images/ai-agents-negotiate-contracts-deals/audit-trail.webp)

Businesses may need records showing what instructions the agent received, what it disclosed, which offers it rejected, which trade-offs it made, when it escalated, and what the human finally approved.

## This could change legal work too

Contract lawyers spend significant time negotiating repetitive commercial terms, and agents could eventually handle some first-pass bargaining. The lawyer's job may move toward setting negotiating boundaries, identifying unacceptable terms, reviewing exceptions, and verifying the final agreement:

> "The AI can negotiate inside this box. Call me when it needs to leave the box."

That is a very different workflow, and one reason verification matters more, not less. See [how business owners use AI for legal work](/blog/business-owner-ai-legal-work/).

## Where DoubleCheck fits

If an AI agent negotiated a contract for your business, ask one final question before signing: **what exactly did it agree to?** Bring the resulting agreement, examine the terms, identify changes and potential issues, and decide what deserves professional review. Our guide to [verifying an AI-generated legal document](/blog/verify-ai-generated-legal-document/) gives the method.

[DoubleCheck](https://www.contactdoublecheck.com) is built for businesses that start legal work with AI. Bring your question or draft, use an AI-first workflow to understand and verify it, and when professional advice is warranted, you can connect with an independent attorney. Attorneys on DoubleCheck are independent professionals; an attorney-client relationship forms only if an attorney accepts your engagement.

**AI agent negotiates → DoubleCheck verifies → human or attorney approves**

AI agents may eventually negotiate at machine speed. Your company still needs to understand the deal.

*Sources: Anthropic, [Project Swap](https://www.anthropic.com/news/project-swap); [AI Weekly's summary](https://aiweekly.co/alerts/anthropic-consults-law-firms-on-negotiation-norms-for-ai-agents) of the Financial Times report on Anthropic consulting lawyers (Oct. 18, 2026).*

## FAQ

**Can AI agents negotiate contracts?**

AI agents are increasingly able to negotiate with other systems and people, and companies such as Anthropic are researching agent-to-agent markets. Using them for consequential contracts still raises legal, technical, and governance questions.

**What is agentic contract negotiation?**

It refers to AI systems performing multiple steps of a negotiation on a user's behalf, rather than only suggesting language or answering questions.

**Should an AI agent be allowed to accept a contract?**

For important agreements, human approval before the company is committed is a useful safeguard. The right level of autonomy depends on the transaction and risk.

**What instructions should a negotiating AI agent receive?**

Beyond the objective, define constraints such as price limits, contract duration, liability, intellectual-property rules, confidentiality, data rights, and situations that require human approval.

**Can AI agents negotiate with other AI agents?**

Yes. Anthropic's Project Swap is one example, in which AI agents traded books with each other on behalf of their human participants.

---

*General information only. This article is not legal, tax, investment, or accounting advice.*
