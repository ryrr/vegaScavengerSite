import React from "react";
import { StyleSheet, css } from 'aphrodite-jss';
let Sidebar = (props) => {
    return (
    <div className={css(styles.wrappper)}>
        <div className={css(styles.sidebarSection)}>
            <h3 className={css(styles.sectionTitle)}>Author</h3>
            <h3 className={css(styles.sectionValue)}>Ryan Rivera</h3>
        </div>
        <div className={css(styles.sidebarSection)}>
            <h3 className={css(styles.sectionTitle)}>Share</h3>
            <div className={css(styles.iconsWrapper)}>
                <i style={{opacity:'0,5',color:'grey',paddingRight:'10px'}}class="fas fa-envelope"></i>
                <i style={{opacity:'0,5',color:'grey',paddingRight:'10px'}} class="fab fa-facebook-square"></i>
                <i style={{opacity:'0,5',color:'grey'}} class="fab fa-twitter"></i>
            </div>
        </div>
    </div>
    )
};

export default Sidebar;

const styles = StyleSheet.create({
    wrappper: {
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        width:'100%',
        paddingRight:"30pt",
        fontFamily: 'PT Mono',
        '@media only screen and (min-width:480px) and (max-width: 767px) ': {
            gridRow:'3/10',
            paddingTop:'30px',
            marginTop:'10px',
        },
        '@media only screen and (min-width: 768px) and (max-width: 991px)': {
            gridRow:'3/10',
            paddingTop:'50px',
            marginTop:'10px',
        },
        '@media only screen and (min-width: 992px)': {
            gridRow:'4/10',
            paddingTop:'100px',
            marginTop:'20px', 
        },
    },
    sidebarSection:{
        paddingTop:'2px',
        paddingBottom:'2px',
        paddingRight:'5px',
        borderBottom:'solid rgba(54, 54, 54, .5) 1px',
        justifyContent:'space-between',
        display:'flex',
        '@media only screen and (min-width:480px) and (max-width: 767px) ': {
            flexDirection:'column',
            fontSize:'.2em',
        },
        '@media only screen and (min-width: 768px) and (max-width: 991px)': {
            flexDirection:'row',
            fontSize:'.4em',
        },
        '@media only screen and (min-width: 992px)': {
            flexDirection:'row',
            fontSize:'.6em',

        },
    },
    sectionTitle:{
        opacity:'0.4', 
    },
    sectionValue:{
        fontWeight:'bold'
    },
    iconsWrapper:{
        display:'flex',
        alignItems:'center',
    }
});