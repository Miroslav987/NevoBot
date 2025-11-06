import { QRCode } from 'antd'

import logo from '@shared/icons/logo.svg'

import styles from './styles.module.scss'

const QRBot = () => {
  const status = true
  return (
    <div className={styles.qrBlock}>
      {status ? (
        <>
 <div style={{ position: "relative", display: "inline-block" }}>
    <QRCode
      value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      // value="https://img-webcalypt.ru/img/thumb/lg/images/meme-templates/cDQV4DzT8v2N1ANOOZSOTO5vb3ElmkRp.jpg.jpg"
      size={250}
      errorLevel="H" 
    />
    <img
      src={logo}
      alt="Logo"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 100,
        height: 35,
        transform: "translate(-50%, -50%)",
        background: "white",
        borderRadius: 6,
        padding: 2,
      }}
    />
  </div>
          <p className={styles.offline}>офлайн</p>
        </>
      ) : (
        <p className={styles.online}>онлайн</p>
      )}
    </div>
  )
}

export default QRBot
