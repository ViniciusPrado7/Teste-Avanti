import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import styles from "./styles/NavBar.module.css"

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchDiv}>
        <img className={styles.logo} src="./images/Grupo 21089.png" alt="Logo Avanti" />
        <input className={styles.searchInput} type="text" placeholder='Digite aqui o que você procura ' />
        <button className={styles.user}> <FaRegUser /> </button>
          <p>Olá, </p>
          <p className={styles.infoClient}> nome cliente!</p>
          <button className={styles.cart}>  <IoCartOutline /> </button>
      </div>
      <div className={styles.containerLink}>
        <a className={styles.categorias} href=""> <FiMenu  className={styles.menu}/> Todas as Categorias </a>
        <a className={styles.departamento} href=""> Departamento </a>
        <a className={styles.departamento} href=""> Departamento </a>
        <a className={styles.departamento} href=""> Departamento </a>
        <a className={styles.departamento} href=""> Departamento </a>
        <a className={styles.departamento} href=""> Departamento </a>
        <a className={styles.departamento} href=""> Departamento </a>
        <a className={styles.departamento} href=""> Departamento </a>
        <a className={styles.departamento} href=""> Departamento </a> 
      </div>
    </div>
   
  )
}

export default NavBar