// Creating capitalize function
function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}


function reverse(str){
    return str.split("").reverse().join("");
}

function contains(str, substr){
    return str.includes(str);
}
// test
// console.log(capitalize("zebra"));
// console.log(reverse("zebra"));
// console.log(contains("Hi Good morning!", "Good"));

module.exports = {
    capitalize: capitalize,
    reverse: reverse,
    contains: contains
}