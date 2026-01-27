const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: "new",
        bg: false, // Ensure we capture background
        defaultViewport: { width: 1920, height: 1080 }
    });
    const page = await browser.newPage();

    // Navigate
    console.log('Navigating to Whitepaper...');
    await page.goto('http://localhost:3000/whitepaper', { waitUntil: 'networkidle0' });

    // Create PDF Doc
    const pdfDoc = await PDFDocument.create();

    // Capture 8 Slides
    for (let i = 0; i < 8; i++) {
        console.log(`Capturing Slide ${i + 1}...`);

        // Scroll to slide
        // We assume sections are indexed 0-7
        await page.evaluate((index) => {
            const sections = document.querySelectorAll('section');
            if (sections[index]) {
                sections[index].scrollIntoView({ behavior: 'instant' });
            }
        }, i);

        // Wait for animations (Framer Motion)
        await new Promise(r => setTimeout(r, 2000));

        // Screenshot
        const screenshotBuffer = await page.screenshot({
            type: 'png',
            fullPage: false // Viewport only
        });

        // Embed in PDF
        const image = await pdfDoc.embedPng(screenshotBuffer);
        const pdfPage = pdfDoc.addPage([1920, 1080]);

        // Draw image to fill page
        pdfPage.drawImage(image, {
            x: 0,
            y: 0,
            width: 1920,
            height: 1080,
        });
    }

    // Save
    const pdfBytes = await pdfDoc.save();
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }
    const outputPath = path.join(publicDir, 'ELEV8_Pitch_Deck_Generated.pdf');
    fs.writeFileSync(outputPath, pdfBytes);

    console.log(`PDF Generated Successfully at: ${outputPath}`);

    await browser.close();
})();
