
import ExpensesMonitoring from "../component/expenses/ExpensesMonitoring";
import styles from "../page.module.css";


export default function Page() {
    return (
        < div className={styles.home} >
            <ExpensesMonitoring />
        </div>
    );
} 