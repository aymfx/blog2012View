---

title: puppeteet 完成自动下单的流程

date: 2019-06-11

categories: 技术

tags: puppeteet

---

> puppeteet 完成自动下单的流程

<!-- more -->  

## 使用 puppeteet 完成自动下单的流程

> 小米官网作为测试的地点

### 准备

### demo

```js
/*加载puppeteer库*/
const puppeteer = require('puppeteer')

/*定义一个异步函数执行*/
;(async () => {
    //创建一个浏览器
    var browser = await puppeteer
        .launch({
            headless: false, //是否以无头模式运行
        })
        .catch((ex) => {
            console.log(ex)
        })

    if (!browser) {
        console.log('browser launch failed!')
        return
    }

    //创建一个新页面
    var page = await browser.newPage().catch((ex) => {
        console.log(ex)
    })

    if (!page) {
        console.log('fail to open page!')
        browser.close().catch((e) => {})
        return
    }

    var respond = await page
        .goto('https://wap.f96.net/26/26856/all.html', {
            waitUntil: 'domcontentloaded',
            timeout: 120000,
        })
        .catch((ex) => {
            console.log(ex)
        })

    if (!respond) {
        console.log('fail to goto website!')
        browser.close().catch((e) => {})
        return
    }
    /*获取章节信息*/
    var allLinks = await page
        .evaluate(() => {
            let list = [
                ...document.querySelectorAll('.directoryArea > p > a[href]'),
            ]
            list.splice(0, 1)
            console.log(list)
            let result = []
            for (var i = 0; i < list.length; i++) {
                let a = list[i]
                let chapter = {
                    name: a.textContent,
                    link: a.href,
                }
                result.push(chapter)
            }
            return result
        })
        .catch((ex) => {
            console.log(ex)
        })
    console.log(allLinks)
    //为防止被反爬，这里只获取1页
    for (var i = 0; i < allLinks.length; i++) {
        var chapter = allLinks[i]

        //跳转到网址
        var respond = await page
            .goto(chapter.link, {
                waitUntil: 'domcontentloaded',
                timeout: 120000,
            })
            .catch((ex) => {
                console.log(ex)
            })

        if (!respond) {
            console.log('fail to goto website!')
            browser.close().catch((e) => {})
            return
        }

        await page.waitForSelector('body > div#chaptercontent').catch((ex) => {
            console.log(ex)
        })

        /*获取章节内容*/
        var content = await page
            .evaluate(() => {
                let contentElement = document.querySelector(
                    'body > div#chaptercontent'
                )

                var result

                result = contentElement.innerText

                return result
            })
            .catch((ex) => {
                console.log(ex)
            })
        console.log(content)
    }
})()
```


