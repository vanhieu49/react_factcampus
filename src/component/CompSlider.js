import React, {Component} from 'react';
import img1 from './../images/0depth-main-banner-web--1.png';
import img2 from './../images/0depth-main-banner-web.png';
import img3 from './../images/0depth-main-banner-web-1.jpg';
import img4 from './../images/b2b-banner-web--1.png';
import img5 from './../images/main-banner-web.png';
import lib from '../component/libSlider'

class CompSlider extends Component{
  render(){
    return(
      <section id="carousel">
        <div className="carousel_container">
          <div className="carousel ca_inital ca_slider ca_dotted">
            <div className="ca_list">
              <div className="ca_track">
                <div className="ca_slide" role="tabpanel" tabIndex={0} id="panel-1" aria-labelledby="tab-1">
                  <a className="_block">
                    <div>
                      <picture>
                        <img src={img1} />
                      </picture>
                      <div className="ca_panel">
                        <h3>Over 500 student<br /> online lecture 1+1</h3>
                        <p>Closed on Sunday, March 14th<br />One more class you want!</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ca_slide" role="tabpanel" tabIndex={0} id="panel-2" aria-labelledby="tab-2" hidden>
                  <a className="_block">
                    <div>
                      <picture>
                        <img src={img2} />
                      </picture>
                      <div className="ca_panel">
                        <h3>How to plan storytelling<br /> from the production director of Ghibli</h3>
                        <p>The first story of the Top Tier,<br /> The Red by Kihara</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ca_slide" role="tabpanel" tabIndex={0} id="panel-3" aria-labelledby="tab-3" hidden>
                  <a className="_block">
                    <div>
                      <picture>
                        <img src={img3}  />
                      </picture>
                      <div className="ca_panel">
                        <h3 />
                        <p />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ca_slide" role="tabpanel" tabIndex={0} id="panel-4" aria-labelledby="tab-4" hidden>
                  <a className="_block">
                    <div>
                      <picture>
                        <img src={img4} />
                      </picture>
                      <div className="ca_panel">
                        <h3>B2B subscription service<br /> that starts casually</h3>
                        <p>Now employee training conveniently online!</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ca_slide" role="tabpanel" tabIndex={0} id="panel-5" aria-labelledby="tab-5" hidden>
                  <a className="_block">
                    <div>
                      <picture>
                        <img src={img5} />
                      </picture>
                      <div className="ca_panel">
                        <h3>Casually, one book per week,<br /> a light study paper for foreign languages</h3>
                        <p>Only until March 14th (Sunday),<br /> inexpensively with Workbook + Appletem Setou!</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ca_grid">
            <div className="ca_func">
              <div className="ca_dots" role="tablist">
                <button id="tab-1" type="button" role="tab" tabIndex={0} aria-controls="panel-1" aria-selected="true" />
                <button id="tab-2" type="button" role="tab" tabIndex={-1} aria-controls="panel-2" aria-selected="false" />
                <button id="tab-3" type="button" role="tab" tabIndex={-1} aria-controls="panel-3" aria-selected="false" />
                <button id="tab-4" type="button" role="tab" tabIndex={-1} aria-controls="panel-4" aria-selected="false" />
                <button id="tab-5" type="button" role="tab" tabIndex={-1} aria-controls="panel-5" aria-selected="false" />
              </div>
              <div className="ca_control">
                <button type="button" aria-label="Previous"><i className="fas fa-chevron-left" /></button>
                <button className="btn " type="button" aria-label="play" aria-checked="true"><i className="fas fa-play" /></button>
                <button className="btn active" type="button" aria-label="pause"><i className="fas fa-pause" /></button>
                <button type="button" aria-label="Next"><i className="fas fa-chevron-right" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

    )

    
  }
}

export default CompSlider;
