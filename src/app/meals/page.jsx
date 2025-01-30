"use client";

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
      <p>{JSON.stringify(meals)}</p>
    </div>
  );
};

export default MealsPage;
