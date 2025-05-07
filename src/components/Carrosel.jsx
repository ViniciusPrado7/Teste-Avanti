import React, { useRef } from 'react'
import styles from "./styles/Carrosel.module.css"
import produtos from './Produtos';

const Carrosel = () => {
  const carrosselRef = useRef(null);


  const handleLeftClick = (e) => {
    e.preventDefault();
    carrosselRef.current.scrollLeft -= carrosselRef.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carrosselRef.current.scrollLeft += carrosselRef.current.offsetWidth;
  }


  return (
    <div className={styles.containerCarrosel}>
      <div className={styles.tituloCarrosel}>
        <h1>Lançamentos</h1>
      </div>

      <div className={styles.wrapper}>
        <button className={styles.setaLeft} onClick={handleLeftClick}>‹</button>

        <div className={styles.carrossel} ref={carrosselRef}>
          {produtos.map((produto) => (
            <div key={produto.id} className={styles.item}>
              <img src={produto.imagem} alt={produto.nome} className={styles.imageCarrosel} />
              <div className={styles.info}>
                <span className={styles.name}>{produto.nome}</span>
                <span className={styles.oldPrice}>{produto.oldPrice} </span>
                <span className={styles.price}>{produto.price}</span>
                <span className={styles.vezes}>Ou até <strong>10x de R$ 7,90</strong></span>
              </div>
              <button className={styles.comprar}>Comprar</button>
            </div>
          ))}
        </div>

        <button className={styles.setaRight} onClick={handleRightClick}>›</button>
      </div>
    </div>
  )
}

export default Carrosel;
