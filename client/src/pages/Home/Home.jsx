import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useDispatch, useSelector } from "react-redux";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { setFoodList } from "../../state";

const Home = () => {
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.data)
  const FoodList = async()=>{
    const response = await axios.get(`http://localhost:4000/api/food/list`)
    if(response){
      dispatch(setFoodList(response.data.data))
    }
  }
  useEffect(()=>{
    FoodList()
  },[])  
  return (
    <div>
      <Header></Header>
      {data.data? (
      <>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
      </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
