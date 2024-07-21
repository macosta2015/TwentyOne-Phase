const puppeteer = require('puppeteer');

//Please type the name of the file you want to edit here:
const OnShapefileName = 'Extrude5';


async function launchBrowserAndNavigateToDocument() {
    console.log('//LAUNCHING BROWSER');
    const browser = await puppeteer.launch({
        defaultViewport: { width: 800, height: 800 },
        headless: false,
        userDataDir: '/Users/marioacosta/Library/Application Support/Google/Chrome/Profile 1'
    });
    console.log('Browser launched successfully.');

    const newPage = await browser.newPage();
    console.log('New page opened successfully.');

    await newPage.goto('https://cad.onshape.com/documents?resourceType=resourcecompanyowner&nodeId=65efc5e06e5bec02f57742fe', { waitUntil: 'networkidle0', timeout: 0 });
    console.log('Page loaded successfully.');

    await newPage.type('input[name="email"].form-control', process.env.EMAIL);
    console.log('Typed email successfully.');

    await newPage.type('input[name="password"].form-control', process.env.PASSWORD);
    console.log('Typed password successfully.');

    console.log(await newPage.$eval('input[name="email"].form-control', input => input.getBoundingClientRect()));
    console.log(await newPage.$eval('input[name="password"].form-control', input => input.getBoundingClientRect()));

    await newPage.click('button.btn.btn-primary.os-signin-button');
    console.log('Clicked on the sign-in button successfully.');

    console.log(await newPage.$eval('button.btn.btn-primary.os-signin-button', button => button.getBoundingClientRect()));

    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Waited for 5 seconds.');

    await newPage.evaluate(() => {
        const thirdButton = document.querySelectorAll('.documents-filter-icon')[2];
        if (thirdButton) {
            thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            console.log(thirdButton.getBoundingClientRect());
        } else {
            console.error('Third button not found.');
        }
    });

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Waited for 2 seconds.');

    await newPage.evaluate(() => {
        const thirdButton = document.querySelectorAll('.documents-filter-icon')[2];
        if (thirdButton) {
            thirdButton.click();
        } else {
            console.error('Third button not found.');
        }
    });

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Clicked on the third button.');

    console.log('//LAUNCHING FILE NAME', OnShapefileName);
    await newPage.evaluate((fileName) => {
        const documentNameElement = document.querySelector(`span[aria-label="Document name: ${fileName}"][ng-bind-html="document.resultHighlight"]`);

        if (documentNameElement) {
            documentNameElement.click();
        } else {
            console.error('Element with text "OnShapefileName" not found.');
        }
    }, OnShapefileName); // Pass OnShapefileName as an argument

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('Waited for 3 seconds.');

    return newPage; // Return the new page for further operations if needed
}

module.exports = {
    launchBrowserAndNavigateToDocument
};



// const puppeteer = require('puppeteer');
// const OnShapefileName = 'Scale Sketch Example - Copy - Copy';


// async function launchBrowserAndNavigateToDocument() {
//     console.log('//LAUNCHING BROWSER');
//     const browser = await puppeteer.launch({
//         defaultViewport: { width: 800, height: 800 },
//         headless: false,
//         userDataDir: '/Users/marioacosta/Library/Application Support/Google/Chrome/Profile 1'
//     });
//     console.log('Browser launched successfully.');

//     const newPage = await browser.newPage();
//     console.log('New page opened successfully.');

//     await newPage.goto('https://cad.onshape.com/documents?resourceType=resourcecompanyowner&nodeId=65efc5e06e5bec02f57742fe', { waitUntil: 'networkidle0', timeout: 0 });
//     console.log('Page loaded successfully.');

//     await newPage.type('input[name="email"].form-control', process.env.EMAIL);
//     console.log('Typed email successfully.');

//     await newPage.type('input[name="password"].form-control', process.env.PASSWORD);
//     console.log('Typed password successfully.');

//     console.log(await newPage.$eval('input[name="email"].form-control', input => input.getBoundingClientRect()));
//     console.log(await newPage.$eval('input[name="password"].form-control', input => input.getBoundingClientRect()));

//     await newPage.click('button.btn.btn-primary.os-signin-button');
//     console.log('Clicked on the sign-in button successfully.');

//     console.log(await newPage.$eval('button.btn.btn-primary.os-signin-button', button => button.getBoundingClientRect()));

//     await new Promise(resolve => setTimeout(resolve, 5000));
//     console.log('Waited for 5 seconds.');

//     await newPage.evaluate(() => {
//         const thirdButton = document.querySelectorAll('.documents-filter-icon')[2];
//         if (thirdButton) {
//             thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
//             console.log(thirdButton.getBoundingClientRect());
//         } else {
//             console.error('Third button not found.');
//         }
//     });

//     await new Promise(resolve => setTimeout(resolve, 2000));
//     console.log('Waited for 2 seconds.');

//     await newPage.evaluate(() => {
//         const thirdButton = document.querySelectorAll('.documents-filter-icon')[2];
//         if (thirdButton) {
//             thirdButton.click();
//         } else {
//             console.error('Third button not found.');
//         }
//     });

//     await new Promise(resolve => setTimeout(resolve, 2000));
//     console.log('Clicked on the third button.');

//     console.log('//LAUNCHIG FILE NAME, OnShapefileName');
//     await newPage.evaluate(() => {
//         // const documentNameElement = document.querySelector('span[aria-label="Document name: {OnShapefileName}"][ng-bind-html="document.resultHighlight"]');
//         const documentNameElement = document.querySelector(`span[aria-label="Document name: ${fileName}"][ng-bind-html="document.resultHighlight"]`);

//         const documentNameElement = document.querySelector(`span[aria-label="Document name: ${OnShapefileName}"][ng-bind-html="document.resultHighlight"]`);

//         if (documentNameElement) {
//             documentNameElement.click();
//         } else {
//             console.error('Element with text "OnShapefileName" not found.');
//         }
//     });

//     await new Promise(resolve => setTimeout(resolve, 3000));
//     console.log('Waited for 3 seconds.');

//     return newPage; // Return the new page for further operations if needed
// }

// module.exports = {
//     launchBrowserAndNavigateToDocument
// };
