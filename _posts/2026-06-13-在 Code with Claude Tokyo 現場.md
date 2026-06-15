---
layout: post
title: 在 Code with Claude Tokyo 現場
category: 產品/學習
---

上週去了 Code with Claude Tokyo ⛩️ Conference的現場。票是好幾個月前就要報名抽的，光是收到確認信就覺得夠幸運了。但讓我意外的是——走出會場時，我比進場時還要更興奮。

報到排隊的時候我下意識掃了一圈，盛況空前，不到八點半，隊伍已經塞滿整個長廊。我一路往隊伍盡頭走，怎麼看都只有我一個女生。那一刻有點微妙，覺得自己有點突兀。

![](/assets/img/CwC-Tokyo/badge.jpg)<br/>
*終於拿到 badge*

會場在 Fairmont Hotel，這是一家2025年七月才開幕的飯店，落地窗俯瞰東京灣跟彩虹橋，是港區新景。Code with Claude的現場陳設從大到小都藏著巧思，主視覺的調性完整到一個程度，完全看得出來Claude想講的不只是「我們技術很強」，而是連美學都想一起顧好，這點從它們的模型名稱也可以看出一點端倪——haiku俳句，多有文學氣息呀。Claude用簡單符號拼成的主視覺，就和十字繡一樣，讓喜歡編織的我覺得格外親切。

![](/assets/img/CwC-Tokyo/poster-wall.jpg)<br/>
*Code / Pair / Think / Build w/ Claude——連海報牆都是同一套編織感主視覺。每個人都可以帶走一張，還有隱藏版海報。*

---

進場前，我在門口巧遇了偶像 Cat Wu，Claude Code 的Head of Product。

我太緊張了，整個語無倫次。沒能好好跟她說我有多喜歡 Claude Code，也沒講出什麼有意義的 feedback，腦袋一片空白。但她人真的超級好，願意停下腳步，跟一個語無倫次的陌生人分享幾句。

唯一的遺憾是——我緊張到連一張合照都不敢開口要。跟喜歡的人要合照這件事，怎麼永遠這麼難呀。

---

## 開場：一個剛誕生、又馬上被按下暫停的模型

開場 keynote 從最新的模型講起。就在活動前一天（6/9），Anthropic 才公開發表了 Claude Fable 5 與 Mythos 5——第一次把 Mythos 等級的能力開放給一般人用，活動當天當然也熱熱鬧鬧地再次發佈了新模型。我當天回家就馬上用了，Fable 5 雖然跑起來慢了一點，但把事情做得更好更精緻了，體感上需要補充的事項更少。

