---
layout: post
title: The Yarn Tracker (PWA instead of native app)
lang: en
---

I made a yarn tracker by progressive web application. 

To jump to the yarn tracker introduction. Click [The Yarn Tracker](#the-yarn-tracker)


## Intro (?)

After getting started with knitting and crocheting, my favorite thing to do whenever I arrive at a new place is to look for nearby yarn shops. Over the past couple of years, I've been fortunate enough to travel around Europe and Japan, which has allowed me to quickly identify the different yarn brands and types used in various regions. I can also discern the local trends by looking at the selections in stores. However, after doing this for a while and making casual purchases, new issues have started to arise.

When I left the Netherlands, my yarn collection, which originally consisted of three or four skeins brought from Taiwan, had transformed into an entire box filled with yarn. Although I've created numerous projects, it seems like the yarn multiplies on its own. Initially, when I didn't have a good grasp of project planning, I used to think that if I didn't buy the yarn I liked when I saw it, I might not find it later. So I'd buy a skein or two whenever I found the yarn with material or color I liked. But over time, as I gained more knowledge about knitting and crocheting, I would often find myself thinking that I eventually would still need a knitted sweater (so I need to buy the yarn in front of me, right now!). For that reason, every time when I stumbled upon rare yarn at some random yarn shops, I'd make sure I at least getting enough for a small vest.

At first, I could remember which yarn I used for each projects, but not anymore now. My sense of yarn pricing also became less keen. 

I'm very grateful that early on, perhaps during my first or second yarn purchase, a store employee suggested I take a photo of the label on the yarn skein. I didn't fully understand why at the time, but now I sincerely believe that the employee who advised me was an angel. Without doing this, how could I ever remember the color numbers and which needle or crochet hook size works best?

If you're just starting your knitting or crocheting journey today, whether it's making crochet bags, crocheting dolls(amigurumi), or knitting baby sweaters, please repeat these three essential rules in your mind:

**1. Take photos of the yarn labels, especially the ones with a lot of text.**

<br/>

## The Guardians of the Knitting Community

The knitting community is a warm and welcoming place where I've always learned a lot. One time, while working on a gray cardigan, I ran out of yarn just as I was about to finish the ribbing. I returned to the yarn shop where I had previously bought the same color of yarn. To my disappointment, the color was no longer on the shelves, which usually means it's sold out. 

I asked the same store clerk for help to check if the yarn was genuinely out of stock. This was the same staff who, when I was picking colors, mentioned that the yarn I wanted would be there "eventually," which left a lasting impression on me. I understand that running a yarn shop isn't easy, and it's not practical to stuck up inventory just because a customer randomly makes a request. However, her straightforwardness did catch me by surprise. She didn't provide a specific restock date or completely rule it out, which seemed to align with a Dutch approach, I guess. 

She was very kind to take me to the clearance section, where I found a similar color, and I quickly bought three skeins from there.

This time when I returned to the shop to find extra yarn to continue my cardigan, they were out of stock. The same staff suggested to wait for restock, but it might take a week. I explained that I was about to move and couldn't wait that long. Just as I was about to look for a similar color instead, she suddenly jumped in, saying, **"Hey, trust me, you won't like it that way."** She meant that if I started mixing colors, the final look wouldn't be appealing, and I wouldn't be satisfied with it.

This is the second rule I learned at the yarn shop:

<br/>

**2. Never compromise on your choice of yarn.**

It's a life lesson, really. Settling for something just for the sake of it, only to later find it's not what you wanted, is not a good approach. It's better to prevent wastage from the beginning. I initially thought she was talking about choosing yarn, but she was essentially talking about making life choices.

In doing so, she may have sold me one less skein of yarn, but it seemed like those who love knitting understand the deeper meaning behind it. I've come to understand it over time as well. Experienced knitters often like to give advice to prevent newcomers from going down the same frustrating paths they've been on. Knitting requires a lot of time and effort, and it's not worth it for a mere skein of the wrong yarn.

>*  *"Ribbing" is the section enclosed by the blue box in the picture. It's a commonly used technique for finishing edges, and apart from its aesthetic appeal, it also serves to prevent the finished item from rolling in the same direction.*<br/>
![](/assets/img/Crochet/ribbing.png)<br/> <br/>


<br/>

## The Yarn Tracker

When it comes to my large basket of yarn, initially, I simply followed the advice to take photos of yarn labels and organized them into separate folders in my phone's gallery. However, I occasionally forgot to move knitting-related photos into the knitting folder, and many times, I even forgot to take photos at all. 

I've been pondering the most efficient way to organize my collection of yarn digitally. It was perfect timing when Philip figured out how to create a simple PWA (Progressive Web App) to gather data and use Google Spreadsheet as a database. This is when the concept crystallized in my mind: I needed a similar tool to collect yarn information!

<br/>

> * Philip's ["One Day Build: Expense Tracking"](https://pqvst.com/2023/10/23/one-day-build-expense-tracking/#totals-and-histogram)

<br/>

The function of this app-like web is pretty straightforward. You open the shortcut of the Yarn Tracker Web app on the homescreen:<br/><br/>
![Yarn Tracking App](/assets/img/Crochet/yarn-tracking-app.jpg)

Then you will find a form to enter the data you need later, such as brand name, price per skeins, weight. To simplify the process, there are also drop-down list for people to select suggested needle and hook sizes, yarn materials...etc. 

Additionally, I added a "Price per gram" field for easy price comparison:<br/><br/>

![Yarn Tracking](/assets/img/Crochet/yarn-tracking.jpg)<br/><br/>
![Yarn Tracking](/assets/img/Crochet/yarn-tracking2.jpeg)

I believe there will be some times when I'm too lazy to enter all the details, so I made all these fields optional. These input data end up stored in a Google Sheet, and if I want to add or update information later, I can do it directly on Google sheets. I made it for the purpose that is easy to build and maintain. Since the web form only allows input, there's no risk of messing up the backend data:<br/>

<br/>

*This is how data shows in the Google sheet after being input via web app*<br/>
![Yarn Tracking Sheet](/assets/img/Crochet/yarn-tracking-sheet.jpg)

<br/>

Initially, I thought I'd use it mainly to record yarn I brought home, but right after creating it, I discovered an even more remarkable feature. When I'm digging for treasure at a yarn shop and spot potential yarn without a clear purpose in mind, now I don't have to hoard them in advance anymore. I use the Yarn Tracker to enter the details of yarn, and then I can check and purchase later. I actually use it this way than any other of scenarios.

<br/>

### Goals for Creating the Yarn Tracking Tool

The tool was created with simple objectives in mind:

1. **Ease of Future Retrieval**:

    1) **Data must be stored in an easily accessible place in text**: I used to take photos of yarn labels on my phone, but when I wanted to cross-reference, I had to dig through my gallery to find old label photos. Sometimes, I just wanted to find "shades of blue" or "suitable for a 6mm hook," and it was challenging. Therefore, it was essential to store data in a searchable and filterable format.

    <br/>
     *I used to dig into my gallery in order to find photo like this below. Since now we all take about like 100 photos a day, it becomes almost impossible to find a label of yarn that I had purchased months ago.*
    ![](/assets/img/Crochet/label.JPG)<br/> <br/>


    2) **Uniform and simplified data format**: Knitting systems mainly comprise the UK, US, and Japanese systems, each with slightly different needle and hook sizes. Consequently, yarn labels also vary due to differences in primary markets. I wanted to standardize input by using dropdown list for easier reference in the future.

    3) **Minimize noise and retain only relevant yarn data**: Yarn databases do exist, but I wanted to mark the information I wanted in a straightforward and self-explanatory manner.

    > This is one of the most powerful [Yarn Database](https://www.yarndatabase.com/). However, for instance, it's lack of data of Asian yarn of retails and sales point information that I needed the most in my area.

    <br/>

2. **Cross-Platform and Mobile-Friendly Use**: Although Google Sheets can be accessed on various devices, it's not particularly user-friendly on mobile phones. Therefore, I aimed to create a web form that could be conveniently filled out on smartphones.

3. **Simplicity in Data Modification and Addition**: Often, while yarn shopping, I come across new yarn unexpectedly. In such cases, I wanted the flexibility to update the data without needing to delete and create new entries. I also aimed to avoid making the tool too complex by implementing overwrite functions.

<br/>

### Solution for the Yarn Tracking Tool

Combining all these considerations with a recent budgeting tool we developed, we had more than enough resources to create this tool. So, we put it together with the help of ChatGPT, and it's now live.

> For more technical introduction of how he built this: ["One Day Build: Expense Tracking"](https://pqvst.com/2023/10/23/one-day-build-expense-tracking/#totals-and-histogram)

<br/>
<br/>

### Limitations of the Yarn Tracking Tool

#### Data Collection Limitations:

One area that feels lacking in the current setup is the photos. While photos may not be the optimal way to search for yarn, having the option to include photos as color references would be beneficial if possible.

#### Functionality Limitations:

*   **Currency Selection**: Currently, there is no option to select a currency when entering data. Users need to convert their expenditure into US dollars before inputting it. I chose US dollars as the primary currency because the price of yarn I purchase rarely exceeds $45. Writing this price in Japanese yen or Taiwanese dollars would result in longer numerical values. For me, amounts below tens of Taiwanese dollars don't hold significant meaning, so using US dollars is sufficient. Additionally, I frequently compare prices on European and American platforms, and using US dollars makes these comparisons more straightforward. However, this might be less convenient when purchasing yarn in other regions, so a currency conversion feature will likely be added when creating visual representations in the future.

*   **Dashboard Development**: Currently, there is no dashboard available. The filtering dimensions and comparisons conceived at this stage don't hold much significance. For instance, comparing prices of yarn with a specific material or identifying yarn suitable for a size 8 needle. These can currently be sorted directly in the Google Spreadsheet. If implemented on the web app, meaningful content will be sought, and as of now, the data volume doesn't justify this need.

*   **AI-Based Text and Image Recognition**: Various yarn manufacturers include similar information on their labels, such as weight, length, material, recommended needle or hook sizes, and gauge. However, the position and format of this information can vary significantly between manufacturers. Given a sufficient database for comparison, it should be possible to use AI for automatic data input based on label information. Nevertheless, for a niche and simplified daily requirement, this feature may be somewhat excessive.

    <br/>

    *For people who might be interested to see yarn labels: There are various ways in which yarn labels are presented:*
    <br/><br/>
![](/assets/img/Crochet/label.JPG)<br/> <br/>
![](/assets/img/Crochet/label2.jpeg)<br/> <br/>
![](/assets/img/Crochet/label3.jpeg)<br/> <br/>
![](/assets/img/Crochet/label4.jpeg)<br/> <br/>


