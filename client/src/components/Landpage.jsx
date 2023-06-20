




import styles from "./Landpage.module.css"

const Landpage =(props)=>{
    const submitHandler=(event)=>{
        event.preventDefault();
        props.login()
    }
    return(
        <div className={styles.form}>
            <img src="../../public/logoL.png" alt=""/>
            <p></p>           
            <img src="../../public/landpageLogo.png" alt="" />
            <form  onSubmit={submitHandler} >
                <button type="submit">Ingresar</button>
            </form>
        </div>
    ) 
}
export default Landpage;