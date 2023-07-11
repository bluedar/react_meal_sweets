import React, { useEffect, useState } from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';



const AvailableMeals = () => {
  const [meals,setMeals] = useState([]); //백엔드 저장되어있는 메뉴
  const [isLoading, setIsLoading] =useState(true);
  const [httpError, setHttpError] =useState();
  //에러문구 저장하기 위한 상태설정

  useEffect(()=>{
    const fetchMeals = async () =>{
      const response = await fetch('https://meal-2269f-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');

      if(!response.ok){
        throw new Error('에러 발생!!!! 😫')
      }

      const data = await response.json()  //객체 형식으로 저장됨

      const loadMeals =[];

      for (const key in data) {
        loadMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadMeals);
      setIsLoading(false)
    }

    /*
    try{  
      fetchMeals(); 
    } catch(error){
      setIsLoading(false)
      setHttpError(error.message)
    } 
    //fetchMeals는 async를 사용 -> 프로미스를 반환->에러 -> 해결책: 별도의 함수를 많들어 넣어줌/ 아래 방법*/ 
    
      fetchMeals().catch((error)=>{
        setIsLoading(false);
        setHttpError(error.message)
      });
  },[])
  //console.log('meals?', meals)

  if(isLoading){
    return(
      <section className={classes.mealsLoading}>
        <p>Loading....</p>
      </section>
    )
  }

  if(httpError) {
    return(
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    )
  }



  const mealsList = meals.map((meal)=>
    <MealItem 
      key={meal.id} 
      id={meal.id} 
      name={meal.name} 
      description={meal.description} 
      price={meal.price}/>
  )

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals