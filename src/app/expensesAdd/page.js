
import ExpensesAdd from "../component/expensesAdd/ExpensesAdd";
import styles from "../page.module.css";


export default function Page() {
    return (
        < div className={styles.home} >
            <ExpensesAdd />
        </div>
    );
} 