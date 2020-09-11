const puppeteer = require('puppeteer');
function timeOut(callback, time) {
    setTimeout(() => {
        callback()
    }, time);
}


(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        args: [
            '--window-size=1920,1080',
        ]
    });
    const context = browser.defaultBrowserContext();
    //        URL                  An array of permissions
    await context.overridePermissions("https://www.facebook.com", ["geolocation", "notifications"]);
    const page = await browser.newPage();
    await page.setViewport({width: 1080, height: 1080});
    await page.goto('https://www.facebook.com/', {waitUntil: "networkidle2"});
    await page.waitForSelector("#email");
    await page.focus("#email");
    await page.keyboard.type(num);
    await page.waitForSelector("#pass");
    await page.focus("#pass");
    await page.keyboard.type(pwd);
    // click login
    await page.waitForSelector("#u_0_b");
    await page.click("#u_0_b");

    // search for google
    await page.waitForSelector("#js_2")
    await page.click("#js_2")
    await page.keyboard.type("Google")

    // click search
    await page.waitForSelector("#js_2 > form > button")
    await page.click("#js_2 > form > button")

    // go to google page
    await page.waitForSelector("#xt_uniq_1 > div._77we > div > div._6v_a > div._6v-_ > div._6v_0._4ik4._4ik5 > a")
    await page.click("#xt_uniq_1 > div._77we > div > div._6v_a > div._6v-_ > div._6v_0._4ik4._4ik5 > a")

    // await  timeOut(async ()=>{
    //     const elements = await page.$x('/html/body/div[1]/div[3]/div[1]/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/div[1]/div[1]/div/div/div[2]/div/div/div/div/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/div/div/div/div');
    //     console.log(elements);
    // });
    await page.waitForSelector("textarea[aria-label=\"Write a post...\"]")
    await page.click("textarea[aria-label=\"Write a post...\"]")
    await page.keyboard.type("Hey Google, how are you..... :), I'm puppeteer")
    timeOut(async ()=>{
        await page.waitForSelector("button[type=\"submit\"][value=\"1\"]")
        await page.click("button[type=\"submit\"][value=\"1\"]")

    },1500)


    // create a post


})();