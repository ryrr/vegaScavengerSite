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
   
    },
    quoteAttribution:{
        color:'grey',
        fontSize:'.7em',
        opacity:'0.5',
        fontFamily:'PT Mono',
    }
});