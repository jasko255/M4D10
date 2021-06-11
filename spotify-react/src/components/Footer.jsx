const Footer = () => {
    return ( 
        <>

<div className="container-fluid footer">
      <footer>
        <div className="row">
          <div className="col-4 col-sm-4">
          </div>
          <div className="col-10 col-sm-4 d-flex align-items-center justify-content-center flex-column">
            <div className="row justify-content-center align-content-center">
              <div className="col player-buttons justify-content-between">
                <button>
                  <i className="fas fa-random"></i>
                </button>
                <button>
                  <i className="fas fa-step-backward wider-icon"></i>
                </button>
                <button className="play-button">
                  <i className="fas fa-play"></i>
                </button>
                <button>
                  <i className="fas fa-step-forward wider-icon"></i>
                </button>
                <button>
                  <i className="fas fa-redo-alt"></i>
                </button>
              </div>
            </div>
            <div className="row w-100 timeline">
              <div className="col d-flex align-items-center">
                <div className="player-time">0:00</div>
                <div className="col px-2">
                  <div className="player-bar">
                  </div>
                </div>
                <div className="player-time">0:00</div>
              </div>
            </div>
          </div>
          <div className="col-2 col-sm-4 d-flex justify-content-end align-items-center player-right-section">
            <button>
              <i className="fas fa-align-justify"></i>
            </button>
            <button>
              <i className="fas fa-desktop"></i>
            </button>
            <div className="d-flex align-items-center volume-bar">
              <button>
                <i className="fas fa-volume-up"></i>
              </button>
              <div className="player-volume d-none d-sm-block">
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
        </>

     );
}
 
export default Footer;