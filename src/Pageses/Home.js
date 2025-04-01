import image1 from '../images/box1.jpg';
import image2 from '../images/box2.jpg';
import image3 from '../images/box3.jpg';
import image4 from '../images/box4.jpg';
import image5 from '../images/box5.jpg';
import image6 from '../images/box6.jpg';
import image7 from '../images/box7.jpg';
import image8 from '../images/box8.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <main>
                <div className="card margin1" style={{ width: '18rem', display: 'inline-block' }}>
                    <img src={image1} className="card-img-top" alt="Movie 1" />
                    <div className="card-body">
                        <h5 className="card-title">URI the Surgical Strike</h5>
                        <p className="card-text">Major Vihaan Singh Shergill of the Indian Army leads a covert operation against a
                            group of militants who attacked a base in Uri, Kashmir, in 2016 and killed many soldiers.</p>
                        <Link className="btn btn-primary">Download Now</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', display: 'inline-block' }}>
                    <img src={image2} className="card-img-top" alt="Movie 2" />
                    <div className="card-body">
                        <h5 className="card-title">Gadar 2</h5>
                        <p className="card-text">When Tara Singh goes missing during a skirmish and is believed to be captured in
                            Pakistan, his son Jeete sets out to rescue him and enters a labyrinth from which they both must
                            escape at all costs.</p>
                        <Link className="btn btn-primary">Download Now</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', display: 'inline-block' }}>
                    <img src={image3} className="card-img-top" alt="Movie 3" />
                    <div className="card-body">
                        <h5 className="card-title">Shershaah</h5>
                        <p className="card-text">Vikram Batra, a young man, dreams of becoming a soldier and falls in love with
                            Dimple. Soon after his training, he climbs the military ranks and contributes to India's victory in
                            the Kargil war.</p>
                        <Link className="btn btn-primary">Download Now</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', display: 'inline-block' }}>
                    <img src={image4} className="card-img-top" alt="Movie 4" />
                    <div className="card-body">
                        <h5 className="card-title">Dark</h5>
                        <p className="card-text">Hideously burnt after an attack, a scientist, who is mentally unstable, stretches
                            his invention of synthetic skin to the limit, by using other people's faces to take revenge. Best
                            Thriller Movies</p>
                        <Link className="btn btn-primary">Download Now</Link>
                    </div>
                </div>
                <br /><br />
                <div className="card margin1" style={{ width: '18rem', display: 'inline-block' }}>
                    <img src={image5} className="card-img-top" alt="Movie 1" />
                    <div className="card-body">
                        <h5 className="card-title">Bloody Daddy</h5>
                        <p className="card-text">After busting a drug racket, an alcoholic police officer finds himself on the radar
                            of a notorious crime lord. Soon, he finds himself on a desperate path to save the one he loves.</p>
                        <Link className="btn btn-primary">Download Now</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', display: 'inline-block' }}>
                    <img src={image6} className="card-img-top" alt="Movie 2" />
                    <div className="card-body">
                        <h5 className="card-title">Captain America: Civil War</h5>
                        <p className="card-text">Friction arises between the Avengers when one group supports the government's
                            decision to implement a law to control their powers while the other opposes it.Next Part Coming
                            soon.</p>
                        <Link className="btn btn-primary">Download Now</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', display: 'inline-block' }}>
                    <img src={image7} className="card-img-top" alt="Movie 3" />
                    <div className="card-body">
                        <h5 className="card-title">Wanda Vision</h5>
                        <p className="card-text">Living idealized suburban lives, super-powered beings Wanda and Vision begin to
                            suspect that everything is not as it seems. Based on: Marvel Comics. Genre: Drama; Mystery; Romance;
                        </p>
                        <Link className="btn btn-primary">Download Now</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', display: 'inline-block' }}>
                    <img src={image8} className="card-img-top" alt="Movie 4" />
                    <div className="card-body">
                        <h5 className="card-title">Avengers: Endgame</h5>
                        <p className="card-text">After Thanos, an intergalactic warlord, disintegrates half of the universe, the
                            Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.
                        </p>
                        <Link className="btn btn-primary">Download Now</Link>
                    </div>
                </div>
                <br /><br />
            </main>
        </div>
    );
}
export default Home;