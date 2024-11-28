import IncomeMonitoring from "../component/income/IncomeMonitoring";
import styles from "../page.module.css";


export default function Page() {
    return (
        < div className={styles.home} >
            <IncomeMonitoring />
        </div>
    );
} 