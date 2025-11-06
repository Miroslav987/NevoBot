import styles from './styles.module.scss'

const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.spin}></div>
        </div>
    );
};

export default Loading;