import React from "react";
import CompNotice from './CompNotice'
import CompContent_1 from './CompContent_1'
import CompContent_2 from './CompContent_2'
import CompContent_3 from './CompContent_3'
import CompContent_4 from './CompContent_4'

class CompContent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="content">
              <div className="container">
                <CompNotice />
                <span className="best">
                  BEST
                </span>
                <CompContent_1 />
                <CompContent_2 />
                <CompContent_3 />
                <CompContent_4 />
                <div className="banner">
                  <a className="banner_left">
                    <div className="banner_inside">
                      <div className="line1">The turning point of my life- </div>
                      <div className="line2">start with a job SCHOOL!</div>
                    </div>
                  </a>
                  <a className="banner_right">
                    <div className="banner_inside">
                      <div className="line1">Add KakaoTalk-Flickin of Finished Juban and </div>
                      <div className="line2">receive various events &amp; news!</div>
                    </div>
                  </a>
                </div>
              </div>
            </section>

        )
    }
}
export default CompContent;