![](/assets/img/CwC-Tokyo/mythos5-butterflies.png)<br/>
*Fable 5／Mythos 5 的主視覺——用一群蝴蝶拼成的「5」。（圖：[Anthropic 官方](https://www.anthropic.com/news/claude-fable-5-mythos-5)）*

只可惜就在我寫這篇的當下（6/12），美國政府以國家安全為由，對 Fable 5和 Mythos 5模型下了出口管制指令，要求停止對任何外國人開放存取。Anthropic 因為沒辦法即時過濾使用者國籍，目前乾脆把這兩個最強的模型對所有人都關掉了。這大概是史上第一次，一個已經公開上線的模型被政府直接喊停。在會場第一排聽著新模型發表、幾天後就被限制使用，真的很無奈。


> 資料來源：[Anthropic 官方公告](https://www.anthropic.com/news/claude-fable-5-mythos-5)、[The New Stack](https://thenewstack.io/us-gov-orders-anthropic-to-pull-fable-5-and-mythos-5-three-days-after-launch/)、[NBC News](https://www.nbcnews.com/tech/tech-news/anthropic-suspends-new-ai-models-fable-mythos-government-directive-rcna349901)

---

## 正在大量導入AI的日本公司

回到現場。讓我整個人精神一振的，是開場提到我任職的公司 Mercari，因為導入 Claude、生產力提升而被特別點名。全場被點到的企業只有兩家，另一家是高度導入的 Rakuten。這一年期間在公司內部參與多次AI Camp，擔任非技術人員的技術指導，從旁看到AI如何快速滲入所有工作流程，那個變化是巨大的。

到了最近，大家對導入AI的排斥已經減少了很多，即使在比較難以檢核的領域，大家也願意先用AI來起草稿或嘗試新流程。

不免又要提及，chatGPT剛普及時，當時我還對AI的發展半信半疑（在這個部落格也可以找到關於翻譯相關的文章），但短短幾年，親眼看到AI如何大量、輕易的簡化工作流程，我也早已成為信徒。


![](/assets/img/CwC-Tokyo/stage-pink-codewclaude.jpg)<br/>
*開場前的舞台*


![](/assets/img/CwC-Tokyo/fuji-claude.jpg)<br/>
*為日本特製的像素富士山主視覺，可愛到我盯著看好久。*

![](/assets/img/CwC-Tokyo/mercari-98-1.jpg)<br/>
*看到自己公司被點名的那一秒。*

---

## 走廊上的對話

聆聽主舞台活動到一半，發生了一件很奇妙的事。我在脆（Threads）上即時貼出的現場照片，被一位從 Meta AI 轉到 Anthropic 的工程師Chao Shuai看到，於是我們有機會在會場外閒聊。這段對話給我的啟發，可能比當天任何一場 session 都大，也證實了很多「聽說」。

**「我們已經不寫PRD了」** 

我最近其實一直被一件事困擾：PRD（Product Requirements Document，產品需求文件）、RFC（Request for Comments）／design doc（設計文件），跟實際 implementation 之間的界線到底在哪？該寫多細、什麼時候才開始動手寫 code？QA又應該以何為依據來驗證、做regression測試？

ChaoShuai（超帥？）說，Claude 內部現在幾乎已經不寫 PRD 了。多半是把目標寫清楚，就直接讓模型產出好幾版，不停 eval、不停 release，有問題隔天就修好。背後的邏輯是：過去寫code很貴，所以你得先花大把時間評估「到底要寫什麼」；但現在 code 已經是低成本的東西，與其評估半天，不如直接寫出來看。

這裡我想幫自己、也幫讀者打個暫停。

Claude 本身就擁有模型，對他們來說燃燒 token 幾乎沒有成本，這個前提對一般企業並不成立。對多數公司而言，長遠看 code 的成本未必會降低；但 AI 確實大幅加速了開發速度。所以真正的功課，不是把「先別想、直接寫」照抄過來，而是去改造開發流程——把力氣放在怎麼讓 review 和 QA 跟得上這個速度，而不是把暴增的負重，外包給下游部門去扛。

另外產品經理也更應該把精力放在framing什麼事情該做什麼不該做，即使假設可以跑出無限的code，我們也應該要有辦法預估和評估事情的成功。正如同我之前在《[你最強的 PdM，其實悄悄是兩個人](/2026/05/09/你最強的-PdM-其實悄悄是兩個人/)》這篇文中寫的一樣。

這點我還沒有答案，但碰巧幾位後端工程同事也在現場，就拉著他們一起聊，果然大家都吐了一點苦水。在一個MAU極大量、同時兼備金融產品的平台上，我們其實有點動輒得咎。忘了在哪裡聽到，有人甚至說那麼——不如也不要重構了，就叫AI重寫吧。

大家苦中作樂，開玩笑的。

---


## 模型的 effort 與 token 效率

下午我繼續參加了Code with Claude談effort與token效率的講座 (Thinking of Lever)，這場給了我一個其實很樸素、但我很喜歡的想法：

未來我們也許不再是「自己去評估模型好不好」，而是參考模型的成效，給它清楚的目標跟一組期待值。比如一件簡單的小事，我可能只需要 60% 的準度、但要快——那就選一個比較低 effort 的 model；反過來，攸關重大的決策，才動用最強、最慢、最貴的那一檔。

會後我跟講者Donny Greenburg聊了一下。我說在公司內部當產品經理，我們在導入AI在某些功能上時，還是需要去評估AI模型的成本，但我們很難去界定在什麼樣的功能應該採取什麼樣的模型，我是否應該也不要讓用戶指定，而是從用戶想得到的目標來推薦模型？

他給我的回應是，也許更應該把任務切得更小，這樣更容易評斷effort和目標的關係，把模型當成一個有不同檔位的團隊去調度，而不是每次都把馬力開到最大。

![](/assets/img/CwC-Tokyo/slide-3-effort-levels.jpg)<br/>
*同一個模型、三種 effort 檔位——這張讓我想了很久。*

講者用同一個題目現場示範：請 Claude Opus 4.7 寫一個「單向道紅綠燈」的模擬。把 effort 從 low 一路開到 max，你會清楚看到——開到多少槓桿，模型就模擬到什麼程度，而代價（時間和 token）也跟著翻好幾倍。

![](/assets/img/CwC-Tokyo/effort-lane-low.jpg)<br/>
*Low effort：50 秒、4,602 tokens——只跑得出色塊在虛線上移動的陽春版。*

![](/assets/img/CwC-Tokyo/effort-lane-high.jpg)<br/>
*High effort：111 秒、9,826 tokens——開始有像樣的車道線和車子了。*

![](/assets/img/CwC-Tokyo/effort-lane-max.jpg)<br/>
*Max effort：593 秒、52,893 tokens——直接長出一條有城市天際線、完整路口的模擬車道。*

---

## 自己做的電子雞

當天晚上有 after party。東京灣的夜景配上更多的AI talk。很久沒參加這麼好玩的活動了。Claude buddy超可愛，能參與到這些，都覺得太幸運了，IT world需要很多這種人性化的東西。

![](/assets/img/CwC-Tokyo/tokyo-bay-1.jpg)<br/>
*從 Fairmont 的落地窗望出去，東京灣的黃昏剛要轉夜。*

![](/assets/img/CwC-Tokyo/tokyo-bay-2.jpg)<br/>
*再往彩虹橋那一頭看一眼。*

![](/assets/img/CwC-Tokyo/venue-setup.jpg)<br/>
*會場佈置：木質畫架配上編織感的 Code w/ Claude 海報，連大廳一角都很講究。*
<!-- 圖：扭蛋 — 不在活動照裡，待補（可能在手機其他相簿）；party 點心桌另有 dessert-table-1.jpg / dessert-table-2.jpg 可用 -->

---


活動結束後，我和一群台灣來的 AI 社群朋友續攤到居酒屋，一路大聊特聊。那個晚上我異常亢奮——因為桌邊坐著好多完全沒有 coding 經驗的人，卻各自用著五花八門的方法，去解決自己生意上真正卡住的問題，每個人都充滿熱情。

我一直覺得，開發 side project 是一件很孤獨的事。我在 Threads 上偶爾寫到 vibe coding，也很常被工程師鄙視或質疑。但在那張居酒屋的桌子旁，我忽然沒那麼怕了。對我來說，這真的是創造最好的時代——我想開發什麼就開發什麼，想改什麼就改什麼，甚至也不用想怎麼賺錢，AI部分滿足了我的創作欲。

我們的目標不一定要是取代誰，而是從中找到自己想做的事。


![](/assets/img/CwC-Tokyo/claude-buddy.jpg)<br/>
*現場拿到的 Claude buddy，超可愛。*

最後一個小插曲：回家之後，我用 M5 Cardputer（一台超迷你的掌上電腦），加上 Claude 幫我寫的一個 skill，做了一隻 Claude 寵物電子雞。忙了一整天聽各種「AI 怎麼改變開發」，結果回家做的第一件事，是讓 AI 幫我養一隻數位寵物。以及玩Claude skill給的貪食蛇。

![](/assets/img/CwC-Tokyo/m5-cardputer.jpg)<br/>
*M5 Cardputer——一台名片大小的掌上電腦，我的電子雞就養在這上面。*

謝謝 Anthropic Tokyo。我帶走的，是一整天累積下來的能量——關於開發、關於可能性，還有那種「原來我不孤單」的踏實。最好的活動大概就是這樣：它不會幫你把事情想完，但會讓你更想動手去做，是場關於創作的狂歡。🙏


