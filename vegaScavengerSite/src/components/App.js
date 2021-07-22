import React from "react";
import { StyleSheet, css } from 'aphrodite-jss';
import Background from 'url:~/src/assets/Hero-image.png';
import ArticleHeading from "./ArticleHeading"
import ArticleBody from "./ArticleBody"
import Sidebar from "./Sidebar";
let App = (props) => {
  return (
  <div>
    <img className={css(styles.imageHeader)} src={Background}></img>
    <div className={css(styles.wrapper)}>
      <div className={css(styles.gutter)}></div>
      <Sidebar></Sidebar>
      <div className={css(styles.article)}><ArticleHeading></ArticleHeading></div>
      <div className={css(styles.empty)}></div>  
    </div>
  </div>
  )
};

export default App;

const styles = StyleSheet.create({
  wrapper:{
    display: "grid",
    gridTemplateRows: "10% 10% 10% 10% 10% 10% 10% 10% 10% 10%",
    height: "100vh",
    '@media only screen and (min-width:480px) and (max-width: 767px) ': {
      gridTemplateColumns: "16px 1fr 5fr 2fr",
      marginTop:'60px',
    },
    '@media only screen and (min-width: 768px) and (max-width: 991px)': {
      gridTemplateColumns: "16px 1fr 5fr 2fr",
      marginTop:'130px',
    },
    '@media only screen and (min-width: 992px)': {
      gridTemplateColumns: "32px 1fr 5fr 2fr",
      marginTop:'330px',
    },
  },
  gutter:{
    backgroundColor:'white',
    width:'35px',
    '@media only screen and (min-width:480px) and (max-width: 767px) ': {
      gridRow:'3 /10',
      marginTop:'10px',
    },
    '@media only screen and (min-width: 768px) and (max-width: 991px)': {
      gridRow:'3 /10',
      marginTop:'10px',
    },
    '@media only screen and (min-width: 992px)': {
      gridRow:'4 /10',
      marginTop:'20px',
    },
  },
  article: {
    gridRow:'1/10',
    display:'flex',
    flexDirection:'column'
  },
  empty:{
    backgroundColor:'white',
    '@media only screen and (min-width:480px) and (max-width: 767px) ': {
      gridRow:'3/10',
      marginTop:'10px',
    },
    '@media only screen and (min-width: 768px) and (max-width: 991px)': {
      gridRow:'3/10',
      marginTop:'10px',
    },
    '@media only screen and (min-width: 992px)': {
      gridRow:'4/10',
      marginTop:'20px',
    },
  },
  imageHeader:{
    zIndex: "-1",
    width:'100%',
    position: "absolute",
    height:'auto',
    '@media only screen and (min-width:480px) and (max-width: 767px) ': {
      top: "-150px",
    },
    '@media only screen and (min-width: 768px) and (max-width: 991px)': {
      top: "-150px",
    },
    '@media only screen and (min-width: 992px)': {  
      top: "-200px",  
    },
  }
});