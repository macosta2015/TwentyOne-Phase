//July11 19th USA  of  2024
//Mario Acosta Automation process 

const puppeteer = require('puppeteer');
require('dotenv').config();

const { launchBrowserAndNavigateToDocument } = require('./components/launchBrowserAndNavigate.js');
const { performTest } = require('./components/newSketch.js');
const { clickButtonByIndex } = require('./components/clickButtonByIndex.js');
const copySketchFunction = require('./components/copySketchFunction.js');
const pasteIntoSketchFunction = require('./components/pasteIntoSketchFunction.js');
const editIntoSketchFunction = require('./components/editIntoSketchFunction.js');
const renameIntoSketchFunction = require('./components/renameIntoSketchFunction.js');
const waitForEnter = require('./components/waitForEnter.js');
const searchAndClickTransform = require('./components/searchAndClickTransform.js');
const searchAndClickCustomExtrude2 = require('./components/searchAndClickCustomExtrude2.js');
const searchAndClickExtrude = require('./components/searchAndClickExtrude.js');
const searchAndClickExtrudeRemove = require('./components/searchAndClickExtrudeRemove.js');




const { performRightClickOptionByTitle } = require('./components/performRightClickOptionByTitle.js');


(async () => {
    try {

        //LAUNCH BROWSER AND LOGIN
        const newPage = await launchBrowserAndNavigateToDocument(); // This line should return a newPage object


        // NEW SKETCH
        // await performTest(newPage);


        //ADDING EXTRUDE FUNCTION TO THE CODE
        //ALL THE CODE TOGETHER
        const desiredIndex = 5; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex);
        //Right click option
        const selector = 'div[data-id="Dg4JdGx6jlZTm4XD"]'; // Replace with the appropriate selector
        const title = 'First Sketch'; // Replace with the desired title



        //EXTRUDE THE FUNCTION
        await searchAndClickExtrude(newPage);
        console.log('After waiting for the Extrude function')
        await waitForEnter();




        //COPY SKETCH FUNCTION
        const editOptions3 = await performRightClickOptionByTitle(newPage, selector, title);
        console.log(editOptions3);
        copySketchFunction(editOptions3, newPage);



        console.log("AAAAAAAAAA")
        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("BBBBBBBBBB")





        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        /* THIS CODE NEEDS TO BE COMMENTED ON AND OFF DEPENDING ON THE SITUATION */
        // console.log('Waiting 10 seconds.');
        // console.log('SELECTING ITEM 5 ON THE LIST.');
        // await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        // await newPage.evaluate(() => {
        //     const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
        //     thirdButton.click();
        //     if (thirdButton) {
        //         thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        //     } else {
        //         console.error('Third button not found.');
        //     }
        // });
        console.log("CCCCCCCCCCC")




        // RIGHT CLICK
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('clickButtonByIndex');
        console.log('pasteIntoSketchFunction');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        //ORIGINAL const desiredIndex1 = 7; //IMPORTANT PART THAT MAKES THE CODE RUN!
        //NOT ORIGINAL WORKING const desiredIndex1 = 6; //IMPORTANT PART THAT MAKES THE CODE RUN!
        const desiredIndex1 = 6; //IMPORTANT PART THAT MAKES THE CODE RUN!



        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 10 seconds
        console.log('Waiting 5 seconds.');
        await clickButtonByIndex(newPage, desiredIndex1); //in desiredIndex1, First Sketch is equal to 5
        //Right click option
        const selector1 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        //ORIGINAL const title1 = 'Second Sketch'; // Replace with the desired title
        //NOT ORIGINAL WORKING const title1 = 'Second Sketch'; // Replace with the desired title
        const title1 = 'Second Sketch'; // Replace with the desired title

        //NEW CODE const title1 = 'Sketch1'; // Replace with the desired title


        //ORIGINAL WORKING const editOptions1 = await performRightClickOptionByTitle(newPage, selector1, title1);
        const editOptions1 = await performRightClickOptionByTitle(newPage, selector1, title1);

        console.log(editOptions1);
        //Paste into sketch function
        //TODO: THE CORE RUNS BECAUSE WE MADE IT RUN FOR 40 SECONDS. 
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        console.log('Waited for 10 seconds.');
        console.log('BEFORE THE CODE RUNS.');
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        pasteIntoSketchFunction(editOptions1, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("DDDDDDDDDDD")






        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });
        console.log("EEEEEEEEEEEEE")






        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("FFFFFFFFFFFFF")





        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });
        console.log("GGGGGGGGGGGGGGG")





        console.log("HHHHHHHHHHHHHH")
        //EDIT
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('Waiting 10 seconds.');
        console.log('clickButtonByIndex');
        console.log('editIntoSketchFunction');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        //ALL THE CODE TOGETHER
        const desiredIndex3 = 6; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex3);
        //EDIT
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        // const selector3 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector //ORIGINAL
        const selector3 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const title3 = 'Second Sketch'; // Replace with the desired title
        const editOptions4 = await performRightClickOptionByTitle(newPage, selector3, title3);
        console.log(editOptions4);
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        editIntoSketchFunction(editOptions4, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("IIIIIIIIIIIIIII")






        console.log("JJJJJJJJJJJJJJ")
        ////////////////////
        console.log('WAITING FOR USER TO CLICK ENTER')
        await waitForEnter();
        console.log('USER CLICKED ENTER')
        ////////////////////




        await searchAndClickTransform(newPage);
        console.log('After waiting for the transform function')
        console.log("KKKKKKKKKKKK")


        //         // //RENAME
        //         // console.log('Waited for 5 seconds.');
        //         // console.log('WE START THE RENAME PHASE');
        //         // await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5
        //         // //ALL THE CODE TOGETHERx
        //         // const desiredIndex3 = 7; // Or any other desired index
        //         // await clickButtonByIndex(newPage, desiredIndex3);
        //         // //Right click option 
        //         // const selector3 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector
        //         // const title3 = 'Sketch 1'; // Replace with the desired title
        //         // const editOptions4 = await performRightClickOptionByTitle(newPage, selector3, title3);
        //         // console.log(editOptions4);
        //         // //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        //         // renameIntoSketchFunction(editOptions4, newPage);
        //         // await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        //         // console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');




        //         //WE ARE CHECKING ENDING OF EDIT OPTIONS
        //         console.log('Waited for 10 seconds.');
        //         await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        //         console.log('Typing "Third Sketch"...');
        //         await newPage.keyboard.type('Third Sketch');
        //         await new Promise(resolve => setTimeout(resolve, 5000));



        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("LLLLLLLLLLLL")





        // //EXPERIMENTAL CODE

        // //EXTRUDE THE FUNCTION
        // console.log("Moving to Extrude for the second time, extrude down.")
        // const desiredIndex6 = 6; //IMPORTANT PART THAT MAKES THE CODE RUN!
        // await clickButtonByIndex(newPage, desiredIndex6); //in desiredIndex1, First Sketch is equal to 5
        // await searchAndClickExtrudeRemove(newPage);
        // console.log('After waiting for the Extrude function')
        // await waitForEnter();





        // NEW SKETCH
        console.log('New Sketch Start, user needs to select Extuded phase')
        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log('New Sketch Ending')
        await performTest(newPage);





        //MOVING TO THE THIRD SKETCH
        console.log('moving to the third sketch')
        //ALL THE CODE TOGETHER
        // const desiredIndex = 5; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex);
        //Right click option
        // const selector = 'div[data-id="Dg4JdGx6jlZTm4XD"]'; // Replace with the appropriate selector
        // const title = 'First Sketch'; // Replace with the desired title
        const editOptions5 = await performRightClickOptionByTitle(newPage, selector, title);
        console.log(editOptions5);
        // const desiredOption = 'Copy sketch'; //TYPE WHICH EDIT OPTION YOU WANT TO CHOSE
        copySketchFunction(editOptions5, newPage);
        console.log("MMMMMMMMMMMM")





        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("NNNNNNNNNN")




        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });









        console.log("OOOOOOOOOO")
        // RIGHT CLICK
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('clickButtonByIndex');
        console.log('pasteIntoSketchFunction');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        const desiredIndex9 = 9; //IMPORTANT PART THAT MAKES THE CODE RUN!
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 10 seconds
        console.log('Waiting 5 seconds.');
        await clickButtonByIndex(newPage, desiredIndex9);
        //Right click option
        // const selector9 = 'div[data-id="8aS8lah7ZP9RTZu0"]'; // Replace with the appropriate selector
        const selector9 = 'div[data-id="UJaijK4u3WDjRIZq"]'; // Replace with the appropriate selector
        // UJaijK4u3WDjRIZq
        // const selector8 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        //ORIGINAL GOOD const title8 = 'Third Sketch'; // Replace with the desired title
        const title9 = 'Sketch 2'; // Replace with the desired title

        const editOptions9 = await performRightClickOptionByTitle(newPage, selector9, title9);
        console.log(editOptions9);
        //Paste into sketch function
        //TODO: THE CORE RUNS BECAUSE WE MADE IT RUN FOR 40 SECONDS. 
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        console.log('Waited for 10 seconds.');
        console.log('BEFORE THE CODE RUNS.');
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        pasteIntoSketchFunction(editOptions9, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("PPPPPPPPPPP")




        console.log("QQQQQQQQQQQ")
        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5]; //I think this code needs to be removed
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });



        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("RRRRRRRRRRRRR")






        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });
        console.log("SSSSSSSSSSSSS")






        //EDIT
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('Waiting 10 seconds.');
        console.log('clickButtonByIndex');
        console.log('editIntoSketchFunction');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        //ALL THE CODE TOGETHER
        const desiredIndex4 = 8; // IMPORTANT (NEEDS TO BE THE SAME AS THE SELECTOR) Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex4);
        //EDIT
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        // const selector3 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector //ORIGINAL
        // const selector4 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        //TESTING NEW SELECTOR
        const selector4 = 'div[data-id="T+Y2o0Cyh3UPOxKb"]'; // Replace with the appropriate selector
        // const title4 = 'Second Sketch'; // Replace with the desired title
        const title4 = 'Third Sketch'; // Replace with the desired title
        const editOptions6 = await performRightClickOptionByTitle(newPage, selector4, title4);
        console.log(editOptions6);
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        editIntoSketchFunction(editOptions6, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("TTTTTTTTTTTTTTT")








        ////////////////////
        console.log('WAITING FOR USER TO CLICK ENTER')
        await waitForEnter();
        console.log('USER CLICKED ENTER')
        ////////////////////
        await searchAndClickTransform(newPage);
        console.log('After waiting for the transform function')





        ////////////////////
        await waitForEnter();
        console.log("UUUUUUUUUUUUUUUU")
        ////////////////////
















        await newPage.evaluate(() => {
            document.addEventListener('mousemove', (event) => {
                console.log(`Mouse coordinates: X = ${event.clientX}, Y = ${event.clientY}`);
            });
        });

        console.log('Move the mouse over the page to see the coordinates...');
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log('Script completed successfully.');



    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
