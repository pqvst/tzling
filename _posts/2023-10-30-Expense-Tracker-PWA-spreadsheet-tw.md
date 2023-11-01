---
layout: post
title: 用PWA串Google Sheet做個人記帳工具——不用做Native App也可以跨iOS、Android平台
---

我和P一起用過了幾個記帳系統，一開始用的是[**Settle Up**](https://settleup.io/)，這個App非常推薦給情侶、旅伴、家人使用，每筆消費都可以個別紀錄是誰付、要跟幾個人分帳。每筆輸入完以後都會自動更新當下誰欠誰錢，從此都不用擔心帳算不好會吵架。

但是這個App的主要功能是用來分帳的，在我們後來有更多儲蓄和消費分析的需求時就不敷使用了。後來我們也嘗試用了[**Wallet**](https://budgetbakers.com/)，但還是有美中不足的地方，例如一選擇了某個幣值，之後想改就要重新開一個群組，這對經常旅行的我們來說非常不實用。

後來我們仔細想想，其實我們最需要的功能很單純，只需要

1.  能分類消費內容<br/>
2.  可以跨我的iOS (iphone)和他的android（三星）使用<br/>
3.  可以即時推播對方消費內容<br/>
4.  資料不是存在某個App資料庫，不需另外下載

於是P就開始研究怎麼用最簡單的方式完成這個需求，後來發現最新的PWA架構也可以加入推播功能了，於是就開始動手做這個記帳工具。因為這個作法可以有更多運用也很容易導入，我徵求了P的同意，決定來寫一篇中文來分享給想用PWA串Google Sheet的人。


> * 英文原文在這裡：[〈One Day Build-Expense Tracking〉](https://pqvst.com/2023/10/23/one-day-build-expense-tracking/)
> * 後來我就發現可以用來做我的線材紀錄、追蹤工具，非常有用！看這裡：[毛線紀錄工具](http://tzling.com/2023/10/31/yarn-tracker-tw/)

<br/>

## Problem

在使用上述的App發現不符使用需求以後，P首先建了一個Google Sheet，但我們其實都是長年記帳者，深知用spreadsheet記帳的優缺點。我曾經連續三年使用excel來記帳，但發現不能即時記帳就是造成資料缺漏、失去記帳動力的主因，所以後來[**秒速記帳**](https://apps.apple.com/tw/app/%E7%A7%92%E9%80%9F%E8%A8%98%E5%B8%B3-1secmoney/id926076608)成了我的個人記帳主力工具。這次在研究這個問題的時候，我們也一起提出最好能有一個能簡單即時輸入的管道。

<br/>

## Solution

首先他花了一個晚上開發這個PWA，PWA就是漸進式應用程式（Progressive Web Apps），使用時不需要從App Store或Google App下載，只要用手機的瀏覽器（Safari, Chrome...etc)就可以開啟，再配合瀏覽器原本就有的**加入主畫面(Add to Home Screen)**就能當成一個簡單的App來使用。

*加入主畫面之後，就會在手機桌面上找到Icon:*<br/>
![](/assets/img/PWA-expense-tracker/homescreen.png)<br/> <br/>

### Web-based for cross-platform 用Web app解決跨平台問題

用網頁based app最大的好處是解決了我們各自使用不同手機系統的問題，這是個最簡單能跨筆電、Android、iOS三方的最小可行作法，如果做成原生App(native app) 就需要在App Store，Google Play分別上架，需求和成本不合比例。

從工程面來看，PWA可以直接簡單推送更新這點更是最直接的好處，未來管理更新也很省時省力。另外web的科技也越來越強大了，operating systems的進展雖然比較慢，但也開始漸漸提供更容易的環境給web tech和PWA(甚至iOS上也是，或者像是Mac上現在也可以將PWA加到Dock上了，非常方便)。

加上P也讀到現在PWA在iOS上也有網頁推播功能了，這表示能讓PWA在iOS device上更有用，所以也繼續往下研究下去。

### Spreadsheets-as-a-Database 試算表當成簡易資料庫

用Google Sheets當成資料庫可以讓資料容易搬移，就算我們未來不想繼續用這個app工具了，這段期間儲存進的資料仍很容易重新取得，不會存在某個app或其他第三方的資料庫裡。這就解決了我們第四個需求，不需要再另外下載資料，當然其他好處也很顯而易見，同步、協作、版本更新也都能用這個方式一次解決！

### 測試ChatGPT的coding能力

這次P也想用ChatGPT免費版來看看究竟能幫他省多少時間，還有實際的可行性，以下也會分享實際測試的結果。

<br/>

## Implementation

這個記帳web app本身非常容易理解，是由三個部分組成的：

*   簡單的HTML網頁和表單，用來接收新的消費記錄(輸入資料的介面) <br/>
*   Node.js後端，用來串Google Sheets的API <br/>
*   Google Sheet:用來儲存資料<br/>

![](/assets/img/PWA-expense-tracker/diagram.png)<br/> <br/>
<br/>

### Node.js(Express.js) 後端

首先要先做一個簡單的Express.js後端支援HTML頁面，這個頁面要有一個收集消費紀錄的表單。這個工作對ChatGPT來說是簡單的，直接提供了所有需要的資訊。

而且從這個結果也顯示，如果能給出更清楚的提示語（prompt），甚至直接點出這四個fields會是什麼，ChatGPT會有能力直接給出更完整的資料。

![](/assets/img/PWA-expense-tracker/1%20app.png)<br/> <br/>

另外為了讓表單的預設日期都是今天，P也請ChatGPT幫忙生成了Javascript code來實現這個功能。（因為HTML沒有內建的方式去預設表單日期為當天）

![](/assets/img/PWA-expense-tracker/2%20date%20field.png)<br/> <br/>


### Google Sheets API

ChatGPT確實完成了預設日期的功能，接下來就是要去串Google表單的API了。首先在研究如何使用服務帳戶去串Google表單API時就發現Google文件寫得很亂，於是ChatGPT在這裡就發揮了很好的功用——直接問它指令和code。

![](/assets/img/PWA-expense-tracker/3%20api%20access.png)<br/> <br/>

下一步則是要在Google表單上新建資料，而且希望從表單的第二行開始新增最新一筆的資料，方便以後自行修改第一行header的內容。

ChatGPT一開始有點卡住，使出了掰功！給的範例和功能並不存在:

![](/assets/img/PWA-expense-tracker/5%20add%20row%20fail.png)<br/> <br/>

後來在試圖讓chatGPT生成對的code去寫入符合指定格式的**日期值(ex:2023-10-10)**時，ChatGPT也有點卡住，但這點無可厚非，因為就算自己讀Google的文件，要有點難弄清楚該怎麼寫這串預設值。（Google文件就是那麼不清楚......)


![](/assets/img/PWA-expense-tracker/6%20batch%20update.png)<br/> <br/>


在來回試過幾次以後ChatGPT改採用*batchUpdate*功能和*Paste_Normal*來更新，接著我們用tab delimited data讓Google表單自動解讀文字類型(type)，確保每筆資料顯示都能符合需求，例如日期的值輸入為日期、金額輸入為數字。

這個做法成功了，於是得到最終功能長這樣子：

> ![](/assets/img/PWA-expense-tracker/10%20final.png)<br/> <br/>

到這裡一個基本的記帳工具就已經大致完成了，有一個簡單的表單推送資料去後端，然後轉送這些新資料去Google表單。接下來只要再改一下外觀和CSS，這個工具就已經可以使用了，它在網頁上長這樣子：

![](/assets/img/PWA-expense-tracker/mvp.png)<br/> <br/>

*用瀏覽器打開連結，把該頁面加入主畫面之後，就會在手機桌面上找到記帳工具的Icon（上為android介面，下為iOS介面）:*<br/>
![](/assets/img/PWA-expense-tracker/homescreen.png)<br/> <br/>

<br/>

## 補強功能

以紀錄消費紀錄來說，上述已經很夠用了，但使用了一下子之後我們發現還可以補強的地方，除了純粹推送資料進系統以外，如果可以看見實際的消費資料並跟前期做比較會更好，畢竟本來記帳就是為了這個目的。當然我們也可以用Google表單生成圖表，但能在Web app上直觀顯示基本資訊會更好（達到控制消費的目的？XD）。

<br/>

### 總額和柱狀圖

這次也是用ChatGPT來寫計算長條圖數值的Code，ChatGPT在處理這種簡單計算特別方便，雖然這串Code並不難寫，但用ChatGPT就是更省時間！

![](/assets/img/PWA-expense-tracker/7%20histogram.png)<br/> 

> 補充：還是要有能力自行看Code正不正確，所以實際體驗上本身還是要懂才有辦法用。

經過幾次修改提示語，最後做出了30天份的預覽柱狀圖，並以數字呈現每天、每週、每月的消費總和，以及當期和前期的比較。

*對我來說用顏色視覺化差異也很重要，所以也特別加上了顏色和箭頭，當月超出太多的時候就要克制一點！* <br/>
![](/assets/img/PWA-expense-tracker/8%20totals.png)<br/> 

<br/>


### 分類

其他我們想做的東西是分類，這部分只能自己手動改寫ChatGPT給的code，做出下面這樣的長條圖，同時也可以選擇月、週、天分別來看。

![](/assets/img/PWA-expense-tracker/9%20categories.png)<br/> 

<br/>

## 推播通知 (Notifications)

推播通知是我們的第三個需求，方便提醒雙方哪筆已經記過了、哪筆還沒記。

這部分在開發上是最困難的，這部分ChatGPT完全失敗了，它不能給出完整的範例，網上寫出的各種範例也都不齊全或缺乏範例，這也是我決定把這篇寫成中文的主因，希望給需要的人參考。

最後P參考了某篇[Google's code labs](https://codelabs.developers.google.com/codelabs/push-notifications/#0)文章，這裡有比較好用的範例，實際操作並不是特別困難，這裡等P寫出新的技術文章後我也會再試著更新中文（或新增連結在這裡）。

*這是收到通知的畫面，左側是iOS介面，右側是Android介面*
![](/assets/img/PWA-expense-tracker/notifications%20all.png)<br/> 

<br/>

## 總結

用了將近一週以後我已經非常習慣，跟使用秒速記帳一樣順手。分類和前後期比較也有效控管我們的支出，例如提醒我們上個月午餐花太多錢了，應該要節制外食之類的。

> 實際上秒速記帳仍是我非常推薦的產品！尤其在台灣還可以掃發票QR code不用手輸。

推播的部分，這個月我們大部分都同進同出一起工作，所以收到推播通知其實沒那麼驚訝，頂多就是偶爾各自行動的時候，看到他去吃比較好吃的東西啦!

另外最大的好處是可以直接去Google Sheet修改資料。像我平常很懶，經常忘了輸入Description，重新補輸入也很方便，而這些資料日後要做其他圖表時，也可以直接拿來運用，不用再去別的地方下載。

*資料就是一般的試算表形式儲存*<br/>
![](/assets/img/PWA-expense-tracker/spreadsheet.png)<br/> 

*實際在手機輸入資料的樣子*<br/>
![](/assets/img/PWA-expense-tracker/demo2.jpg)<br/> 

<br/>

### ChatGPT作為搜尋引擎

在這次project中，P也發現ChatGPT在做技術搜尋時相當好用（例如找code的範例和文件），資料更為集中也更快能取得，幾乎可以替代Google。另外ChatGPT本身就能根據提示語的要求生成code範本（例如特定的style、語言、框架），這是使用ChatGPT輔助開發最大的好處。

然而遇到更複雜的任務和課題時，ChatGPT就相當不足了，簡單來說如果是一些用Google就很難找到方法的課題，在ChatGPT上也一樣難解，不過考量到LLM是怎麼被訓練得，會出現這樣的結果也很自然。

<br/>

## 下一步

目前我們還沒辦法解決的問題依然是幣值切換問題，這也是很多記帳App常見的限制，因為多數都會預期消費者只會有一個基準幣值（本地幣值），所以頂多只會做到自動把輸入的外幣金額換算成本地幣值。

對不只是經常旅遊，甚至經常旅外長住的我們來說，單純只是匯率換算還不太夠，因為我們通常是用當地的物價基準來判斷消費的高低，例如在日本一餐可能要以1000日幣上下來推估貴或便宜，在台灣用200元當基準⋯⋯以此類推。所以最理想的方式可能還是每到一個國家，就能把基準幣值轉換成當地國家，當然這在開發上就需要多花點心思了。

另外當然也希望能有辨識文字的AI讓我們直接掃receipt就能自動輸入，還有更多可以發展的空間呢。



<br/>