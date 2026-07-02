---
layout: post
title: A Traffic Detective Diary — Google's AI Overviews Ate Half of Ljusväg
lang: en
category: Product/Learning
---

I run a tarot site called Ljusväg (光途塔羅). Way back when ChatGPT first showed up, I'd already started digging hard into how to get AI to read tarot the way I do, and I got somewhere with it. But it was never my day job, so I let it slide for a while — a little guiltily. Then a couple of months ago I finally sat down to check on it, and got a shock: thanks to Google's AI answers, my site's visibility was down to a third of what it used to be, and still dropping at light speed.

That morning I opened ljusvag's Plausible and stared at the line for a long time.

Monthly unique visitors over the last 12 months: 34k in the summer of 2025, down to 8k by June 2026. And it didn't bleed out slowly. There are two clean cliffs in the middle: one across September–October 2025 (down 45% in two months), and another at the end of May 2026.

I never built this site to chase traffic in the first place. But a number like that, you just can't unsee. Especially when the person who stayed up late figuring out how to teach AI to read tarot was me, and the person who arranged and wrote all that content so Google would have something to index was also me — and now AI has turned around and eaten my visibility. That one's a little hard to swallow. So I decided to spend my evenings getting to the bottom of it. This is the record of two months of on-and-off repair work.

