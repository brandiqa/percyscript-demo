# PERCY SCRIPT - VISUAL TESTING DEMO

## Introduction

This is a demo project that introduces beginners on how to perform visual testing using [Percy](https://percy.io). The tutorial for this project is on [Sitepoint.com](https://www.sitepoint.com/blog/)

## Setup

### Step 1: Clone or Download Project

You can use the **Git Clone** command or **Download Zip** option to download this project to your hard drive.

```bash
git clone git@github.com:brandiqa/percyscript-demo.git
```

### Step 2: Acquire API keys

This demo project is API driven and requires a couple of API keys to access third-party Currency API services:

- [Fixer API Key]([account](https://fixer.io/signup/free))
- [Currency Converter API](https://free.currencyconverterapi.com/free-api-key)

You'll need to provide a valid email address to be able to acquire the free API keys. Once you've acquired them, create a new file `.env` at the root of this project. Insert the following data and insert your access keys as instructed:

```env
FIXER_API_KEY=<insert api access key from fixer here>
CONVERTER_API_KEY=<insert api access key from Currency Converter here>
PORT=3000
TIMEOUT=5000
SYMBOLS=EUR,USD,GBP,AUD,BTC,KES,JPY,CNY
```

### Step 3: Install Dependencies and Run Project

1. Run `npm install`
2. Start server with `npm start` or `node server`
3. If you have opened this project in VSCode and you have the 'Debugger for Chrome' extension enabled, press F5 to launch the browser. Alternatively, manually open [http://localhost:3000/](http://localhost:3000/) in your local browser.

## License

MIT License

Copyright (c) 2019 Michael Wanyoike

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
