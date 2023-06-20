import styles from './SearchBar.module.css'
import { connect } from "react-redux";
import {searchName } from "../redux/actions";
import { useNavigate} from 'react-router-dom';
function SearchBar({searchName}) {
   const navigate = useNavigate();  
   const handleSubmit=(event)=>{
      event.preventDefault();
      navigate('/home')
      searchName(event.target.elements.searchInput.value)
   }
   return (
      <div className={styles.search}>
         <form onSubmit={handleSubmit}>

         <input placeholder='Nombre del pais'
            type='text'
            className={styles.searchInput}
            name='searchInput'
         />
         <button type='submit'>🔍︎</button>  
         </form>
      </div>
   );
}

const mapDispatchToProps=(dispatch)=>{
   return{
      searchName: (name)=>{dispatch(searchName(name))}
   }
}
export default connect (null,mapDispatchToProps)(SearchBar);