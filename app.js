const stringUtils = require('./stringUtils.js');

//Test
try {
    console.log(stringUtils.capitalize("zebra"));
    console.log(stringUtils.reverse("zebra"));
    console.log(stringUtils.contains("Hi Good morning!", "Good"));
    
    // Testing edge cases
    console.log(stringUtils.capitalize(2344));
    console.log(stringUtils.reverse(""));
    console.log(stringUtils.contains("Hi Good morning!", 20));
} catch(err){ 
    console.error(err.message);
} finally {
    console.log("Finally block entered...");
    console.log("Testing complete.")
}
