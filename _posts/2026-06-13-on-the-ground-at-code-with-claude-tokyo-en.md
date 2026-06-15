---
layout: post
title: On the Ground at Code with Claude Tokyo
lang: en
category: Product/Learning
---

Last week I went to Code with Claude Tokyo ⛩️. I'd entered the ticket lottery months ago, and just getting the confirmation email already felt lucky. What I didn't expect was this — by the time I walked out, I was even more excited than when I walked in.

Queuing at check-in, I scanned the room out of habit. It was packed — before 8:30 the line already filled the whole corridor. I walked all the way to the end of it, and however I looked, I was the only woman there. It felt a little strange, a little out of place.

![](/assets/img/CwC-Tokyo/badge.jpg)<br/>
*Finally got my badge.*

The venue was the Fairmont Hotel, which only opened in July 2025 — floor-to-ceiling windows overlooking Tokyo Bay and the Rainbow Bridge, a new landmark in Minato. Everything about Code with Claude, big and small, was thought through. The visual identity was so complete that you could tell Claude wasn't only saying "we're technically strong" — they wanted the aesthetics to come along too. You can even read it in the model names — haiku, with all its literary air. The way Claude builds its key visuals out of simple little symbols, like cross-stitch, made the part of me that loves knitting feel right at home.

![](/assets/img/CwC-Tokyo/poster-wall.jpg)<br/>
*Code / Pair / Think / Build w/ Claude — even the poster wall is the same woven-feeling visual. You could take one home, and there was a hidden edition too.*

Before going in, I bumped into my idol Cat Wu right at the door — Head of Product for Claude Code.

I was so nervous I could barely string a sentence together. I didn't manage to tell her how much I love Claude Code, didn't offer any meaningful feedback, my mind just went blank. But she was so kind — willing to stop and share a few words with a tongue-tied stranger.

My one regret: I was too nervous to even ask for a photo. Why is asking someone you admire for a picture always this hard?

## The Opening: A Model Just Born, and Immediately Paused

The opening keynote started with the newest models. Just the day before (6/9), Anthropic had publicly announced Claude Fable 5 and Mythos 5 — the first time Mythos-tier capability was opened up to the general public. And of course the event itself re-announced the new models with much fanfare. I went home and used it that same night — Fable 5 runs a touch slower, but it does things better and more finely; it felt like there was less I needed to go back and patch.

