const removeFromArray = function (array, ...elements) 
    {
        for (i = 0; i < elements.length; i++)
            {
                const element = elements[i]; 
                if (array.includes(element)) 
                    {array.splice(array.indexOf(element), 1)}
            }
        return array;
    }
// Do not edit below this line
module.exports = removeFromArray;
