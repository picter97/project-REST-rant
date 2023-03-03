const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! :@' : 'Rave! :*' }</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div id='infoPicture'>
              <div>
              <img src={data.place.pic} alt={data.place.name} width="600" height="600"/>
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
              </div>
              <div>
                <h1>{ data.place.name }</h1>
                <h2>rating</h2>
                <p>Not rated</p>
                <h2>Description</h2>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cussines}
                </h4>
                <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                  Edit
                </a>  
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>     
         
              </div>
            </div>
            <div id='comment-title'>
              <h2>Comments</h2>
            </div>
            {comments}
            <form method="POST" action=''>
              <div className="form-group">
                <label htmlFor="comment">content</label>
                <input className="form-control" id="comment" name="comment" required/>
              </div>
              <div className="form-group">
                <label htmlFor="author">author</label>
                <input className="form-control" id="author" name="author" required/>
              </div>
              <input type="range" id="points" name="points" min="0" max="5"></input>
              <div className='form-check'>
                <input type="checkbox" class="form-check-imput" id="check1"></input>
                <label className="form-check-label" for="exampleCheck1">Rant?</label>
              </div>
              <input className="btn btn-primary" type="submit" value="Add Comment"/>
            </form>
          </main>
        </Def>
    )
  }

module.exports = show
