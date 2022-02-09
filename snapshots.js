const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
    
    //Generate Daily Rates Snaphsot
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.loading', {
        hidden: true
    });
    // Take snapshot
    await percySnapshot('homepage');

    //Generate Exchange Rate Snapshot
    await page.goto('http://localhost:3000/exchange');
    await page.waitForSelector('.loading', {
        hidden: true
    });
    await page.select('select#from', 'BTC'); // Select Bitcoin
    await page.select('select#to', 'USD'); // Select US Dollar
    await page.type('#amount', '1'); // Enter Amount
    await page.click('.submit'); // Hit the convert button

    await page.waitForSelector('.loading', {
        hidden: true
    });
    // Take snapshot
    await percySnapshot('exchange');

    //Generate Historical Rates Snapshot
    await page.goto('http://localhost:3000/historical');
    await page.waitForSelector('.loading', {
        hidden: true
    });
    // Set Calendar Date Input
    await page.evaluate(() => {
        document.getElementById('date').value = '2020-07-01';
    })
    // Click Fetch Rates Button
    await page.click('.submit');
    // wait for AJAX call to complete
    await page.waitForSelector('.loading', {
        hidden: true
    });
    // Take snapshot
    await percySnapshot('historical');
});