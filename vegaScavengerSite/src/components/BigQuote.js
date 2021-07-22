import React from "react";
import { StyleSheet, css } from 'aphrodite-jss';
let BigQuote = (props) => {
    return (
        <div className={css(styles.wrapper)}>
            <p className={css(styles.textt)}>
                GTI has conducted extensive head-to-head laboratory
                testing of the Vega scavenger versus triazine. In the
                contact tower setting, Vega demonstrated significant
                benefits over triazine:
            </p>
            <h3 className={css(styles.quoteAttribution)}>- Ronald Mcdonald</h3>
        </div>
    )
};

export default BigQuote;

const styles = StyleSheet.create({
    wrapper:{
        '@media only screen and (min-width:480px) and (max-width: 767px) ': {
            marginTop:'20px',
            marginBottom:'10px',
        },
        '@media only screen and (min-width: 768px) and (max-width: 991px)': {
            marginTop:'30px',
            marginBottom:'20px',
        },
        '@media only screen and (min-width: 992px)': {
            marginTop:'40px',
            marginBottom:'30px',
        },
    },
    textt:{
        width:'110%',
        color:'blue',
        textAlign:'left',
        lineHeight:'1.4',
        wordSpacing:'5px',
        letterSpacing:'1px',
        fontSize:'1.8em',
        fontFamily:'Merriweather',
        fontWeight:'normal',
        margin:'0px'
   
    },
    quoteAttribution:{
        color:'grey',
        fontSize:'.7em',
        opacity:'0.5',
        fontFamily:'PT Mono',
       
    }
});