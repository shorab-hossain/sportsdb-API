const searchFood = async ()=>{
    const searchFeild = document.getElementById('search-feild');
    const searchText = searchFeild.value;
    // clear this feild
    searchFeild.value ='';
    if(searchText == ''){
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display='block';
        errorMessage.innerHTML=`
             <h3>Please, search your Favoraite Items</h3>
        `;
    }
    else{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        const res = await fetch(url);
        const data = await res.json();
        displayFood(data);
        // fetch(url)
        // .then(res => res.json())
        // .then(data => displayFood(data.meals))
    }
}
const displayFood = meals =>{
    console.log(meals)
    const cardContainer = document.getElementById('card-all');
    cardContainer.textContent='';
    // if( cardContainer == ''){
    //     console.log('you are type text');
    // meals.forEach(meal
    // }
   meals.meals.forEach(meal =>{
            
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
            <div class="card">
            <img width="200px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
              <button class='btn btn-warning' onclick ='loadMealDetail(${meal.idMeal})'>Food Detail</button>
            </div>
          </div> 
            `;
            cardContainer.appendChild(div);
    })

}
const loadMealDetail =async mealId =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res =await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0])
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal =>{
    // console.log(meal)
    window.scrollTo(0,40)
    const detailContainer = document.getElementById('detail-card');
    detailContainer.textContent='';
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML=`
        <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go anyWhere</a>
        </div>
        `;
        detailContainer.appendChild(div);
}
