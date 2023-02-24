const {webkit, chromium, firefox} = require('playwright');


(async() => {
    console.log("Ola");
    const browser = await firefox.launch({headless: false}); //{headless: false}
    const page = await browser.newPage();
    await page.goto('https://www.bet365.com/#/H0');

    await page.waitForLoadState('networkidle');
    await page.locator('text=Aceitar').click();
    await page.locator('.hm-MainHeaderCentreWide > div:nth-child(2) > div').click();
    await page.waitForURL('https://www.bet365.com/#/IP/B1', {
        timeout: 10000000
    });

    await page.locator('.iip-IntroductoryPopup_Cross').click();
    async function nameCompetition(){
        await page.waitForTimeout(7500);
        let listTeamOne = await page.locator('.ovm-FixtureDetailsTwoWay_TeamsWrapper > div:nth-child(1)').allTextContents();
        let listTeamTwo= await page.locator('.ovm-FixtureDetailsTwoWay_TeamsWrapper > div:nth-child(2)').allTextContents();
        let scoreTeamOne = await page.locator('div.ovm-StandardScoresSoccer_TeamOne').allTextContents();
        let scoreTeamTwo = await page.locator('div.ovm-StandardScoresSoccer_TeamTwo').allTextContents();
        let listOdssColuna1 = await page.locator('div.ovm-MarketGroup > div > div > div:nth-child(1)').allTextContents();
        let listOdssColuna2= await page.locator('div.ovm-MarketGroup > div > div > div:nth-child(2)').allTextContents();
        let listOdssColuna3 = await page.locator('div.ovm-MarketGroup > div > div > div:nth-child(3)').allTextContents();
       
        return [listTeamOne, listTeamTwo, scoreTeamOne, scoreTeamTwo, listOdssColuna1, listOdssColuna2, listOdssColuna3];
    }
    const data = await nameCompetition();
    console.log(data[1]);

    await browser.close();
})();