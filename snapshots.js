const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
    /**
    |---------------------------------------|
    | Generate Daily Rates Snaphsot         |
    |---------------------------------------|
    **/
    await page.goto('http://localhost:3000/');
    // wait for AJAX call to complete
    await page.waitForSelector('.loading', {
        hidden: true
    });
    await percySnapshot('homepage');

    /**
    |---------------------------------------|
    | Generate Exchange Rate Snaphsot       |
    |---------------------------------------|
    **/
    await page.goto('http://localhost:3000/exchange');
    // Wait for AJAX call to complete
    await page.waitForSelector('.loading', {
        hidden: true
    });
    await page.select('select#from', 'BTC'); // Select bitcoin
    await page.select('select#to', 'USD'); // Select US Dollar
    await page.type('#amount', '1'); // Enter Amount
    await page.click('.submit'); // Hit the convert button
    // wait for AJAX call to complete
    await page.waitForSelector('.loading', {
        hidden: true
    });
    await percySnapshot('exchange');

    /**
    |---------------------------------------|
    | Generate Historical Rates Snaphsot    |
    |---------------------------------------|
    **/
    await page.goto('http://localhost:3000/historical');
    // wait for AJAX call to complete
    await page.waitForSelector('.loading', {
        hidden: true
    });
    // Set Calendar Input    
    await page.evaluate(() => {
        document.getElementById('date').value = '2019-07-01';
    })
    await page.click('.submit'); // Click Fetch Rates Button
    // wait for AJAX call to complete
    await page.waitForSelector('.loading', {
        hidden: true
    });
    await percySnapshot('historical');
});
