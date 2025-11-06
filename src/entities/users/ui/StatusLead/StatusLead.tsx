import React from 'react'

import styles from './StatusLead.module.scss'
import CardLead from './components/CardLead/CardLead'
import { statusLeadList } from './model/StatusLeadList'

const StatusLead = () => {
    console.log(statusLeadList);
    
  return (
    <div className={styles.statusLead}>
      <div className={styles.list}>
        {statusLeadList[0].title ? statusLeadList.map((card) => <CardLead card={card} />) : null}
      </div>
    </div>
  )
}

export default StatusLead
