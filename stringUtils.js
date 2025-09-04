// Creating capitalize function
function capitalize(str){
    if (!str || typeof str !== "string"){
        throw new TypeError("Error! Please input string!");
    } else {
        return str[0].toUpperCase() + str.slice(1);
    }
}

function reverse(str){
    if (!str || typeof str !== "string"){
        throw new TypeError("Error! Please input string!");
    } else {
        return str.split("").reverse().join("");
    }
}

function contains(str, substr){
    if (!str || !substr || typeof str !== "string" || typeof substr !== "string" ){
        throw new TypeError("Error! Please input string!");
    } else {
        return str.includes(str);
    }
}

module.exports = {
    capitalize: capitalize,
    reverse: reverse,
    contains: contains
}