---
layout: post
title: Claude Code Clears Your Context, Your Mind — and Obsidian
lang: en
category: Product / Learning
---

## Claude Code Clears Your Context, Your Mind

Last Friday, I realized one of my Claude Code sessions burned through its token quota in under two hours. I had ten terminals open—one per project—and no time to properly look at any of them.

If you’ve been browsing r/ClaudeAI recently, you’ll know it’s not just me. On March 23, Max plan users ($100/month) were hitting their 5-hour session limits in just 90 minutes. Anthropic confirmed this was intentional rate limiting during peak hours—not a bug. The surge from the QuitGPT migration wave exceeded GPU capacity.

But the deeper issue isn’t Anthropic’s infrastructure. It’s how Claude Code works under the hood. A single user message can trigger 8–12 internal API calls—reading files, searching, executing commands—and each one stacks into the context window. A “simple” request can quietly consume 30,000+ tokens. If you never clear your context, stale information just keeps piling up: failed debug loops, outdated code, abandoned threads. The community calls this **context rot**—it doesn’t just waste tokens, it degrades Claude’s reasoning quality.

What surprised me was this: the fix for token consumption ended up fixing how I think.

As a PM, I’m constantly switching contexts. Ten terminals, ten threads of work, conversations spanning multiple days. My instinct is to keep everything—you might need that earlier thread, that half-finished analysis. But an ever-growing context window is like a meeting with no agenda: it drifts, repeats itself, and eventually no one remembers what mattered.

Forcing `/clear` when switching tasks, and `/compact` at natural milestones, does two things. Yes, it saves tokens (community reports suggest basic session hygiene can cut usage by 40–55%). But more importantly, **it forces you to articulate what you’ve done and what comes next before continuing.** You can’t clear context without deciding what’s worth carrying forward.

This isn’t token management. It’s planning discipline.

The rhythm I’m experimenting with:

- **`/compact` after every milestone** — finishing a draft, completing an analysis, closing a thread. Compress, don’t accumulate.
- **`/clear` when switching projects** — a clean break. If the next task can’t be explained with a fresh prompt, I haven’t thought it through.
- **Use Plan Mode (`Shift+Tab`)** — have Claude outline the plan before execution. Surface decision points early. The community reports this works especially well for tasks involving 3+ files, and should theoretically reduce token waste from wrong directions—though I’m still validating the actual savings.
- **Maintain `.md` notes as a habit** — before every `/clear`, write key conclusions, decisions, and next steps into project markdown files. These `.md` files become your cross-session memory. When you start a new session, Claude can pick up from them instead of rebuilding context from scratch.
- **“I can’t summarize this session” is a warning sign** — if you can’t explain what happened, the conversation probably drifted aimlessly.

Token cost is just the trigger. The real gain is upstream. The habit of stopping regularly to ask, “What did I actually figure out?” is valuable—whether you’re working with AI or not.

This ties closely to my next realization about Obsidian.


## I Could Never Stick with Obsidian — And That Might Be the Point

I’ve worked for years in environments that require constant context switching. Back when I was in hardware—forecasting, scheduling, launch planning, P&L reviews—I could be in four completely different discussions in a single afternoon. Everyone told me the same thing: you should use Obsidian. I never managed to stick with it.

When your work constantly shifts context, the advice is always the same: build a second brain. Link your notes. Let the graph think for you. Obsidian, Roam, Logseq—the promise is identical: throw everything in, and the tool will surface the connections you missed.

I tried. It didn’t stick. Not because the tools are bad, but because outsourcing “linking” feels wrong. I’ve always believed the manual work—deciding what matters, building your own structure, forcing yourself to categorize—is what actually makes things stick.

Later, I started using Claude Code with an MCP-style memory system: markdown files I write myself, indexes I maintain myself, categories I define myself (this is *project* memory, that’s *reference* memory). Technically, it’s nothing fancy—just `.md` files. But the system forces me to answer one question every time: *what is this, why does it matter, and where does it belong?*

The real work of memory isn’t linking—it’s categorization.

Even the Obsidian community quietly acknowledges this. Graph view is often described as “pretty but useless”—once you have more than ~50 notes, the global graph turns into an incomprehensible ball of yarn. One of the most common reasons people leave is that maintaining the system consumes the time they should be using to think. Some install 50–60 plugins and end up using none. Others describe it as a one-way archive—things go in and never come back out. People come for the graph, and leave when the maintenance cost outweighs the benefit.

Cognitive science backs this up. A meta-analysis of 86 studies on the generation effect found that actively producing information leads to about a 0.40 standard deviation improvement in memory retention over passive reading. A 2023 EEG study published in *Frontiers in Psychology* showed that handwriting activates significantly more theta/alpha brain connectivity than typing—because typing tends to be verbatim transcription (shallow processing), while handwriting forces you to reframe the language.

The key mechanism: **deliberate categorization is what moves information from working memory into long-term memory.** Automatic linking skips this step entirely.

To be honest, I’m not sure if this is a real cognitive insight or just me rationalizing why I couldn’t stick with Obsidian. Maybe both. But after years of high-frequency context switching, there’s one thing I’m certain of—the information I remember most clearly is the stuff I struggled to categorize. The struggle itself is the encoding.

That’s also why I write this blog.

Writing might be the best memory system. Every time I revise a draft, I spend an unreasonable amount of time re-validating whether the information is actually correct—was that number really what I thought it was? Did I get the causality right, or am I misremembering? That process of organizing and verifying is the only moment you can truly tell whether you understand something—or just think you do.

And honestly, most of the time you don’t need to deeply understand everything. What you need is to remember the **direction** of your exploration—why you cared about this, what angle you approached it from, what tentative conclusions you reached. That way, when you revisit it, you’re not starting from zero—you’re starting with orientation.

Categorization is memory. Writing is verification. And remembering direction is more useful than remembering details.