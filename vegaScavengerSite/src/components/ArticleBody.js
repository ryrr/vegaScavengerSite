import React from "react";
import { StyleSheet, css } from 'aphrodite-jss';
import Bigquote from './BigQuote'
import BigQuote from "./BigQuote";
let ArticleBody = (props) => {
    return (
        <div className={css(styles.wrapper)}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique tincidunt arcu, vestibulum pharetra felis malesuada vitae. Praesent faucibus pharetra nisl, in congue metus pretium ac. Donec lobortis, urna sit amet tincidunt rhoncus, tortor lectus ultricies erat, vitae dapibus felis quam vel sapien. Nam id egestas eros. Nullam sagittis risus sit amet velit vulputate cursus. Curabitur lacinia urna nec nunc auctor, ac suscipit orci congue. Phasellus aliquet est tortor, vitae fermentum est fringilla sed. Proin accumsan lorem at justo auctor scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel egestas ex. Quisque sed enim eu nulla viverra suscipit sit amet eu elit. Aenean molestie rutrum odio a lacinia. Nam et urna egestas, semper lectus sed, dictum nunc. 
            </p>
            <BigQuote></BigQuote>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique tincidunt arcu, vestibulum pharetra felis malesuada vitae. Praesent faucibus pharetra nisl, in congue metus pretium ac. Donec lobortis, urna sit amet tincidunt rhoncus, tortor lectus ultricies erat, vitae dapibus felis quam vel sapien. Nam id egestas eros. Nullam sagittis risus sit amet velit vulputate cursus. Curabitur lacinia urna nec nunc auctor, ac suscipit orci congue. Phasellus aliquet est tortor, vitae fermentum est fringilla sed. Proin accumsan lorem at justo auctor scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel egestas ex. Quisque sed enim eu nulla viverra suscipit sit amet eu elit. Aenean molestie rutrum odio a lacinia. Nam et urna egestas, semper lectus sed, dictum nunc. 
            </p>
        </div>
    )
};

export default ArticleBody;

const styles = StyleSheet.create({
    wrapper:{
        height:'70%',
        backgroundColor:'white',
        fontSize:'0.4em',
        fontFamily:'Merriweather',
        '@media only screen and (min-width:480px) and (max-width: 767px) ': {
            paddingTop:'10px',
            lineHeight:'16px',
        },
        '@media only screen and (min-width: 768px) and (max-width: 991px)': {
            paddingTop:'20px',
            lineHeight:'25px',
        },
        '@media only screen and (min-width: 992px)': {
            paddingTop:'35px',
            lineHeight:'43px',     
        },
    }
});