import db, {  vehicleCollection} from "../DB.js";
import puppeteer from "puppeteer";


class StartMapsX {
	constructor() {}

	async startmaps(Data) {
        const browser = await puppeteer.launch({headless: true});
    const page =  await browser.newPage();
    await page.goto("http://localhost/route/bingtest.html")

    await page.type('[placeholder="From"]',Data.name1);
    // await page.waitForSelector('.bank-d vm ib');
    // await page.click(".bank-d vm ib")
    await page.type('[placeholder="To"]',Data.name2);

    await page.waitForTimeout(3000);

    await page.click("a.dirBtnGo.commonButton")

    await page.waitForTimeout(3000);

    const inner_html = await page.$eval(".drTitleRight",element => element.innerHTML);
  
    let abc= parseInt(inner_html);

    console.log(abc)
        
    return abc;
	}

	
}

export default StartMapsX;
