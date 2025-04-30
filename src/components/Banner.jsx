import React from 'react'
import styles from './styles/Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImages}>
        <img className={styles.roupas} src="./images/cadeira.jpg" alt="roupas" />
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.divInfo}>
          <h2 className={styles.infoSuper}>SUPER</h2>
          <h2 className={styles.infoSale}>SALE</h2>
        </div>
        <div className={styles.divValor}>
          <p className={styles.infoItens}>ITENS SELECIONADOS COM ATÉ</p>
          <p className={styles.infoPorcentagem}>50%OFF</p>
        </div>
      </div>
      
    </div>
  )
}

export default Banner