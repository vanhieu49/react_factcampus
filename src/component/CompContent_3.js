import React from "react";
class CompContent_3 extends React.Component {
    constructor(props){
        super(props);
    }
    render(){

      const cell1 = {
        tag: ['Kwon Oh-sang','Financial Statements','Company analysis', 'M&amp;A','IPO'],
        title: 'Kwon Oh Sang Financial Academy-Financial Statement Analysis Basics',
        des: ' Online first public CPA/CFA star lecturer Kwon Oh-sang, a real practical story from accountant'
      }
      const cell2 = {
        tag: ['Lifetime collection','Premier'],
        title: 'Finished in 10 Minutes Xida Premier Online.',
        des: 'Young, Al, No, 10 minutes a day, it takes only a month to finish the sida premiere! 1,500 video sources + shortcut key calendar provided just by taking the course!'
      }
      const cell3 = {
        tag:['Lifetime collection','After effect','C4D'],
        title:'Motion Graphics Super Gap Package Online.',
        des:'2D&amp;3D motion graphics, Photoshop, and Illustrator are all at once!'
      }
      const cell4 = {
        tag: ['Lifetime collection','Automation','No code', 'Business automation'],
        title:'Online, a super-gap package of repetitive tasks that ends with 7 tools.',
        des:'Lectures for you who are hit by repetitive work and overtime. Whether it\'s office, finance, marketing or design, don\'t worry now! Here are some tips on how to work smartly, quickly and efficiently! Meet the 7 solution tools now.'
      }
        return(
                <div className="content3">
                  <h2 className="title_content">Marketing/Creative/Finance Popular Lecture</h2>
                  <div className="content3_inside">
                    <div className="cell1 cell">
                      <div className="bg bg1">
                        <div className="card__badge __red"><div>
                            전체오픈
                          </div></div>
                      </div>
                      <div className="cell_body">
                        <div className="cell_tag">
                          {cell1.tag.map((value, index)=>{
                            return <span  className="tag" key={value}>{value}</span>
                          })}
                        </div>
                        <div className="title_cell">{cell1.title}</div>
                        <div className="des_cell">
                          {cell1.des}
                        </div>
                      </div>
                    </div>
                    <div className="cell2 cell">
                      <div className="bg bg2">
                        <div className="card__badge __blue"><div>
                            사전예약
                          </div></div>
                      </div>
                      <div className="cell_body">
                        <div className="cell_tag">
                          {cell2.tag.map((value, index)=>{
                              return <span  className="tag" key={value}>{value}</span>
                            })}
                        </div>
                        <div className="title_cell">
                          {cell2.title}
                        </div>
                        <div className="des_cell">
                          {cell2.des}
                        </div>
                      </div>
                    </div>
                    <div className="cell3 cell">
                      <div className="bg bg3">
                        <div className="card__badge __blue"><div>
                            사전예약
                          </div></div>
                      </div>
                      <div className="cell_body">
                        <div className="cell_tag">
                          {cell3.tag.map((value, index)=>{
                              return <span  className="tag" key={value}>{value}</span>
                            })}
                        </div>
                        <div className="title_cell">
                          {cell2.title}
                        </div>
                        <div className="des_cell">
                          {cell2.des}
                        </div>
                      </div>
                    </div>
                    <div className="cell4 cell">
                      <div className="bg bg4">
                        <div className="card__badge __blue"><div>
                            사전예약
                          </div></div>
                      </div>
                      <div className="cell_body">
                        <div className="cell_tag">
                        {cell4.tag.map((value, index)=>{
                            return <span  className="tag" key={value}>{value}</span>
                          })}
                        </div>
                        <div className="title_cell">{cell4.title}</div>
                        <div className="des_cell">{cell4.des}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        )
    }
}
export default CompContent_3;
