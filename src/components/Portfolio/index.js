import React from 'react';
import SongSuggest from '../../assets/images/1songsuggest1.jpg';
import Foodle from '../../assets/images/foodle4.jpg';

function Portfolio() {
    return (
        <section className="portfolio">
        <div className="center">
            <h1 className="page-header" id="portfolio">My Portfolio</h1>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
            <div class="col">
                <div class="card">
                    <img
                        src={SongSuggest}
                        alt="SongSuggest"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Song Suggest</p>
                        <a href="https://github.com/luketorv/songsearch" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://vast-stream-48863.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={Foodle}
                        alt="Foodle"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Foodle</p>
                        <a href="https://github.com/luketorv/Foodle" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://luketorv.github.io/Foodle/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Portfolio;