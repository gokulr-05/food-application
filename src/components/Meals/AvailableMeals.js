import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import "./AvailableMeals.css";

let data = [
  {
    name: "Sushi",
    description: "Finest Fish and veggies",
    price: "22.991",
    id: "m1",
  },
  {
    name: "HeadPhone",
    description: "Smooth and clear",
    price: "16.505",
    id: "m2",
  },
  {
    name: "Charger",
    description: "Fast and LongLasting",
    price: "12.9911",
    id: "m3",
  },
  {
    name: "OTG",
    description: "Portable and Connectable",
    price: "18.9999",
    id: "m4",
  },
];

let AvailableMeals = () => {
  let [err, setErr] = useState(false);
  let [loading, setLoading] = useState(true);
  let [mealsData, setMealsData] = useState([]);
  console.log("mealsData=", mealsData);

  let fetchMealData = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        "https://food-order-app-dd19c-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }

      let responseData = await response.json();

      console.log("responseData=", responseData);
      let fetchedData = [];

      for (let key in responseData) {
        fetchedData.push({ id: key, ...responseData[key] });
      }

      setMealsData(fetchedData);
      setLoading(false);
    } catch (err1) {
      setErr(true);
      setLoading(false);
      console.log(err1.message);
    }
  };

  let spinner = (
    <div className="d-flex align-items-center">
      <strong>Loading...</strong>
      <div
        className="spinner-border ms-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );

  let error_display = (
    <div className="text-center">
      <strong className="text-danger ">Something Went Wrong!!</strong>
    </div>
  );

  let arr = mealsData.map((val) => {
    return (
      <div key={val.id}>
        {
          <div>
            <MealItem
              id={val.id}
              name={val.name}
              description={val.description}
              price={val.price}
            />
            <hr />
          </div>
        }
      </div>
    );
  });

  useEffect(() => {
    fetchMealData();
  }, []);

  return (
    <div className="availableMeals">
      {!err && !loading && <div>{arr}</div>}
      {loading && !err && spinner}
      {err && !loading && error_display}
    </div>
  );
};

export default AvailableMeals;
