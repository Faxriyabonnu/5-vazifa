/* eslint-disable jsx-a11y/anchor-has-content */
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
     <header>
      <div className="container">
        <a href="some">Start Bootstrap</a>
        <ul>
           <li><a href='some'>Home</a></li>
           <li><a href='some'>About</a></li>
           <li><a href='some'>Contact</a></li>
        </ul>
      </div>
     </header>
    <div className='text-center my-5 py-5 bg-light border-bottom mb-4'>
       <h1 class="fw-bolder">Welcome to Blog Home!</h1>
       <p class="lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
    </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <a href="https://dummyimage.com/850x350/dee2e6/6c757d.jpg">
                <img src={'https://dummyimage.com/850x350/dee2e6/6c757d.jpg'} alt="" />
              </a>
              <div className="cardBody">
               <div className="small text-muted">January 1, 2022</div>
               <h2 className="card-title">Featured Post Title</h2>
               <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
               <a class="btn btn-primary" href="#!">Read more →</a>
              </div>
            </div>
            <div className="row">
          <div className="col-lg-6">
          {/* Blog post */}
          <div className="card mb-4">
            <a href="sime">
              <img src={"https://dummyimage.com/700x350/dee2e6/6c757d.jpg"} alt="" />
            </a>
            <div className="cardBody">
              <div class="small text-muted">January 1, 2022</div>
              <h2 class="card-title h4">Post Title</h2>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
              <a class="btn btn-primary" href="#!">Read more →</a>
            </div>
          </div>
          <div className="card mb-4">
            <a href="sime">
              <img src={"https://dummyimage.com/700x350/dee2e6/6c757d.jpg"} alt="" />
            </a>
            <div className="cardBody">
              <div class="small text-muted">January 1, 2022</div>
              <h2 class="card-title h4">Post Title</h2>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
              <a class="btn btn-primary" href="#!">Read more →</a>
            </div>
          </div>
          
          </div>
          <div className="col-lg-6">
          {/* Blog post */}
          <div className="card mb-4">
            <a href="sime">
              <img src={"https://dummyimage.com/700x350/dee2e6/6c757d.jpg"} alt="" />
            </a>
            <div className="cardBody">
              <div class="small text-muted">January 1, 2022</div>
              <h2 class="card-title h4">Post Title</h2>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
              <a class="btn btn-primary" href="#!">Read more →</a>
            </div>
          </div>
          <div className="card mb-4">
            <a href="sime">
              <img src={"https://dummyimage.com/700x350/dee2e6/6c757d.jpg"} alt="" />
            </a>
            <div className="cardBody">
              <div class="small text-muted">January 1, 2022</div>
              <h2 class="card-title h4">Post Title</h2>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
              <a class="btn btn-primary" href="#!">Read more →</a>
            </div>
          </div>
          
          </div>
        </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header">Search</div>
              <div className="cardBody">
                <div className="input-group">
                  <input className="form-control" type="text" name="name"placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                  <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                </div>
              </div>
            </div>
            <div className="card mb-4">
                        <div className="card-header">Categories</div>
                        <div className="cardBody">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Web Design</a></li>
                                        <li><a href="#!">HTML</a></li>
                                        <li><a href="#!">Freebies</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">Tutorials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Side Widget</div>
              <div className="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
            </div>
          </div>
      
        </div>
        <nav aria-label="Pagination">
                        
                        <ul className="pagination justify-content-center my-4">
                            <li className="page-item disabled"><a className="page-link" href="some" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li className="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                            <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
                            <li className="page-item"><a className="page-link" href="#!">15</a></li>
                            <li className="page-item"><a cclassNamelass="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav>
    </div>
    </div>
  );
}

export default App;
