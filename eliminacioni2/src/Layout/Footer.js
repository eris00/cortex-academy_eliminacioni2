import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <h3>CortexAcademy</h3>
      <p>
        Eris Šutković &copy; {new Date().getFullYear()}{" "}
        Drugi eliminacioni test ReactJS
      </p>
    </footer>
  )
}

export default Footer