import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite-jss';
import ArticleBody from "./ArticleBody"
let ArticleHeading = (props) => {
    let [editMode,setEditMode] = useState(false)
    let [savedTitle,setSavedTitle] = useState('Guidelines For Inkjet Cartridge Refill')
    let [textAreaValue,setTextAreaValue] = useState('Guidelines For Inkjet Cartridge Refill')
    let [slug,setSlug] = useState('guidelines-for-inkjet-cartridge-refill')
    let [errorState,setErrorState] = useState(false)
    
    useEffect(()=>{
        let slugString = string_to_slug(textAreaValue)
        if(slugString.length === 0){
            setErrorState(true)
        }else{
            setErrorState(false)
        }
        setSlug(slugString)
    },[textAreaValue])

    let string_to_slug = (str) => {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
  
        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

    let saveTitle = () => {
        if(textAreaValue.length>1){
            setSavedTitle(textAreaValue)
            setErrorState(false)
            setEditMode(false)
        }
    }

    let cancelEditing = () => {
        setEditMode(false)
        setErrorState(false)
        setTextAreaValue(savedTitle)
    }

    return (
        <div className={css(styles.wrapper)}>
            <div className={css(styles.buttonBox)}>
                {editMode?
                    <div>
                        <button onClick={()=>{cancelEditing()}} className={css(styles.button,styles.cancelBttn)}>Cancel</button>
                        <button onClick={()=>{saveTitle()}} className={css(styles.button,styles.saveBttn,errorState?styles.greyedOut:null)}>Save</button>
                    </div>
                    :
                    <div>
                        <button onClick={()=>{setEditMode(true)}}className={css(styles.button,styles.editBttn)}>
                            <i style={{paddingRight:'10px'}} class="fas fa-pencil-alt"></i>Edit
                        </button>
                    </div>
                }
            </div>
            <div className={css(styles.article)}>
                <div className={css(styles.articleDate)}>
                    <h3 className={css(styles.articleDateString)}>11-20-2018</h3>
                </div>
                <div className={css(styles.textWrapper)}>
                    <div className={css(styles.articleTitle)}>
                        {editMode?
                            <div className={css(styles.editingDiv)}>     
                                <textarea onChange={(e)=>{setTextAreaValue(e.target.value)}}className={css(styles.titleTextArea,errorState?styles.red:null)}>{savedTitle}</textarea>
                                <h2 className={css(styles.slug)}><b>Slug: </b>{slug}</h2>
                            </div>
                        :
                        <h1 className={css(styles.articleTitleText)}>{savedTitle}</h1>
                        }
                    </div>
                    <ArticleBody></ArticleBody>
                </div>
                <div className={css(styles.articleDate)}></div>
            </div>
           
        </div>
    )
};

export default ArticleHeading;

const ptMono = {
    fontFamily: "PtMono",
    fontStyle: "normal",
    fontWeight: "normal",
    src: "url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap')"
}

const styles = StyleSheet.create({
    wrapper:{
        height:'100%',
       
        '@media only screen and (min-width:480px) and (max-width: 767px) ': {
            fontSize:'13pt',
        },
        '@media only screen and (min-width: 768px) and (max-width: 991px)': {
            fontSize:'20pt',
        },
        '@media only screen and (min-width: 992px)': {
            fontSize:'32pt',
        },
    },
    //should condense button styles to BUTTON class, add specific style on top
    button:{
        fontFamily: 'PT Mono',
        cursor:'pointer',
        fontWeight:'bold',
        '@media only screen and (min-width:480px) and (max-width: 767px) ': {
            paddingLeft:'5px',
            paddingRight:'5px',
            paddingTop:'5px',
            paddingBottom:'5px'
        },
        '@media only screen and (min-width: 768px) and (max-width: 991px)': {
            paddingLeft:'7px',
            paddingRight:'7px',
            paddingTop:'8px',
            paddingBottom:'8px'
        },
        '@media only screen and (min-width: 992px)': {
            paddingLeft:'10px',
            paddingRight:'10px',
            paddingTop:'8px',
            paddingBottom:'8px'
        }
    },
    editBttn:{
        backgroundColor:'#F8CF1C',
    },
    cancelBttn:{
        backgroundColor:'#FF7F5B',
        color:'white'
    },
    saveBttn:{
        backgroundColor:'#5FCC9C',
        color:'white'
    },
    buttonBox:{
        display:'flex',
        flexDirection:'row-reverse',
        paddingTop:'20px',
        fontSize:'.3em',
    },
    article:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        '@media only screen and (min-width:480px) and (max-width: 767px) ': {
            height:'50%',
        },
        '@media only screen and (min-width: 768px) and (max-width: 991px)': {
            height:'70%',
        },
        '@media only screen and (min-width: 992px)': {
            height:'90%',
        },
    },
    articleDate:{
        width:'7%',
        backgroundColor:'white',
        display:'flex',
        justifyContent:'left',
        height:'70%',

    },
    articleDateString:{
        writingMode: 'vertical-lr',
        transform:'rotate(180deg)',
        direction:'rtl',
        textAlign:'center',
        fontFamily:'PT Mono',
        color:'grey',
        opacity:'0.6',           
        fontSize:'.3em',
        '@media only screen and (min-width:480px) and (max-width: 767px) ': {
            height:'30%',
        },
        '@media only screen and (min-width: 768px) and (max-width: 991px)': {
            height:'33%',
        },
        '@media only screen and (min-width: 992px)': {
            height:'39%',
        },
    },
    textWrapper:{
        width:'86%',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
    },
    articleTitle:{
        width:'100%',
        backgroundColor:'white',
        fontFamily: 'PT Mono',
        '@media only screen and (min-width:480px) and (max-width: 767px) ': {
            marginTop:'25px',
        },
        '@media only screen and (min-width: 768px) and (max-width: 991px)': {
            marginTop:'35px',
        },
        '@media only screen and (min-width: 992px)': {
            marginTop:'50px'
        },
    },
    titleTextArea:{
        width:'100%',
        backgroundColor:'white',
        lineHeight:'1.4',
        wordSpacing:'5px',
        letterSpacing:'2px',
        fontFamily: 'PT Mono',
        height:'90%',
        fontSize:'1em',
        border:'solid rgba(54, 54, 54, .3) 1px',
        backgroundColor:'rgba(54, 54, 54, .05)',
        fontWeight:'bold',
        outline:'0px',
        webkitAppearance:'none',
        boxShadow: 'none' ,
        
    },
    red:{
        border:'solid rgba(256, 0, 0, .5) 1px',
    },
    greyedOut:{
        backgroundColor:'grey',
        cursor:'default'
    },
    slug:{
        fontSize:'.2em'
    },
    articleTitleText:{
        padding:'0px',
        margin:'0px',
        fontSize:'1em',
        fontWeight:'600',
        lineHeight:'1.4',
        wordSpacing:'5px',
        letterSpacing:'2px',
    },
});