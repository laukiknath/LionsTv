import image1 from '../images/box1.jpg';
import image2 from '../images/box2.jpg';
import image3 from '../images/box3.jpg';
import image4 from '../images/box9.jpg';
import image5 from '../images/box5.jpg';
import image6 from '../images/box11.jpg';
import image7 from '../images/box12.jpg';
import image8 from '../images/box13.jpg';
import {Link} from 'react-router-dom';
const BMovie=()=>{
    return(
        <div>
            <main>
        <div className="card margin1" style={{width: '18rem',display:'inline-block'}}>
            <img src={image1} className="card-img-top" alt="Movie 1"/>
            <div className="card-body">
                <h5 className="card-title">URI the Surgical Strike</h5>
                <p className="card-text">Major Vihaan Singh Shergill of the Indian Army leads a covert operation against a
                    group of militants who attacked a base in Uri, Kashmir, in 2016 and killed many soldiers.</p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div className="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image2} className="card-img-top" alt="Movie 2"/>
            <div className="card-body">
                <h5 className="card-title">Gadar 2</h5>
                <p className="card-text">When Tara Singh goes missing during a skirmish and is believed to be captured in
                    Pakistan, his son Jeete sets out to rescue him and enters a labyrinth from which they both must
                    escape at all costs.</p>
                    <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div className="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image3} className="card-img-top" alt="Movie 3"/>
            <div className="card-body">
                <h5 className="card-title">Shershaah</h5>
                <p className="card-text">Vikram Batra, a young man, dreams of becoming a soldier and falls in love with
                    Dimple. Soon after his training, he climbs the military ranks and contributes to India's victory in
                    the Kargil war.</p>
                    <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div className="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image4} className="card-img-top" alt="Movie 4"/>
            <div className="card-body">
                <h5 className="card-title">Brahmāstra: Part One - Shiva</h5>
                <p className="card-text">Shiva and Isha, a young couple, learn about the secrets of the Brahmastra. Together, they must stop the forces of evil from destroying the universe.</p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <br/><br/>
        <div className="card margin1" style={{width: '18rem',display:'inline-block'}}>
            <img src={image5} className="card-img-top" alt="Movie 1"/>
            <div className="card-body">
                <h5 className="card-title">Bloody Daddy</h5>
                <p className="card-text">After busting a drug racket, an alcoholic police officer finds himself on the radar
                    of a notorious crime lord. Soon, he finds himself on a desperate path to save the one he loves.</p>
                    <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div className="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image6} className="card-img-top" alt="Movie 2"/>
            <div className="card-body">
                <h5 className="card-title">Ghajini</h5>
                <p className="card-text">A tycoon suffering from acute short-term memory loss uses a collection of polaroids and tattoos to find his lover's killer and avenge her death. Best Thriller Action Romance Movie</p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div className="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image7} className="card-img-top" alt="Movie 3"/>
            <div className="card-body">
                <h5 className="card-title">
                    Wanted</h5>
                <p className="card-text">A sharpshooter is caught between a gangster who wants him dead since he knows too much, the police who want him for the information he holds and his girlfriend who yearns for him to mend his ways.
                </p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div className="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image8} className="card-img-top" alt="Movie 4"/>
            <div className="card-body">
                <h5 className="card-title">Tiger Zinda Hai</h5>
                <p className="card-text">RAW Agent Tiger joins forces with Zoya in order to rescue a group of nurses who are held hostage by a terrorist organisation.
                    Best Thriller Action Romance Comedey Adventure Movies.
                </p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <br/><br/>
    </main>
        </div>
    );
}
export default BMovie;