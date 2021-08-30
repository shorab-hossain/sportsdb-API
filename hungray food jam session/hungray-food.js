const button = document.getElementById('submit-button');
button.addEventListener('click',function(){
    const inputValue = document.getElementById('input-value');
    const inputValueText = inputValue.value;
        
    if(inputValueText.length > 0){
        // document.getElementById('spinner').classList.remove('d-none');
        fetchedData(inputValueText);
        
    }
    else if (inputValueText.length == ''){
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display ='d-block';
        errorMessage.innerHTML=`
        <p class="text-center bg-danger text-white p-4 m-4 m-auto><b>Please enter a meal name...</b></p>
        `;
    }
    inputValue.value ='';

})

// const getMealData = mealName =>{
//     //mealName ='0'
//     //mealName ='abcd'
//     if(mealName === 1){
//         mealCardDiv(``)
//     }
//     else{
//         mealCardDiv(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
//     }
// }
//function for data fetching 
const fetchedData = mealName=> {
    // console.log(mealName)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`)
    .then(response = response.json())
    .then(data =>console.log(data))
    // const url =`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`;
    // const response = await fetch(url);
    // const data = await response.json();
    // return data;
    // displayCard(data)
};
// const displayCard  = meal =>{
//     console.log(meal)
//     // const cardContainer = document.getElementById('card');
    
// }

// const fetchedData = async (url) => {
//     const response = await fetch(url);
  
//     const data = await response.json();
    
//     return data;
//   };