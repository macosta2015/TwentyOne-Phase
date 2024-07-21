async function searchAndClickTransform(newPage) {
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('//COMMAND FOR SEARCHING TRANSFORM AND THEN CLICKING ON IT, waiting 10 seconds');
    console.log('Waited for 10 seconds.');

    await newPage.click('button.command-search-trigger');
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('Waited for 10 seconds.');

    await newPage.type('.os-search-box-input', 'transform');
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('Typed "transform" into the search input field.');

    await newPage.keyboard.press('Enter');
    //Remove code April 18th
    // await newPage.mouse.move(290, 311);
    // await newPage.mouse.down({ button: 'left' });
    // console.log('Mouse clicked and held at X:724, Y:297');
    await new Promise(resolve => setTimeout(resolve, 3000));
}

module.exports = searchAndClickTransform;
