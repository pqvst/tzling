---
layout: post
title: Google Data Analytics 值不值得上——下半場回顧 (Course5-8) + 總結
---

距離上次寫完這篇[〈GOOGLE DATA ANALYTICS 值不值得上——上半場回顧 (COURSE1-4)〉](https://tzling.com/2022/06/14/About-Google_Data_Analytics01_zh-tw/)居然已經過了一年多。

其實在去年夏天我已經完成了5-7堂課，但因為要搬家加上MBA課程負擔太重了，就決定先中止課程，這篇心得也就跟著躺了一年，在這段期間中也不知道為什麼，前一篇點閱非常踴躍，也收到了不少回饋，這也激勵我要趕快回頭把R語言和Case做完。

來複習一下，這堂課總共有以下八堂：<br/>

●Foundations: Data, Data, Everywhere <br/>
●Ask Questions to Make Data-Driven Decisions <br/>
●Prepare Data for Exploration <br/>
●Process Data from Dirty to Clean <br/>
●Analyze Data to Answer Questions <br/>
●Share Data Through the Art of Visualization <br/>
●Data Analysis with R Programming <br/>
●Google Data Analytics Capstone: Complete a Case Study

這篇文章會集中寫下半場的心得，以及結尾。

<br/>

## 數據分析課如何幫助業務/商務工作？

我的答案是肯定的。實際上我很享受上這堂課的過程，而且每個禮拜在自己排定的上課時間都很期待上課，除了跑完進度表本身很有成就感，上課的內容也很有趣。

在寫完上一篇心得之後，我到各平台搜尋數據分析相關文章，大多數相當技術性，少部分談到職涯，我想必須聊聊為什麼我會想上這堂課。

其實最早上這堂課，是因為在做管理跨區經銷商的業務工作時，有很多問題我無法**有效率的解決**，這些問題橫跨管銷存及商務範疇。在日常工作方面，我需要頻繁且大量分析每個產品品項的市場需求，並且需要顧及新舊產品汰換時機、產品週期、生產Lead Time與季節性、銷售檔期等各種要素。

雖然在和許多資深前輩、長官聊天的過程中，大概可以了解到有哪些方法可以操作，幾年工作下來自己也找出一些心法來解決部分問題，但這些終究偏向人工和經驗導向，不但很難複製，也不容易轉移到不同區域使用。久而久之在面對同事和長官詢問如何經驗傳承時，我常常不知所措，所以當時就種下把自己的工作系統化的想法。只是當時我對工具的認知非常少，只知道公司有IT部門可以開發Dashboard和報表，但具體來說要如何寫這些工具的開發表並且有效運用，其實我經常是「遇到了再說/遇到了再改」。

<br/>

舉例來說，要管理一個新國家的庫存，業務單位應該要看到哪些內容才能及時review向工廠下單的時間？並且能確保庫存不會補充太多導致日後賣不出去形成呆料？在不熟悉工具開發邏輯以及分析邏輯的時候，我們依據經驗會覺得必須要能精準預估客戶需求，還要能反映工廠交期、運送時間，並要能有功能設定庫存水位(在儲存空間有限的場合，可能還需要設定庫存限制)。

前幾項人工還算可行，但設定庫存水位的部分就很傷透腦筋了，是要用過去銷售歷史紀錄來計算呢？還是要製作未來趨勢預估報表+歷史紀錄合併分析，但又是哪一種方式更精準有效率呢？我想對這份工作有些經驗的夥伴們都能體會，預估市場需求經常像賭博，我們經常開玩笑說要回家睡一覺，做夢說不定會夢到 哈……。


於是這份報表，一下要改成用內部訂單數去計算，一下要改成通路實際銷售數量去計算，沒有人知道什麼邏輯才是最有效率、準確性最高的。另外還經常會遇到一種狀況是：開發出來的工具，所顯示出來的數字似乎不合邏輯，或是與其他來源的資料對不起來。

在工程開發資源有限的狀態下，如果一開始沒有想好要分析的邏輯，在開發出了不適合的報表之後，往往那份報表會變得乏人問津(浪費了開發資源)，或者需要人工再做修改(浪費實作人力)，相當不切實際。而針對第二種情況，在不了解資料工具如何開發之下，也很難釐清問題點。

後來公司新設了行銷分析的部門，在和他們的交流中，我才知道有這樣的一門學科，且這些技術其實不僅限於行銷分析數位廣告效益使用，也並不是希望變成資料工程師才需要學。這讓我對這堂課產生了興趣，我希望這堂課能幫助我了解分析實務，補足我以前學業背景完全缺乏的商業分析理論。而實際上了以後，也發現這堂課的確符合我的需要，雖然不是直接的直面我的問題，但提供了我很多**使用**資料的方式，而我過去的工作經驗，也很能幫助我理解這門學科。


## Course 5- Analyze Data (SQL)

上次提到我喜歡解SQL的問題，到了Course 5——Analyze Data to Answer Question的時候，就有更多機會可以學更多使用SQL的範例和一些基礎的概念。這部分我想對純文組出身的人(例如我) 來說，一開始都像天書一樣，不過我很快發現，它的核心概念和Excel幾乎是異曲同工，只是它可以一次處理更多資料，方便整合重組、篩選、排列……實現各種複雜需求。


當然這堂課中也有一些*花式炫技*的部分，不過整體來說這堂課的目標還是維持在「師父領進門，修行在個人」的主軸，沒有帶過太多複雜高深的案例。

我覺得可以把它想成是煮菜，每個人都可以用不同的方式來煮排骨湯，差別是用料精不精緻、花費的時間多寡、美味程度，不過終究都能做出一道排骨湯。

套一句我喜歡的主廚白鍾元說的話：

「這裡用高級的辣椒粉會超棒，但沒有也沒關係，家裡有什麼就拿來用，也會很好吃。」

實際在操作資料的時候，有些人喜歡在Excel使用複雜的綜合函數，在一個格子裡面一次做完想要的條件篩選和計算，最後再做格式化標示，整個報表看起來就會漂漂亮亮。但像我這樣眼殘沒藥醫的人來說，我會寧可用多個欄位分別做不同的計算再組合起來，方便之後檢查公式有沒有寫錯或跑掉，這樣也是可以，並不會影響結果。

而SQL以我目前粗淺的了解，其實大方向也是這樣的，裡面有很多功能都可以遇到再學，或是針對自己最需要的部分鑽研，網路上有非常多案例和資源：

**SQL 資源**：
> [SQL語法](https://www.1keydata.com/tw/sql/sql.html)
>[SQL](https://www.w3schools.com/sql/default.asp)

<br/>

用這樣的心態開始上這堂課，就開始覺得沒有想像中的有距離感了，原來我也有辦法回答課堂上所有SQL習題，覺得非常好玩。雖然我對SQL這項工具的使用了解得非常淺，但那天和人聊到網站的登入機制，我才發現，咦，註冊的功能就是SQL的寫入！而每次會員登入在做的事情就是讀取！除了這個以外，如果你做一個網站來表列搜尋結果，那個叫出資料的過程，也是用SQL，也是要select 需求欄位 from 某個dataset，這種感受和學語言突然聽懂別人說的話一樣非常讓人興奮。

<br/>

### Course 6——Google 簡報課

而下一部分的圖表視覺化就更有趣了，基本上就是順便上一堂簡報課，雖然聽起來有點貧乏或是老調重彈，但我自己覺得用來評估一下自己的簡報內容也是很不錯的。

我常常覺得公司裡的分析師非常厲害，同樣的資料到他們手上可以變成非常清晰的圖表，圖表的類別更是各種各樣，在這堂課上也會介紹到。有些看似基本的概念其實意外實用，像是Decision-Tree教你要挑哪種圖表，還有David McCandless提到的圖表視覺化四要素，可以幫助我們日後做簡報的時候檢查圖表有沒有夠有力：

Information (data)
Story (concept)
Goal (function)
Visual form (metaphor)

另外也提供了一些步驟或小技巧來幫助我們做更簡單易懂的簡報，不過整體來說，Tableau的教學算是非常基本，有興趣的話可以多拿點實際的素材自己到Tableau上玩玩看。

>PS: Tableau免費版只能選擇資料都要公開發布，如果有隱私相關考量，就可能往下鑽研下一堂課，用R來視覺化圖表。


> 這堂課裡面有提到Bias和Data Science Ethics (資料分析的道德?) ，其中一段提到Misrepresentation(失實陳述)，講得很清楚也很好用！可以用來戳破一些圖表故意製造出來的假象，例如前陣子很紅的**萬物皆可變成折線圖**還滿好笑的，但不是什麼時候都可以亂畫折線圖啦。可以參考看看這個影片：[Misrepresentation
](https://www.youtube.com/watch?v=C_-rTKfswUI)，其他參考資料：[Data Science Ethics](https://datasciencebox.org/02-ethics.html)


<br/>

### Course 7——R 語言

我猜想看到這裡的人，應該對這門課做了很深入的「調查」了，R語言是數據分析使用的程式語言，可以用來做數據整理以及視覺化、建模組等等，並且在查資料的過程中，應該也會看到很多人說：「為什麼要學R？」、「有那個時間不如去學Python」，原因是Python也能用來處理這些事，而且用途更廣泛，不僅限於資料處理。

> 2023的現在，Google又launch了Advanced的課程，就有包含python了，我還在考慮要不要上：[Google Advanced Data Analytics Professional Certificate](https://www.coursera.org/professional-certificates/google-advanced-data-analytics)



而我之前因為好奇 Programming，已經在 Codecademy上學了一點 Javascript的皮毛和 How to code，既不算是從零開始，也不算有任何語言的基礎。對我來說，學習兩種語言（R、Python）的機會成本是差不多的，而且正如同以前學日文的時候覺得不如韓文也一起學起來一樣，因為系統相同，學起來應該是相輔相成。


*--中場分隔線--*

(以上是2022年的我寫的，以下開始是現在的我寫的哈。)


經過這半年以上的時間，我中間除了MBA課程以外也做了別的專案，回過頭來後又更感覺Google的教法真的是**手把手**在教，連怎麼安裝都教好了，code也都寫一半給你了，飯直接餵到嘴巴邊！考試的時候寫一行code就好了還不親切嗎？我真心覺得非常喜歡，因為與其鑽研code怎麼寫，我還真的是比較想學Google裡面這些天才都是「怎麼**用**code」。


不過學習體驗應該也很吃學生熱忱，你可以選擇把影片都看過就好，但也可以選擇真的安裝Rstudio、開啟R Studio Cloud去做題目。它準備了非常多dataset可以供練習，Hands-on activity再要你填答執行完作業之後做出的答案，這還滿符合學校上課的感覺。

*Rstudio-Cloud畫面*<br/>
題目和解答都有提供，照著跑和稍微改參數就能做完<br/> 
<br/>

![](/assets/img/Data/Rstudio_lesson3.jpg)<br/>

至於難度，我覺得先上SQL再上R還真是滿有道理的，這樣上完以後R真的比較**反直覺**，我對怎麼frame一串資料來參照還是很苦手。

另外，下半場的難度更高的關係，英文對某些人來說可能會更吃力，只是這樣的過程大概只會維持兩週，到寫R Markdown的時候又輕鬆回來了。

(畢竟我已經用Markdown寫了好久的部落格了呀:) )


<br/>

> VS Studio 也可以用來寫Rcode! [R in Visual Studio Code] (https://code.visualstudio.com/docs/languages/r)

<br/>


然後隔了大半年回來，覺得最開心的是有ChatGPT的助力，可以去問它為什麼要這樣寫。只是Google也為了避免學生作弊，補強了防護措施，現在多了責任聲明要簽，也禁止在assignment頁面使用複製囉！

*想要copy 字串直接使用在題目裡面也是不行的，通通都要自己打：*<br>
![](/assets/img/Data/Copy.jpg)<br/>



## Case Study

Google Data Analyics這堂最後要求做的Case study概念其實跟商學院的Case Study很像，都是一個problem solving 的過程，在這裡用的是Data Analysis Phases，這在產品管理上也很有參考價值。

● Ask-詢問stakeholder/聽者的問題和挑戰在哪裡？定調這個分析想解決的問題。<br/>

● Prepare–決定想要的分析作法，我自己喜歡先找出issue tree和hypothesis再訂定優先順序。<br/>

● Process—開始分析，從清理資料開始，到建立資料分析的基準，這個階段要確保Data Integrity，了解資料來源，以及避免bias

● Share—分享分析結果帶來的Insight給stakeholder，可以提供目標行動，以及討論其中的取捨，以及日後可以分析的方向

● Act—依據分析結果採取行動，例如針對分析產出的目標觀眾投放廣告。

我也實際跟著做了Wellness Product 的Marketing Strategy Case，對我來說特別有趣的是，這個案例跟以前做過的產品方向是一致的，做起來有似曾相識的感覺。

只是用R來整理資料，一開始的確滿困難的(我覺得比SQL難)，這讓我會有點心虛，拿到證照以後還要多練習才能真正勝任需要R的工作吧。


<br/>

## 其他的幫助

這堂課的意旨也很明顯，就是幫助學員**找到工作**，尤其是資料分析相關的工作，所以也會教你怎麼做data相關的portfolio，以及和該怎麼把這堂課學到的知識轉換成為履歷上的才能。這部分對寫英文履歷幫助很大！尤其是歐美越來越多公司會用ATS來過履歷了，有沒有用對字眼對通過第一關書審真的很重要。

*Google建議的CV用字：*<br/>

![](/assets/img/Data/careerguide.jpg)<br/>

Google認為好的資料分析Portfolio應該是**Simple, Unique, Personal**，帶有一點個人個性和色彩的資料分析視角感覺更受Google人青睞。


接著當然還有找工作的方法和面試準備。我很喜歡這堂課提供的Case Study面試影片，案例很有趣，表演應答的資料分析師發表也很清楚，呈現了Google喜歡的資料分析師樣貌。更重要的是，這個Case其實就是在做產品經理正在做的事，包含了假設、分析、決策(設計方向)、時程表，還拋出了額外的發想路線，很精彩！

<br/>

> Google 提供的這個machine learning 面試工具還滿好用的，會記錄你所說的內容，並給出調整建議： [Interview-warmup](https://grow.google/certificates/interview-warmup/)


最後就用其中一位講師的話來作結吧：

*"One of the best pieces of advice that I still think of is that it's better to get speeding tickets than parking tickets.  Especially means as a data analyst is sometimes you have to jump into situations that you're not totally comfortable, and you need to learn your way out of it and collaborate your way out of it."*

<br/>

*(我始終覺得一個最好的建議是：與其拿到停車罰單，不如拿到超速罰單。意思是作為一個資料分析師，有時候你不得不投身在自己不完全熟悉的環境中，但你要找到自己的方法，並透過合作來擺脫困境)*



最後會收到這樣的一個證照：

![](/assets/img/Data/certificate.jpg)<br/>


至於有沒有用，之後有機會再分享~


----

**延伸：Google相關部落格文**

●[〈GOOGLE DATA ANALYTICS 值不值得上——上半場回顧 (COURSE1-4)〉](https://tzling.com/2022/06/14/About-Google_Data_Analytics01_zh-tw/)<br/>
● [譯者可以用GOOGLE翻譯嗎？](https://tzling.com/2021/12/10/%E8%AD%AF%E8%80%85%E5%8F%AF%E4%BB%A5%E7%94%A8Google%E7%BF%BB%E8%AD%AF%E5%97%8E/)<br/>
● [為什麼還是會投GOOGLE關鍵字廣告？](https://tzling.com/2023/05/26/Google-Search-ads-cn/)



