const Header = () => {
    return <>
        <div className="sticky-top" style= {{backgroundColor: '#434343'}}>
            <nav className="navbar navbar-expand-xl">
                <div className="container-fluid align-items-center">
                    <a className="navbar-brand" href="index.html">
                        <img src="./assets/image/areview-header.png" alt="LOGO" width="200" height="100%" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex column-gap-2 align-items-center ms-auto order-lg-2" role="search" id="search">
                            <input className="form-control thin" type="search" placeholder="Search" aria-label="Search" />
                            <a href="index.html"><i className="fa-solid fa-magnifying-glass" style={{ width: '20px', height: '100%' , color: '#f4661B'}}></i></a>
                            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
                                aria-controls="offcanvasWithBothOptions">
                                <div className="fa-solid fa-user" style={{width: '20px', height: '100%', color: ' #f4661B' }} />
                            </button>
                        </form>
                        <ul className="navbar-nav d-flex flex-fill text-center order-lg-1">
                            <li className="nav-item flex-fill">
                                <a className="nav-link" href="movies.html">cinéma</a>
                            </li>
                            <li className="nav-item flex-fill">
                                <a className="nav-link" href="series.html">séries</a>
                            </li>
                            <li className="nav-item flex-fill">
                                <a className="nav-link" href="video_game.html">gaming</a>
                            </li>
                            <li className="nav-item flex-fill">
                                <a className="nav-link" href="music.html">musique</a>
                            </li>
                            <li className="nav-item flex-fill">
                                <a className="nav-link" href="book.html">livre</a>
                            </li>
                            <li className="nav-item flex-fill">
                                <a className="nav-link" href="evenement.html">événements</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end " data-bs-scroll="true" id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header ">
                    <h5 className="offcanvas-title " id="offcanvasWithBothOptionsLabel">Se connecter</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"> </button>
                </div>
                <div className="offcanvas-body">
                    <div className="input-group my-1" id="Pseudo">
                        <span className="input-group-text " id="logo_pseudo">
                            <i className="fa-solid fa-user" style={{color: '#f4661B'}}></i>
                        </span>
                        <div className="col-sm ">
                            <input type="text" className="form-control" placeholder="Pseudo / email" aria-label="Login"
                                aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="input-group my-1" id="password">
                        <span className="input-group-text " id="logo_cadenas">
                            <i className="fa-solid fa-lock" style={{color: '#f4661B'}}></i>
                        </span>
                        <div className="col-sm ">
                            <input type="password" className="form-control" placeholder="Mot de passe" aria-label="Login"
                                aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="row my-1">
                        <div className="form-check ms-2 text-start">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" >
                                Se souvenir de moi
                            </label>
                        </div>
                    </div>
                    <div className="row my-1 text-center">
                        <a href="">Mot de passe oublié ?</a>
                    </div>
                    <div className="row mt-3 text-center">
                        <a href="account.html"><button className="btn" type="submit" id="bouton_orange"> Se connecter </button> </a>
                    </div>
                    <div className="row my-1 text-center">
                        <a href="login.html"><button className="btn" type="submit" id="bouton_orange"> Sinscrire </button> </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Header