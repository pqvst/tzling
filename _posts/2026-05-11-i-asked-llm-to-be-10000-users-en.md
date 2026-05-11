---
layout: post
title: I Asked an LLM to Be 10,000 Users — and the Wrong Answers Were the Useful Ones
lang: en
category: Product/Learning
---

I asked our DS team to run an experiment: instead of surveying real users, we used an LLM to simulate 10,000 personas and asked them what they'd do in an upcoming campaign. For one challenge, the prediction was remarkably accurate. For the other two, though, it was off by 20 percentage points. **The gap is what I want to write down.**

We had been designing a reactivation experiment for dormant buyers (basically, finding ways to win back old flames). We offered three weekly challenges, each unlocking a small reward:

- C1: A familiar user action
- C2: A novel action (we suspected it correlated strongly with our goal)
- C3: A novel action (we suspected it correlated strongly with our goal)

Before launch, the DS team built synthetic personas from each user's behavior history and asked the LLM, in character: "Of 100 people like you, how many would complete this challenge?"

When a few thousand predictions were matched against actual organic behavior:

- **C1 (familiar): predicted ~18%, actual ~13%.** Close.
- **C2 (novel): predicted ~25%, actual ~5%.** Twenty-point gap.
- **C3 (novel): predicted ~8%, actual ~2%.** Four-fold over-prediction.

### The Insight

The LLM was doing what LLMs do — pattern-completing from history. For users who've already done some familiar action, predicting "they'd do a bit more with a discount coupon" is easy to guess. For other less familiar behaviors (like swiping some feature), the LLM has no anchor to work from, so it confabulates optimistic numbers.

What struck me: **the predictions were most reliable exactly where we needed them least.** The actions we already understand are the actions the LLM understands. The novel behaviors — the ones we actually needed to validate before shipping — are precisely where the model breaks.

This isn't a flaw, it's the method telling you what's knowable from history and what isn't. The 20-point gap on C2 isn't noise — it's that **"getting users to do unfamiliar behaviors like saving a search"** is actually a new behavior we can't predict from history alone.

To me, this finding itself is a discovery, not a failure.

Writing this far, I should flag: I didn't catch this on my own. The DS team built the methodology that aligned LLM predictions with organic behavior, and that's the only reason the gap was visible at all. Without that setup, we'd have ended up with the useless conclusion that "the LLM simulations look reasonable."

### A Side Lesson from a Stanford Paper

The same week, I also read a Stanford/DeepMind paper ([Park et al., 2024, arXiv:2411.10109](https://arxiv.org/abs/2411.10109)). They built an LLM agent for each of 1,052 real people using a two-hour interview, and the agents matched the General Social Survey at 85% of the participants' own two-week test-retest consistency — current state of the art.

I initially assumed they'd fine-tuned a model on each person's interview. They hadn't — they put the **entire interview transcript into GPT-4o's context window** and prompted it to play that person. Weights untouched. All 1,052 agents share one model; only the prompt changes.

But the point isn't the technical detail — it's this: **the evaluation tasks were all on the General Social Survey and Big Five — established survey domains. Novel action prediction wasn't tested in this paper.**

In other words, even with the field's SOTA method, "will users do something they've never done before?" remains an open question. My 20-point gap isn't because the setup was crude — it's because **no one has cracked this part yet.**

### What Actually Matters in LLM Virtual Surveys

So, two things I'm carrying out of this:

**1. LLM virtual surveys are best at de-risking, not predicting.** Use them to confirm the obvious first, then read the gap to find what's truly novel. The gap tells you which area only real users can teach you.

**2. The novel-action gap is where the product layer earns its keep.** Targeting models can predict who's likely to engage more. But asking a user to do something they've never tried? That's a UX question, an intent-framing question, a "why would I do this" question. No targeting model fixes a behavior the user has never tried.

Our team had been refining personalization models for months. This experiment, together with the Stanford paper, helped me name what I'd suspected: **the model wasn't the problem — we were asking it the wrong question.** The lever was never "match better." It was "give users a reason to try something new" — a product framing problem, not a modeling problem.

One more credit to our DS team. Not every DS team will design an experiment that's set up to expose the limits of their own model, and then put the results on the table for everyone to see. They did. That kind of intellectual honesty is what makes product framing work possible in the first place — without it, this post wouldn't exist.

---

📎 Supporting Data & Evidence
- n ~ a few thousand users matched against organic behavior
- Top blockers in user reasoning: **effort** (the action feels like a hassle — takes time, clutters the feed) > **value** (the reward isn't worth it) > **privacy** (discomfort with being tracked)
- Reference: Park, J. S., et al. *Generative Agent Simulations of 1,000 People* (arXiv:2411.10109, 2024)
