---
layout: post
title: We Borrowed the Buttons from Social, but Not the Premise
lang: en
category: Product/Learning
---

I've been writing this blog for years. I started on whichever platform was around at the time, then eventually built my own site at tzling.com, and over the last year or two I picked up Threads — shorter, more off-the-cuff, closer to how I actually talk.

Wherever I've gone, I've carried the same bug with me: I write about everything. PM craft one day, my tarot side project the next, life in Japan after that, then knitting. Most recently I've been deep in Claude Code and assorted dev work, and every so often I want to write about being a woman in this industry too.

Looking at the archive of this very site, you can tell: there's no consistent topic. But algorithms reward focused accounts. If you only post about AI, you get pushed to people who care about AI; if you only post about outfits, you get pushed to people who care about outfits. As someone who finds a lot of things interesting, sticking to one topic feels unbearable. So I've been doing what algorithms don't reward, but what I want to do.

Oddly, the account still works. Threads followers under three thousand, but posts (and even replies) regularly hit close to a million views.

Then last week, something happened. I tossed off a joke reply on Threads. Someone asked, "What are lazy people good at?" I answered, "Product management. Human nature is lazy, so you'll know how to plan products."

(The unstated observation underneath: you have to be actually lazy to find the core problem. A lot of efficient people are efficient because they're lazy. That's why they keep looking for the clever, one-shot solution.)

That post hit 500,000 views and 23.5k likes in three days. Not at all serious, and far past anything I've ever written with care.

The algorithm doesn't love what I do, I'm not chasing follower counts, and the account still works. That's odd enough. What's odder is that the post that took off wasn't something I wrote carefully — it was a one-line joke. I hadn't quite figured out what was going on, until I read Hikaru Kashida's piece, "Resistance Strategy Against X / I Started a Newsletter."

#### [Xへの抵抗戦略 / ニュースレター始めました](https://note.com/hik0107/n/n93effda921b9 )

Kashida used to be Head of Data Analytics at Mercari, and now works at Japan's Digital Agency. He wrote that piece because he just started a Substack newsletter to formally break with X. He lists three reasons for the break; the one that landed for me was the middle one: **X forces people to become "content-persons" (コンテンツ人間, literally "content-humans" — I'd rather call them "captives of traffic")**.

A "content-person" (captive of traffic) is the kind of account where the handle ends with "@The Person Who Does Things with AI," every post opens with "Don't know X? You're missing out," and the user has compressed themselves into a walking content factory just to be pushed by the algorithm. Kashida describes them as zombie-like, stripped of dignity.

Why does this happen? Because reach hasn't tracked followers for years. The number Kashida cites for X in 2026: **a post now reaches less than 3% of your own followers.**

Which is to say, following someone doesn't mean they can find you, and them posting doesn't mean you'll see it, unless they first compress themselves into something the algorithm wants. The 3% is the mechanism creating the pressure. The "captive of traffic" is what the pressure produces.

Reading that, I started to understand why my account looks the way it does, and why a lazy joke beat a carefully written post. The stuff I write carefully is more "content" (コンテンツ): structured, conclusive, designed to be saved. The lazy joke wasn't trying to be content. It was just me, talking. And the algorithm right now seems to prefer the latter.

So this article isn't a new observation for me. It's putting a sign on something I've been doing all along: Kashida and I are resisting the same thing in different ways. He left X and started a Substack. I'm staying, but I keep writing about knitting and product management on the same blog and the same Threads account.


