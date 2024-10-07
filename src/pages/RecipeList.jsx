import React from "react";
import LayoutStructure from "../components/LayoutStructure/LayoutStructure";
import Backbutton from "../components/BackButton";
import Banner from "../components/Banner";
import RecipeCard from "../components/RecipeCard";
import thumb1 from "../assets/images/recipe/thumb1.jpg";
import thumb2 from "../assets/images/recipe/thumb2.jpg";
const List = [
    {
      id: 1,
      thumb: thumb1,
      title: "Thịt heo xào chua ngọt",
      main: true,
      vegetable: false,
      soup: false,
    },
    {
      id: 2,
      thumb: thumb2,
      title: "Cánh gà  luộc",
      main: true,
      vegetable: false,
      soup: false,
    },
    {
      id: 3,
      thumb: thumb2,
      title: "Canh rau dền",
      main: false,
      vegetable: false,
      soup: true,
    },
    {
      id: 4,
      thumb: thumb2,
      title: "Can tiến vua xào không ",
      main: false,
      vegetable: true,
      soup: false,
    },
    {
      id: 5,
      thumb: thumb1,
      title: "Đọt bí xào tỏi",
      main: false,
      vegetable: true,
      soup: false,
    },
    {
      id: 6,
      thumb: thumb2,
      title: "Cánh gà chiên nước mắm",
      main: true,
      vegetable: false,
      soup: false,
    },
    {
      id: 7,
      thumb: thumb2,
      title: "Canh cải bí đỏ",
      main: false,
      vegetable: false,
      soup: true,
    },
    {
      id: 8,
      thumb: thumb2,
      title: "Rau2",
      main: false,
      vegetable: true,
      soup: false,
    }
  ]

function RecipeList() {
    return (
        <>
            <LayoutStructure isMenu>
                <div className="absolute p-4 top-0 left-0 right-0 indent-2">
                    <Backbutton/>
                </div>
                
                <Banner/>
                <div className="mb-5"></div>
                <RecipeCard  list={List}/>
            </LayoutStructure>
        </>
    );
}

export default RecipeList;
