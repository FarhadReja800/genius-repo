function calculatorTriangleArea(){
    const basefield = document.getElementById('triangle-base');
    const baseValueText = basefield.value;
    const base =parseFloat(baseValueText)
    console.log(base);
    basefield.value = '';




    // get triangle value 

    const heightField = document.getElementById('triangle-height');
    const heightVlaueText = heightField.value;
    const height = parseFloat(heightVlaueText);
    console.log(height);

    heightField.value = '';
    
   

    const area = 0.5 * base * height;
    console.log(area);
   

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;

    

}

// rectaigle area
function calculatorRecTangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // console.log(width);
    widthField.value = '';
    

    const lenghtField = document.getElementById('rectangle-lenght');
    const lenghtValueText = lenghtField.value;
    const lenght = parseFloat(lenghtValueText);
    // console.log(lenght);
    lenghtField.value = '';

    const area = width * lenght;
    // console.log(area);
  
    const rectaigleArea = document.getElementById('rectangle-area');
    rectaigleArea.innerText = area;


}
function calculatorPrallelogramArea(){
        const base = getInputValue('parallelogram-base');
        console.log(base)

        const height = getInputValue('parallelogram-height');
        

        const area = base * height;
       
        setElementText('parallelogram-area', area);
}
function calculatorEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementText('ellipse-area', area);

 }


function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

 function setElementText(elementId, area){
    const  element = document.getElementById(elementId)
    element.innerText = area;
 }


 