(PS: turns out I do still care about traffic. I even wrote about it recently in [Traffic, Inside a Marketplace](https://tzling.com/2026/05/29/traffic-inside-a-marketplace-en/).)

---

## Step one: impressions held, people just stopped clicking

My first move was to open Google Search Console and check whether my rankings had dropped.

The last 28 days: clicks at 5.5K, down 41% year over year — nearly cut in half. I expected to see the search rankings collapse right alongside it. Instead, over the same window, impressions were 213K, down only 14%.

I stared at those two numbers for a while before it clicked. Impressions is how many times Google showed my pages to people; clicks is how many times people actually came in. For those two numbers to split like this, there's only one explanation: my rankings hadn't dropped at all — my click-through rate had broken. Google was still ranking my pages up top, still showing them, people just stopped clicking after they saw them.

At that point I was already half-sunk, because a ranking drop you can still fix with SEO, but people not clicking, you can't.

The next question was the obvious one: **why aren't they clicking?** So I looked carefully at exactly which pages were losing clicks, and the answer was very tidy. The ones bleeding were all my SEO workhorse pages — the informational "what does tarot card X mean" type. The Moon, the Sun, the World, the Hierophant, every card-meaning page was down 15 to 20 points. The only thing going up was brand queries on the homepage: people searching "ljusvag / 光途塔羅" directly, up 6%.

Once I saw that combination — card pages down, brand queries up — I had a pretty good guess who the culprit was. A user asks "what does the Moon card mean," and the AI Overview at the very top of Google's results just hands them the summary. They've got their answer, so they don't need to click into my site. People who already knew me still came, but the path to picking up new readers through Google's own search was cut. All of this happened at the end of May, exactly lining up with that cliff on the dashboard.


---

## Step two: everything Google says is true, it just leaves some things out

Once I'd pinned it on Google's AI Overviews, I went and read Google's own blog post about AI search. Liz Reid says Google's AI summaries drive "higher quality clicks" — users are more engaged, they stay longer.

#### [AI in Search is driving more queries and higher quality clicks](https://blog.google/products/search/ai-search-driving-more-queries-higher-quality-clicks/ )

I went in ready to argue, then opened my own dashboard and realized I had no standing to argue, because she's telling the truth.

Every qualitative metric on my site is up. Pages per visit rose 22% — meaning people are browsing more, not glancing at one thing and bouncing. Average time on site is 4 minutes 6 seconds, up 11%. Bounce rate is down too, which means the people who stay really are more invested.

Google says AI summaries bring "higher quality clicks." My site's data confirms it.

The thing is, Google's blog post doesn't give you a single number. It won't tell you the price of that batch of higher-quality clicks: total impressions evaporated by half. The reason the click quality went up is that everyone who would've searched, glanced, and left got intercepted upstream by the AI Overview, so the only people who click through are the ones who genuinely want to go deep — precision marketing, that wonderful, wicked precision marketing.

---

## Step three: looking outward, turns out I'm not the only victim

By this point I got curious about whether this was a broad phenomenon. After reading through the industry conversation, the conclusion was this: what I ran into on my own traffic dashboard is actually something shaking the entire search ecosystem.

Per Ahrefs data from February this year, when a Google AI summary appears, the CTR of the number-one result drops 58%. And Pew's research shows that when an AI summary appears in the results, only 8% of people click a traditional blue link, versus 15% when there's no AI summary. Zero-click searches are now as high as 60%.

I'm just a nano-sized speck of traffic, but plenty of big content producers are already trying to fight back against Google's dictatorship. Penske Media (parent of Rolling Stone and Variety) and Chegg have both sued Google. The European Publishers Council filed an Article 102 antitrust complaint with the EU.

#### [European Publishers Council files formal antitrust complaint against Google over AI Overviews](https://www.epceurope.eu/post/european-publishers-council-files-formal-antitrust-complaint-against-google-over-ai-overviews-and-ai )

A German court ruled in June this year that Google is liable for erroneous content its AI summaries generate. Cloudflare, since last September, blocks AI training crawlers by default on new sites, and has rolled out a Pay Per Use scheme to make AI pay for the content it consumes. Roughly a third of publishers are preparing to block Google's AI.

#### [Cloudflare Moves To Make AI Pay For The Content It Consumes](https://www.forbes.com/sites/sandycarter/2026/07/01/cloudflare-moves-to-make-ai-pay-for-the-content-it-consumes/ )


---

Underneath it all is a very simple paradox. For thirty years, creators and search engines had an unwritten deal: I supply content, you send me traffic. When AI just says the whole answer out loud, that trade breaks. Making content stops paying off, so nobody makes new content, so AI has nothing new to learn from. Noema calls this "the AI-powered web eating itself."

#### [The AI-Powered Web Is Eating Itself](https://www.noemamag.com/the-ai-powered-web-is-eating-itself/ )


---

## Step four: I wanted to block Google, then realized I don't have a negotiating table

After all that, my first reaction was the same as everyone else's: fine, I'll block them too — robots.txt, shut every AI crawler out, no more free lunch.

But I sat with it for a few days, and worked out that blocking is a terrible move for a site like mine.

For big content businesses (honestly I don't know the Chinese term — publishers, basically), blocking Google's AI crawlers makes sense, because they block in order to get a seat at the negotiating table. Google can't do without Rolling Stone's content, so blocking is leverage, and it buys them licensing fees. I don't have that table. If ljusvag blocks AI crawlers, the only outcome is that I disappear from the answers AI gives, and I get nothing in return. Users will still ask "what does the Moon card mean," AI will still answer, the source it cites just won't be me anymore.

The day I worked that out, my whole decision flipped: if the volume isn't coming back, I won't fight for volume. I'll make ljusvag the easiest source for AI to cite, and treat AI as a free distribution channel. Everyone else is closing the door. I'm opening mine.

---

## Step five: in a single day, I built out the whole crawler-facing layer

Direction set, the rest was just doing it. This part I did fast — all of it live within a day. (Thank god the Claude Code Fable 5 model is back.) I wanted to see what this would actually produce.

My one hard rule was to change nothing on the pages users see, because this battle has nothing to do with them.

- FAQPage schema: 79 card-meaning pages, each auto-generating about 22 Q&A pairs, feeding "what does this card mean" straight to the crawlers as structured data.
- /llms.txt and /llms-full.txt: a full-site corpus index for LLMs, basically doing their homework and leaving it at the door.
- robots.txt with explicit welcomes: GPTBot, ClaudeBot, PerplexityBot — ten AI crawlers, named and welcomed one by one.
- An AI-crawler access logger: recording who comes to feed, and what they eat.

Along the way I hit a small bug that's honestly pretty funny. Every time my sitemap got requested, its lastmod auto-wrote to "today." Which means it was lying to every crawler, claiming every page had just been updated today. I fixed it to use the real modified date — and then a deploy washed it right back, because git checkout doesn't preserve file timestamps, so one deploy turns every date into the current day. The final fix was to pull each page's real date out of the git history and store it in a JSON that travels with the code. To avoid lying to crawlers, I went three layers deep.

When it was done, even I found it a little absurd. Years ago I stayed up late figuring out how to teach AI to read tarot my way; then AI turned around and ate my visibility; and now I've personally thrown the door open and invited the AI in to crawl, one bot at a time. And I built the whole thing with AI tools (Claude Code wrote it for me).

(A big loop back to teaching AI to read my cards — except this time I wised up and put the homework right in its mouth.)

The last thing I did was swap out my KPI. I used to watch "clicks," now I watch "citations."


---

## A month later, what I've been thinking

After chasing this for a month, I landed on a few thoughts.

That curve from 34k to 8k — I know full well it isn't coming back. This wave isn't anyone doing something wrong; the "content for traffic" model itself is already dead. But if this post is this long and you've read this far, here's your easter egg: even if one day this blog stops getting found by anyone, I'll keep writing. Not for any reason. For the dignity of being a person, I guess.

Would anyone still believe me if I said I'm typing this at 11pm in a Cursor tab, right after getting out of a company all-hands?

Anyway.

The biggest shift in my head is that I stopped seeing content as the product and started seeing it as bait. The job of Ljusväg's card-meaning pages is to get AI to cite me, to let people who don't know me yet find out ljusvag exists. The real wall is the experience AI can't give: my users pull 14 cards each on average and stay for 4 minutes, and that process can't be summarized by AI. The real moat is the channels I own that run through no algorithm at all: the people who come back every day, email, the app. That traffic — no platform gets to decide one morning to shut it off.

As for me, this month of effort all went into turning that 8k floor into a piece of ground that "no one else gets to switch off." Whether the curve comes back is out of my hands. I'm only sure of one thing: don't bet your life on someone else's property again.

The version of me who researched how to get AI to read tarot probably never imagined that one day I'd have to find a different way to do the very same thing. Though this time too, I don't know if it's the right one.
