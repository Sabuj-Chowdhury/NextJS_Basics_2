"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
// export const mealsFunction = async () => {
//   const res = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=`
//   );
//   const data = res.json();

//   return data;
// };

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMeals = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data?.meals || []);
      setLoading(false);
      return data.meals;
    } catch (err) {
      console.log(err);
      setLoading(false);
      return [];
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);

  if (loading) {
    return "Loading....";
  }

  return (
    <div>
      <div className="text-center text-black">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="space-y-5 p-5 grid grid-cols-4 gap-5">
        {meals.map((meal, id) => (
          <div key={id}>
            <p>
              {id + 1} : {meal?.strMeal}
            </p>
            <div>
              <Image
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                width={641}
                height={641}
              />
            </div>
            <p>{meal?.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsPage;
