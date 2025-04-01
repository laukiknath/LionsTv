import {Link} from 'react-router-dom';
const Footer = ()=>{
    return(
        <div>
            <footer id="site-footer" className="site-footer footer2">
        <div className="footer-wrapper dark-background">
            <div className="footer-copyright">
                <div className="site__container fullwidth-vidorev-ctrl">
                    <div className="site__row">
                        <div className="site__col font-size-12">
                            <div className="default-copyright" style={{color: 'black'}}>
                                <center>
                                    Copyright &copy; 2024. Created by ❤️ Laukik Nath Jagbandhu ❤️</center>
                            </div>
                            <hr/>
                            <span className="footer2" style={{fontSize: '16px'}}>
                                <center><Link to='/'>🏤 Contact Us</Link> |<Link>⛽ Request Us</Link> |<Link>📔 DMCA</Link>
                                </center>
                            </span>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

        </div>
    );
}
export default Footer;