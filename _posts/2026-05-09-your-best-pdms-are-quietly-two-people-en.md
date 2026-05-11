---
layout: post
title: Your Best PdMs Are Quietly Two People
lang: en
category: Career
---

The company is in the middle of a push to grow engineers into more product-minded roles — sometimes framed as PdE (Product Development Engineer), sometimes as "engineers who can think like PMs." I strongly support this direction. But I think it's quietly resting on a broken assumption about what a PdM actually does. If we don't fix the assumption first, we're going to train a generation of PdEs who just write PRDs faster — and that changes nothing.

I noticed the gap the day I joined this company. In my first conversations with engineers, they expected me, as a PdM, to manage the timeline. Not just influence it — *own* it. Track the sprints, chase the blockers, run the status updates. I was stunned. Where I came from, that was explicitly someone else's job. Project Manager. Program Manager. An entirely separate profession, with its own craft, its own training path, its own seat at the table. Not a subset of product management, a different discipline.

What surprised me more was that almost nobody here seemed to know the distinction existed. And I finally understand why: some PdMs in this company have quietly absorbed the PjM work, *and done it really well*. So well that the role boundary disappeared. If delivery runs smoothly and launches land on time, why would anyone ask whether two separate professions are being blended into one?

That's exactly the problem. Excellence at the hidden half makes the distinction invisible — until you try to grow the next generation. Which is what we're trying to do right now with PdE.

## Read the Document

The clearest way I know to tell the two roles apart is to read their documents.

**A PdM's document makes decisions. A PjM's document records them.**

A PdM spec says: *"We considered A and B. We chose A because of X. The risk is Y, and here's how we mitigate it."* The document is the place where the decision happens. You can disagree with it, but you can see the reasoning.

A PjM spec says: *"We will do A. Here are the requirements."* Clean, well-formatted, complete — but if you ask "why A and not B?", the answer isn't in the document. It's in someone else's head, or in a meeting that already happened. The spec is a transcript, not an argument.

Other signals:

- **Objectives**
  - PdM: Defined with thresholds and rationale
  - PjM: "TBD" or generic
- **Scope**
  - PdM: Explicitly argues what's out and why
  - PjM: Lists what's in
- **Alternatives**
  - PdM: Discussed and rejected with reasoning
  - PjM: Not mentioned
- **Metrics**
  - PdM: Has decision criteria ("if X < Y, we stop")
  - PjM: Lists KPIs without thresholds
- **Stakeholder input**
  - PdM: Synthesized into a recommendation
  - PjM: Passed through as-is

Neither pattern is wrong. A PjM who coordinates a complex launch flawlessly is doing critical work. In the companies I came from, it was considered a specialized profession in its own right, not "whoever happens to be free." But the two roles require different muscles, different coaching, and different evaluation criteria.

## Why the Split Actually Matters

The deeper reason to separate the two roles isn't about clean org charts. It's about where a PdM's finite time and energy should go.

A PdM's core work is not execution. It's **investigating why something should be done in the first place.** That investigation is slow, uncomfortable, and often invisible. It looks like: reading three months of customer support tickets before writing a single line of spec. Pulling BigQuery data to check whether the problem you're about to solve is actually the one users are hitting. Talking to the marketing team about why their last campaign underperformed — not to coordinate the next one, but to find the gap between what the product promised and what users experienced. Pushing back on a stakeholder's request until they articulate the underlying job-to-be-done. Running a small research study to disconfirm your own hypothesis before committing engineering resources.

None of that shows up in a Gantt chart. None of it produces a shippable artifact on any given day. But it's the entire basis for whether the thing you eventually build is worth building.

When a PdM is also the PjM, the PjM work always wins. Not because it's more important, but because it's more urgent. Sprints have deadlines. Stakeholders are waiting for release dates. QA blockers can't sit. Meanwhile, "is this actually the right problem?" has no deadline, no one chasing it, and no visible cost when skipped. So it gets skipped. Week after week. And the PdM looks highly productive: shipping features, hitting dates, keeping everyone aligned — but the strategic muscle slowly atrophies.

