const PercyScript = require('@percy/script');


const mockRates = {
    "success": true,
    "timestamp": 1563176645,
    "base": "EUR",
    "date": "2019-07-15",
    "rates": {
      "EUR": 1,
      "USD": 1.12805,
      "GBP": 0.897815,
      "AUD": 1.604031,
      "BTC": 0.00011,
      "KES": 116.200495,
      "JPY": 121.793281,
      "CNY": 7.75354
    }
  };const mockConvertRate = {
    "rate": 10244.442
  }

PercyScript.run(async (page, percySnapshot) => {
    /**
     |---------------------------------------|
    | Mock Page Requests                    |
    |---------------------------------------|
    **/  //Activate request interception
    await page.setRequestInterception(true);
    // Listen to each page request
    page.on('request', request => {
        // Mock Daily Rates API
        if (request.url().includes('/api/rates')) {
        request.respond({
            status: 200,
            contentType: "application/json; charset=utf-8",
            body: JSON.stringify(mockRates) // return mock rates data
        });
        }
        // Mock Convert/Exchange API
        else if (request.url().includes('/api/convert')) {
        request.respond({
            status: 200,
            contentType: "application/json; charset=utf-8",
            body: JSON.stringify(mockConvertRate) // return convert rate data
        });
        } else {
        request.continue();
        }
    });


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
    // Take snapshot
    await percySnapshot('homepage');











    /**
    |---------------------------------------|
    | Generate Exchange Rate Snapshot       |
    |---------------------------------------|
    **/
    await page.goto('http://localhost:3000/exchange');
    // Wait for AJAX call to complete
    await page.waitForSelector('.loading', {
        hidden: true
    });
    await page.select('select#from', 'BTC'); // Select Bitcoin
    await page.select('select#to', 'USD'); // Select US Dollar
    await page.type('#amount', '1'); // Enter Amount
    await page.click('.submit'); // Hit the convert button
    // wait for AJAX call to complete
    await page.waitForSelector('.loading', {
        hidden: true
    });
    // Take snapshot
    await percySnapshot('exchange');    /**
    |---------------------------------------|
    | Generate Historical Rates Snapshot    |
    |---------------------------------------|
    **/
    await page.goto('http://localhost:3000/historical');
    // wait for AJAX call to complete
    await page.waitForSelector('.loading', {
        hidden: true
    });
    // Set Calendar Date Input
    await page.evaluate(() => {
        document.getElementById('date').value = '2019-07-01';
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