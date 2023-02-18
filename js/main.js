    
    /* -----------------------blog button EventListener start----------------------------- */
document.getElementById('blog-id').addEventListener('click',function(){
    window.location.href = 'index-question.html';
});
    /* -----------------------blog button EventListener end----------------------------- */


    /* -----------------------Triangle EventListener and Function start----------------------------- */
let serial = 0;
document.getElementById('btn-triangle').addEventListener('click',function(){
    serial += 1;
    const triangleBaseField = getInputField('triangle-base');
    const triangleHeightField = getInputField('triangle-height');
    const triangleName = getInnerText('triangle-name');
    const triangleArea = 0.5 * parseFloat(triangleBaseField) * parseFloat(triangleHeightField);
    const triangleTwoDecimalNumberArea = triangleArea.toFixed(2);
    areaCalculator(triangleName, triangleTwoDecimalNumberArea);
    if(triangleArea == '' || triangleArea < 0 || isNaN(triangleArea)){
        return alert ('Please provide valid and positive number');
    };
    emptyInputField('triangle-base');
    emptyInputField('triangle-height');
});
    /* -----------------------Triangle EventListener and Function end----------------------------- */


    /* -----------------------Rectangle EventListener and Function start----------------------------- */
document.getElementById('btn-rectangle').addEventListener('click',function(){
    serial += 1;
    const rectangleWidthField = getInputField('rectangle-width');
    const rectangleLengthField = getInputField('rectangle-length');
    const rectangleName = getInnerText('rectangle-name');
    const rectangleArea = parseFloat(rectangleWidthField) * parseFloat(rectangleLengthField);
    const rectangleTwoDecimalNumberArea = rectangleArea.toFixed(2);
    areaCalculator(rectangleName, rectangleTwoDecimalNumberArea);
    if(rectangleArea == '' || rectangleArea < 0 || isNaN(rectangleArea)){
        return alert ('Please provide valid and positive number');
    };
    emptyInputField('triangle-base');
    emptyInputField('triangle-height');
});
    /* -----------------------Rectangle EventListener and Function end----------------------------- */


    /* -----------------------Parallelogram EventListener and Function start----------------------------- */
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    serial += 1;
    const parallelogramBaseField = getInnerText('parallelogram-base');
    const parallelogramHeightField = getInnerText('parallelogram-height');
    const parallelogramName = getInnerText('parallelogram-name');
    const parallelogramArea = parseFloat(parallelogramBaseField) * parseFloat(parallelogramHeightField);
    const parallelogramTwoDecimalNumberArea = parallelogramArea.toFixed(2);
    areaCalculator(parallelogramName, parallelogramTwoDecimalNumberArea);
});
    /* -----------------------Parallelogram EventListener and Function end----------------------------- */


    /* -----------------------Rhombus EventListener and Function start----------------------------- */
document.getElementById('btn-rhombus').addEventListener('click',function(){
    serial += 1;
    const rhombusD1Field = getInnerText('rhombus-d1');
    const rhombusD2Field = getInnerText('rhombus-d2');
    const rhombusName = getInnerText('rhombus-name');
    const rhombusArea = 0.5 * parseFloat(rhombusD1Field) * parseFloat(rhombusD2Field);
    const rhombusTwoDecimalNumberArea = rhombusArea.toFixed(2);
    areaCalculator(rhombusName, rhombusTwoDecimalNumberArea);
});
    /* -----------------------Rhombus EventListener and Function end----------------------------- */


    /* -----------------------Pentagon EventListener and Function start----------------------------- */
document.getElementById('btn-pentagon').addEventListener('click',function(){
    serial += 1;
    const pentagonPerimeterField = getInnerText('pentagon-perimeter');
    const pentagonBaseField = getInnerText('pentagon-base');
    const pentagonName = getInnerText('pentagon-name');
    const pentagonArea = 0.5 * parseFloat(pentagonPerimeterField) * parseFloat(pentagonBaseField);
    const pentagonTwoDecimalNumberArea = pentagonArea.toFixed(2);
    areaCalculator(pentagonName, pentagonTwoDecimalNumberArea);
});
    /* -----------------------Pentagon EventListener and Function end----------------------------- */


    /* -----------------------Ellipse EventListener and Function start----------------------------- */
document.getElementById('btn-ellipse').addEventListener('click',function(){
    serial += 1;
    const PI_Value = 3.14;
    const ellipseMajorAxisField = getInnerText('ellipse-majorAxis');
    const ellipseMinorAxisField = getInnerText('ellipse-minorAxis');
    const ellipseName = getInnerText('ellipse-name');
    const ellipseArea = PI_Value *  parseFloat(ellipseMajorAxisField) * parseFloat(ellipseMinorAxisField);
    const ellipseTwoDecimalNumberArea = ellipseArea.toFixed(2);
    areaCalculator(ellipseName, ellipseTwoDecimalNumberArea);
});
    /* -----------------------Ellipse EventListener and Function end----------------------------- */


    /* -----------------------Common functions start----------------------------- */
function getInnerText(id){
    const textField = document.getElementById(id).innerText;
    return textField;
}; 

function getInputField(id){
    const inputFieldString = document.getElementById(id).value;
    const inputFieldNumber = parseInt(inputFieldString);
    return inputFieldNumber;
};

function emptyInputField(id){
    document.getElementById(id).value = '';
};

function areaCalculator(name,area){
    const parentContainer = document.getElementById('parent-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
        <td>${serial}.</td>
        <td>${name}</td>
        <td>${area}cm<sup>2</sup></td>
        <td><button class="px-3 py-1 bg-blue-500 rounded text-white">Convert to m<sup>2</sup></button></td>
    `;
    parentContainer.appendChild(tr);
};
    /* -----------------------Common functions end----------------------------- */