This is why mis-labeling breaks so many things: coaching targets the wrong skill, evaluation rewards the wrong outputs, and the most ambitious people get stuck in roles where ops crowds out judgment. Entry-level PMs rotating through PjM-style work isn't really the problem, because there's real learning in it. But it's a sharpening stone, not the knife. If that's still your main job three years in, you're not growing as a PdM. You're growing as a PjM who also writes PRDs.

*(Even more dangerous in the AI era)*

And here's the consequence I worry about most: this problem is about to get worse, not better, as we start building AI agents to support PM work. If we can't cleanly describe what a PdM does versus what a PjM does, we can't give an agent a clean job description either.

We'll build agents that inherit the same blurred role: part strategist, part coordinator, part note-taker. And then we'll struggle to evaluate them, because there's no coherent yardstick.

Is the agent doing well because it kept the sprint on track, or because it pushed back on a flawed premise? Those are two completely different kinds of "good," and they require two completely different evaluation loops.

A human doing both jobs at once can at least explain which hat they were wearing when. An agent will silently optimize for whatever signal the evaluation loop rewards — and by default, that will be the urgent ops signal, because it's the easiest to measure. We'll end up with agents that look productive for the same reason the PdMs-who-are-secretly-PjMs look productive, and the strategic work will keep quietly disappearing — except now at machine speed.

## Why This Makes Me a Believer in PdE

Everything I've written above might sound like I'm hedging on the PdE push. I'm not. I'm actually one of the most enthusiastic people in the building about it, just for a reason I think most people miss.

The real value of growing engineers into product thinking isn't that they'll write PRDs independently. If that's the bar, PdE is just a renaming exercise: today a PdM writes the spec and the engineer builds it; tomorrow the engineer drafts the spec from an AI output and the engineer builds it. Same loop. Same execution-first orientation. Same missing "why." We'd be automating the PjM half and calling it product thinking. How is that meaningfully different from a PdM handing an idea to an engineer to build? It isn't.

The real value is teaching engineers to sit in the chair where **business decisions** get made. The chair where you say "we're not going to solve that problem even though the stakeholder is asking for it, because the underlying job-to-be-done is different." The chair where you push back on a number because the measurement is wrong. The chair where you tell a senior person "I don't think we should build this, and here's what I learned that changed my mind." That's the chair a PdM sits in. And the first few times you sit in it, it's terrifying — because the cost of being wrong is real, visible, and yours.

I've watched engineers, really good ones, go silent in the room the moment a business decision lands on the table. I get the sense they're not without opinions — it might be that their whole career has trained them to treat those decisions as someone else's territory, like "this isn't my call, so I shouldn't have a view."

And their instinct says: *"That's not my call. I'll wait for the PRD."* That instinct is the actual bottleneck. Not their coding skill, not their systems thinking, not their product sense — **the learned silence**.

That's the fear I want to turn into strength. Not by handing engineers a PRD template and telling them to fill it in. Not by letting AI draft specs for them to edit. By coaching them through the same slow, uncomfortable investigation work PdMs should be doing anyway: framing the real problem, pushing back on the wrong question, owning a decision they could be wrong about, and surviving the consequences of that ownership. The coaching loop is the same one I'd use to grow a PdM, because the gap is the same gap. And I believe I'm one of the people in the building who can actually run that loop.

This is why role clarity is essential. If we don't first separate PdM work from PjM work, we can't show PdEs what we're actually trying to train. They'll look around, see the "PdMs" in the building spending most of their time on coordination and sprint-chasing, and reasonably conclude that's the job. Then they'll imitate it, get good at it, and we'll have produced more people who run delivery smoothly — which we already have — and no new people who can hold the room when a business decision actually needs to be made.

The fix isn't complicated. Start by reading the documents PdMs produce and asking one question: **"Where's the trade-off?"** If you can't find one, you've just found your first coaching opportunity — for a PdM, for a PdE, and eventually for the AI agents you'll build to support both.
