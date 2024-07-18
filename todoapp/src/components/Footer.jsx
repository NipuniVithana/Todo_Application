import styles from './footer.module.css';

export default function Footer({className, CompletedTodos,totalTodos}){
    return(
        <div  className={className}>
            <span className={styles.item}>Completed Todos:{CompletedTodos}</span>
            <span className={styles.item}>Total Todos:{totalTodos}</span>
        </div>
    )
}