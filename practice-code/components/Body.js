import RestaurantCard from "./REstaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1848444&lng=72.6241948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurants =
  json?.data?.cards
    ?.map(c => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    ?.find(r => Array.isArray(r)) || [];

setlistOfRestaurants(restaurants);
if(restaurants.length === 0){
  setlistOfRestaurants(resList);
}
  };
  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            let fileterd = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(fileterd);
          }}>
          Top Rated Restaurants
        </button>
        <div className='res-container'>
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
