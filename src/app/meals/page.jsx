// import {  useState } from "react";
export const mealsFunction = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  const data = res.json();

  return data;
};

const MealsPage = async () => {
  //   const [allMeals, setMeals] = useState([]);
  //   const [search, setSearch] = useState("");

  const { meals } = await mealsFunction();

  console.log(meals);

  //   useEffect(() => {
  //     mealsFunction();
  //   }, [search]);

  return (
    <div>
      {meals.map((meal, idx) => (
        <div>
          <img src={meal.strSource} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MealsPage;