(Oh, and I'm still fighting my AI co-writer over this draft. Every time it tries to land a "not X, but Y" sentence, I have to come up with something else.)


## Like, Inside a Marketplace

> like = 讚 = いいね — the heart button people tap to say they're into something

This article isn't only about the position of an individual creator.

Follow and like are primitives we borrowed from social media. On social media there's basically one kind of person: you're both reader and speaker, so an ambiguous button and an ambiguous follow relationship can hold together. But the platform I work on now is a marketplace, a flea market, a place where people sell their used things. The same button stops being enough, because there are three actors reading the same icon: buyer, seller, algorithm. Their motives often run in opposite directions.

The clearest example is like.

We designed the like (いいね in Japanese) for two jobs: feeding the recommendation and notification engines, and giving buyers a bookmark. On Mercari, like is even wired directly to price. When a seller drops their price, everyone who liked the item gets notified. But once that number is visible on the listing, sellers read it as something else: a public popularity meter. When an item accumulates a bunch of likes but doesn't sell, I've watched sellers delete and relist to reset the count. I've also watched sellers hold their price up exactly because the count is high.

These two behaviors reveal two things the original design didn't anticipate.

First, **social proof is non-monotonic**. A small number of likes is a healthy demand signal. A large number of likes paired with zero sales becomes a negative signal to new buyers: "if this many people looked and didn't buy, is it overpriced, is something off?" We turned a fundamentally perishable signal into a counter that only ever goes up.

Second, and more counterintuitive: **sellers read a high like count as "I have pricing power," but a high like count actually flags a cohort of price-sensitive buyers, people who want it but think it's too expensive**. So like is correlated with the right pricing move, just in the opposite direction from the seller's instinct. The market is saying drop the price; the seller is reading it as room to raise.

The same number: buyers treat it as a bookmark, sellers treat it as leverage, the algorithm treats it as engagement. Three actors read three different contracts off it, and the platform never said whose interpretation was meant to win.

A patch I've thought through: show sellers only a momentum signal ("N new likes this past week"), and hide the cumulative absolute count from them, so the design forces a split between "how many people want this now" and "how many people ever wanted it." I haven't tested this, so it's hypothesis, not finding.

Now follow. On a marketplace there's an interesting inversion: the "more followers, more sales" assumption that's broken on social actually starts to hold here.

In our internal data, B2C shops drive a non-trivial chunk of GMV through followers. For shops with large follower counts, certain categories see most sales bypassing search entirely; they happen straight through follower notifications.

But this needs handling with care, because most of it is **correlation, not causation**. Another internal experiment found that nudging users to follow sellers doesn't lift retention. A lot of follower count is just the shadow of "buyers who were going to be invested anyway." It's not a lever you can pull and expect to move things.

And if you measure follow against the "room" yardstick, what we have aren't rooms; they're N independent notification channels — buyer A follows seller B, can't see the other followers, doesn't talk to them. We've been using follow as a private broadcast list and calling it "relationship."

The social commerce players who are winning right now, the live-auction sellers and the group-buy operators, are doing the opposite. They build actual rooms. Live streams, real-time chat, regular show times. Follow there means "you, as a consumer, belong to this seller's room," and you'd help decorate it.

Last but not least, before we decide which of the three contracts to honor, we have to come back to a more basic question:

**Why do we care about these numbers in the first place?**

Every platform borrowed these buttons in service of what it really wanted. YouTube monetizes through traffic. Views, watch time, directly into ad revenue. So chasing views on YouTube is honest: the number and the goal are the same thing. Social media is similar; attention is what they sell.

But e-commerce doesn't want attention. It wants retention. It wants LTV. It wants the person who comes back to buy next time.

Because the goal is different, the same number means something different. A room people come back to is closer to what we actually want than a flow of traffic that floods past once.

So when we default to "more followers is good, more likes is good," we've imported someone else's scorecard for their business, and used it to grade ourselves, when we may not even need this scorecard.

And here's the upside we often forget: **as the marketplace operator, the recommendation algorithm and the follow function are both in our hands.** Both levers are tunable. We don't have to passively inherit the social-media scorecard. We can deliberately retune both toward what we actually want: let follow grow into a room that drives repeat purchase, and let the algorithm reward everyone inside that room, not just the one-time spike of attention.


## Back to the Individual

For an individual creator, like me running a Threads account, the situation is exactly the reverse. I can't see what the algorithm will do next, and chasing it is a losing game. The only thing that compounds is the quality of the content and the service.

My own choice is conservative: I'm staying on Threads, and staying on this blog, but I keep "don't focus on one topic" as the default. I'm probably never going to be the account whose followers explode, but I'm also not interested in compressing myself into "The Person Who Does Things with AI" or "Side Project @SaaS, $OO/month," that kind of captive of traffic.
