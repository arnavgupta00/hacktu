import logo from '../../assets/Logo.png'
import style from "./parenthome.module.css"
const ParentHome = () => {
    return ( 
        <>
        <nav className={style.main}>
            <h1>Hey</h1>
            <img src={logo}/>
        </nav>
        <div className={style.midcomp}>
            <h2>Progress Tracker</h2>
            <button>Donate</button>
        </div>
        <div className={style.ongoing}>
            <h1>Ongoing Courses</h1>
        </div>
        <div className={style.quiz}>
            <h1>Quizzes</h1>
        </div>
        <div className={style.pending}>
            <h1>Pending Courses</h1>
        </div>
        <div className={style.completedcourses}>
            <h1>Completed Courses</h1>
        </div>
        </>
     );
}
 
export default ParentHome;