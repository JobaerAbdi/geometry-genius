let serial = 0;
document.getElementById('btn-triangle').addEventListener('click',function(){
    serial += 1;
    const triangleBaseField = getInputField('triangle-base');
    const triangleHeightField = getInputField('triangle-height');
    const triangleName = getInnerText('triangle-name');
    const triangleArea = 0.5 * triangleBaseField * triangleHeightField;
    areaCalculator(triangleName,triangleArea)
    //emptyInputField('triangle-base');
    //emptyInputField('triangle-height');

});

document.getElementById('btn-rectangle').addEventListener('click',function(){
    serial += 1;
    const rectangleWidthField = getInputField('rectangle-width');
    const rectangleLengthField = getInputField('rectangle-length');
    const rectangleName = getInnerText('rectangle-name');
    const rectangleArea = rectangleWidthField * rectangleLengthField;
    areaCalculator(rectangleName,rectangleArea)
    //emptyInputField('triangle-base');
    //emptyInputField('triangle-height');

});

document.getElementById('btn-parallelogram').addEventListener('click',function(){
    serial += 1;
    const parallelogramBaseField = getInnerText('parallelogram-base');
    const parallelogramHeightField = getInnerText('parallelogram-height');
    const parallelogramName = getInnerText('parallelogram-name');
    const parallelogramArea = parseInt(parallelogramBaseField) * parseInt(parallelogramHeightField);
    areaCalculator(parallelogramName,parallelogramArea);
    //emptyInputField('triangle-base');
    //emptyInputField('triangle-height');
});

document.getElementById('btn-rhombus').addEventListener('click',function(){
    serial += 1;
    const rhombusD1Field = getInnerText('rhombus-d1');
    const rhombusD2Field = getInnerText('rhombus-d2');
    const rhombusName = getInnerText('rhombus-name');
    const rhombusArea = 0.5 *  parseInt(rhombusD1Field) * parseInt(rhombusD2Field);
    areaCalculator(rhombusName, rhombusArea);
    //console.log(parallelogramName,parallelogramArea , typeof parallelogramArea);
    //emptyInputField('triangle-base');
    //emptyInputField('triangle-height');
});

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
}