![](/assets/img/CwC-Tokyo/mythos5-butterflies.png)<br/>
*The key visual for Fable 5 / Mythos 5 — a "5" made of a flock of butterflies. (Image: [Anthropic official](https://www.anthropic.com/news/claude-fable-5-mythos-5))*

The pity is that just as I'm writing this (6/12), the US government, citing national security, issued an export-control order on Fable 5 and Mythos 5, requiring access be cut off for all foreign nationals. Because Anthropic can't filter users by nationality in real time, for now they've simply turned these two most powerful models off for everyone. It's probably the first time in history a model already publicly live has been halted directly by a government. Sitting in the front row hearing a new model announced, only for it to be restricted days later — it really is disheartening.

> Sources: [Anthropic official announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5), [The New Stack](https://thenewstack.io/us-gov-orders-anthropic-to-pull-fable-5-and-mythos-5-three-days-after-launch/), [NBC News](https://www.nbcnews.com/tech/tech-news/anthropic-suspends-new-ai-models-fable-mythos-government-directive-rcna349901)

## Japanese Companies Adopting AI at Scale

Back to the event. What really lifted me was when the opening mentioned my own company, Mercari — singled out for the productivity gains from adopting Claude. Only two companies were named in the whole room; the other was the heavily-adopting Rakuten. Over the past year I've taken part in many internal AI Camps, acting as the technical guide for non-engineers, and watching from the side how fast AI has seeped into every workflow — the change has been enormous.

Lately the resistance to adopting AI has dropped a lot. Even in areas that are harder to verify, people are now willing to let AI draft a first version or try a new process.

I can't help bringing it up again — back when ChatGPT first took off, I was still half-skeptical about where AI was going (you can find my old posts about translation on this very blog). But in just a few years, having watched with my own eyes how AI simplifies workflows so massively and so easily, I've long since become a believer.

![](/assets/img/CwC-Tokyo/stage-pink-codewclaude.jpg)<br/>
*The stage before the doors opened, the pink Code w/ Claude wall still glowing.*

![](/assets/img/CwC-Tokyo/stage-upnext.jpg)<br/>
*Lights down, the show begins.*

![](/assets/img/CwC-Tokyo/fuji-claude.jpg)<br/>
*A pixel Mt. Fuji key visual made just for Japan — so cute I stared at it for ages.*

![](/assets/img/CwC-Tokyo/mercari-98-1.jpg)<br/>
*The second I saw my own company named.*

## A Hallway Conversation More Striking Than Any Session

Halfway through the main-stage program, something wonderful happened. A photo I'd just posted live on Threads was seen by Chao Shuai — an engineer who'd moved from Meta AI to Anthropic — so we got to chat outside the hall. That conversation may have taught me more than any single session that day, and it confirmed a lot of things I'd only "heard."

**"We don't write PRDs anymore"**

I've actually been troubled by one thing lately: where exactly is the line between the PRD (Product Requirements Document), the RFC (Request for Comments) / design doc, and the actual implementation? How detailed should it be, and when do you start writing code? And what does QA verify against — how do they run regression tests?

ChaoShuai (in Mandarin his name sounds like "super handsome" — sorry, couldn't resist) told me Claude internally barely writes PRDs anymore. Mostly they write the goal clearly and just let the model produce several versions, evaluating non-stop, releasing non-stop, fixing issues the next day. The logic behind it: writing code used to be expensive, so you had to spend a lot of time assessing "what exactly to build"; but now code is cheap, so rather than evaluate forever, just write it and see.

Here I want to hit pause — for myself and for you.

Claude owns the model itself; for them burning tokens costs almost nothing, and that premise doesn't hold for ordinary companies. For most companies, code costs won't necessarily fall in the long run; but AI has genuinely accelerated development a lot. So the real homework isn't to copy "don't think, just write" wholesale — it's to remake the development process: put the effort into helping review and QA keep up with this speed, instead of outsourcing the surging load onto downstream teams.

Product managers, too, should put more energy into framing what should and shouldn't be done. Even if we could assume infinite code output, we still need a way to forecast and evaluate whether something will succeed — just as I wrote in my earlier piece, [Your Best PdMs Are Quietly Two People](/2026/05/09/your-best-pdms-are-quietly-two-people-en/).

I don't have an answer yet, but a few backend-engineer colleagues happened to be there too, so I pulled them in to talk — and sure enough, everyone vented a little. On a platform with a huge MAU that's also a financial product, we're a bit damned-if-you-do. I forget where I heard it, but someone even said — fine then, don't even refactor, just have AI rewrite the whole thing.

Everyone laughing through the pain, joking of course.

## A Model's Effort and Token Efficiency

In the afternoon I went on to a Code with Claude talk on effort and token efficiency (Thinking of Lever), which gave me an idea that's actually quite plain, but that I really like:

In the future maybe we won't be "evaluating whether the model is good" ourselves; instead we'll look at the model's outcomes and give it a clear goal and a set of expectations. For a small, simple thing, I might only need 60% accuracy but I want it fast — so I pick a lower-effort model; conversely, for a high-stakes decision, that's when you call in the strongest, slowest, most expensive one.

After the talk I chatted with the speaker, Donny Greenburg. I said that as a PM inside a company, when we adopt AI for certain features we still have to weigh the model's cost, but it's hard for us to define which model to use for which feature — should I also *not* have the user specify it, and instead recommend a model based on the outcome the user wants?

His answer: maybe you should break the task down smaller, which makes it easier to judge the relationship between effort and goal — treat the model like a team with different gears to deploy, rather than always flooring the throttle.

![](/assets/img/CwC-Tokyo/slide-3-effort-levels.jpg)<br/>
*One model, three effort gears — this slide had me thinking for a long time.*

The speaker demoed the same task live: ask Claude Opus 4.7 to write a "one-way street traffic light" simulation. Turn effort from low up to max, and you see it clearly — how far you push the lever is how far the model simulates, while the cost (time and tokens) multiplies several times over.

![](/assets/img/CwC-Tokyo/effort-lane-low.jpg)<br/>
*Low effort: 50s, 4,602 tokens — only a bare-bones version, colored blocks sliding along a dashed line.*

![](/assets/img/CwC-Tokyo/effort-lane-high.jpg)<br/>
*High effort: 111s, 9,826 tokens — now there are proper lane markings and cars.*

![](/assets/img/CwC-Tokyo/effort-lane-max.jpg)<br/>
*Max effort: 593s, 52,893 tokens — it grows a whole simulated street, city skyline and a complete intersection and all.*

## The Dinner, and an Electronic Pet I Made Myself

That evening there was an after party. Tokyo Bay at night, paired with more AI talk. I hadn't been to something this fun in a long time. The Claude buddy was adorable; getting to be part of all this, I just felt so lucky — the IT world needs a lot more of this human touch.

![](/assets/img/CwC-Tokyo/tokyo-bay-1.jpg)<br/>
*Looking out from the Fairmont's windows, Tokyo Bay just turning from dusk to night.*

![](/assets/img/CwC-Tokyo/tokyo-bay-2.jpg)<br/>
*And a glance over toward the Rainbow Bridge.*

![](/assets/img/CwC-Tokyo/venue-setup.jpg)<br/>
*The setup: a wooden easel holding a woven-style Code w/ Claude poster — even a corner of the lobby was done with care.*

After the event, I went on with a group of friends from Taiwan's AI community to an izakaya, talking and talking. That night I was unusually wired — because around the table were so many people with zero coding background, each using all kinds of methods to solve the real problems stuck in their own businesses, every one of them full of passion.

I've always felt building a side project is a lonely thing. When I occasionally write about vibe coding on Threads, I often get looked down on or questioned by engineers. But at that izakaya table, I suddenly wasn't so afraid anymore. To me, this really is the best era to create — I get to build whatever I want and change whatever I want, and I don't even have to think about how to make money; AI has partly satisfied my urge to create.

![](/assets/img/CwC-Tokyo/claude-buddy.jpg)<br/>
*The Claude buddy I picked up at the venue — so cute.*

My favorite little coda: after I got home, I used an M5 Cardputer (a tiny palm-sized computer) plus a skill Claude wrote for me, and made a Claude pet — a digital chick. After a whole day of hearing "how AI is changing development," the first thing I did at home was let AI help me raise a digital pet.

![](/assets/img/CwC-Tokyo/m5-cardputer.jpg)<br/>
*The M5 Cardputer — a computer the size of a business card; my digital chick lives on this.*

Thank you, Anthropic Tokyo. What I carried away was a whole day's worth of energy — about building, about possibility, and that grounded feeling of "oh, I'm not alone." The best events are like this: they won't finish thinking things through for you, but they'll make you want to get your hands moving — a carnival about creating. 🙏
