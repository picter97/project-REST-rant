const React = require('react')
const Def = require('./default')

function home () {

  return (
    <Def>
      <main>
        <h1>Home</h1>
        <div>
          <img src="/images/burger.jpg" alt="burger" width="600" height="600"/>
          <div>
            Photo by <a href="https://unsplash.com/@goodeats_yqr">goodEats YQR</a> on <a href="https://unsplash.com/">unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>

      </main>
    </Def>
  )

}

module.exports = home