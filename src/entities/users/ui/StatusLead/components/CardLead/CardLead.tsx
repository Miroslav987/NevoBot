'use client'

import { FC } from 'react'

import styles from './CardLead.module.scss'
import type { CardLead } from '../../model/StatusLeadList'

type CardLeadProps ={
    card:CardLead
}

const CardLead: FC<CardLeadProps> = ( {card}) => {
    const color = card.color ?card.color :""
  return (
    <div style={{borderLeft:`5px solid ${color}`}} className={styles.cardLead}>
      <p className={styles.title} style={{color:color}}>{card.title}</p>
      <p className={styles.count}>{card.count}</p>
      <p className={styles.tetx}>количество лидов</p>
    </div>
  )
}

export default CardLead
