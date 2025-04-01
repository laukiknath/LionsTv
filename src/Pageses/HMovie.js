import { Link } from "react-router-dom";
import image1 from '../images/hb1.jpg';
import image2 from '../images/hb2.jpg';
import image3 from '../images/hb3.jpg';
import image4 from '../images/box4.jpg';
import image5 from '../images/hb5.jpg';
import image6 from '../images/box6.jpg';
import image7 from '../images/box7.jpg';
import image8 from '../images/box8.jpg';
const HMovie=()=>{
    return(
        <div>
              <main>
        <div class="card margin1" style={{width: '18rem',display:'inline-block'}}>
            <img src={image1} class="card-img-top" alt="Movie 1"/>
            <div class="card-body">
                <h5 class="card-title">
                    Inception</h5>
                <p class="card-text">Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div class="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image2} class="card-img-top" alt="Movie 2"/>
            <div class="card-body">
                <h5 class="card-title">Interstellar</h5>
                <p class="card-text">When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.</p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div class="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image3} class="card-img-top" alt="Movie 3"/>
            <div class="card-body">
                <h5 class="card-title">Parasite</h5>
                <p class="card-text">The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.</p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div class="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image4} class="card-img-top" alt="Movie 4"/>
            <div class="card-body">
                <h5 class="card-title">Dark</h5>
                <p class="card-text">Hideously burnt after an attack, a scientist, who is mentally unstable, stretches
                    his invention of synthetic skin to the limit, by using other people's faces to take revenge. Best
                    Thriller Movies</p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <br/><br/>
        <div class="card margin1" style={{width: '18rem',display:'inline-block'}}>
            <img src={image5} class="card-img-top" alt="Movie 1"/>
            <div class="card-body">
                <h5 class="card-title">1917</h5>
                <p class="card-text">During World War I, two British soldiers Lance Cpl. Schofield and Lance Cpl. Blake receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver</p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div class="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image6} class="card-img-top" alt="Movie 2"/>
            <div class="card-body">
                <h5 class="card-title">Captain America: Civil War</h5>
                <p class="card-text">Friction arises between the Avengers when one group supports the government's
                    decision to implement a law to control their powers while the other opposes it.Next Part Coming
                    soon.</p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div class="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image7} class="card-img-top" alt="Movie 3"/>
            <div class="card-body">
                <h5 class="card-title">Wanda Vision</h5>
                <p class="card-text">Living idealized suburban lives, super-powered beings Wanda and Vision begin to
                    suspect that everything is not as it seems. Based on: Marvel Comics. Genre: Drama; Mystery; Romance;
                </p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <div class="card" style={{width: '18rem',display:'inline-block'}}>
            <img src={image8} class="card-img-top" alt="Movie 4"/>
            <div class="card-body">
                <h5 class="card-title">Avengers: Endgame</h5>
                <p class="card-text">After Thanos, an intergalactic warlord, disintegrates half of the universe, the
                    Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.
                </p>
                <Link className="btn btn-primary">Download Now</Link>
            </div>
        </div>
        <br/><br/>
    </main>
        </div>
    );
}
export default HMovie;