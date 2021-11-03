export default function SliderNav(){
    return (      <div className="cd-slider-nav">
    <nav className="navbar">
        <div className="tm-navbar-bg">
            
            <a className="navbar-brand text-uppercase" href="#"><i className="fa fa-flash tm-brand-icon"></i>Upper</a>

            <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                &#9776;
            </button>
            <div className="collapse navbar-toggleable-md text-xs-center text-uppercase tm-navbar" id="tmNavbar">
                <ul className="nav navbar-nav">
                    <li className="nav-item active selected">
                        <a className="nav-link" href="#0" data-no="1">Home <span className="sr-only">(current)</span></a>
                    </li>                                
                    <li className="nav-item">
                        <a className="nav-link" href="#0" data-no="2">First Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0" data-no="3">Second</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0" data-no="4">Third Grid</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0" data-no="5">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0" data-no="6">Contact</a>
                    </li>
                </ul>
            </div>                        
        </div>

    </nav>
</div> );
};