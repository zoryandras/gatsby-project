import React from 'react'

function Footer() {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span> My crazy recipes! </span>
        You can find other stuff at
        <a href="https://zoryandras.github.io/react-website-practice/">
          {" "}
          my demo page! :)
        </a>
      </p>
    </footer>
  )
}

export default Footer