import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({ args: ['--no-sandbox'] })

// Desktop
const desktopPage = await browser.newPage()
await desktopPage.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
await desktopPage.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 15000 })
await new Promise(r => setTimeout(r, 1000))
await desktopPage.screenshot({ path: 'screenshots/desktop-full.png', fullPage: true })
console.log('Desktop screenshot saved')

// Mobile
const mobilePage = await browser.newPage()
await mobilePage.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 })
await mobilePage.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 15000 })
await new Promise(r => setTimeout(r, 1000))
await mobilePage.screenshot({ path: 'screenshots/mobile-full.png', fullPage: true })
console.log('Mobile screenshot saved')

await browser.close()
