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