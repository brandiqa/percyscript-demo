const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
    // Test Home Page
    await page.goto('http://localhost:3000/');
    await page.waitFor(2000);
    await percySnapshot('homepage');

    // Test Currency Conversion
     await page.goto('http://localhost:3000/exchange');
     await page.waitFor(3000);
     await page.select('select#from', 'BTC'); // Select bitcoin
     await page.select('select#to', 'USD'); // Select US Dollar
     await page.type('#amount', '1'); // Enter Amount
    // Hit the convert button
     const previousResult = await page.evaluate(() => document.querySelector('#result').innerHTML);
     await page.click('.submit');
     await page.waitForFunction(`document.querySelector('#result').innerHTML !== ${previousResult}`); // Wait until the result is updated
     await percySnapshot('exchange');

    // Test Historical Rates
    //  await page.goto('http://localhost:3000/historical');
    //  page.type('#date', '2019-07-01');
    //  page.click('.submit'); // Click Fetch Rates Button
    //  await page.waitForSelector('#historical-table');
    //  await percySnapshot('historical');
});