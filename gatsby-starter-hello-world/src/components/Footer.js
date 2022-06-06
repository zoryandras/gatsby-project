import React from 'react'

function Footer() {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span> My crazy recipes! </span>
        You can find other stuff at
        <a href="https://zoryandras.github.io/sass-project/dist/index.html">
          {" "}
          my demo page! :)
        </a>
      </p>
    </footer>
  )
}

export default Footer