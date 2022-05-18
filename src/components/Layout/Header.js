import React from "react";
import MealsImg from "../../assets/mealsHeaderImage.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
export default function Header() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="A table full of delicious food!"></img>
      </div>
    </React.Fragment>
  );
}
