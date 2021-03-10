import React from "react";
class CompContent_1 extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
      const cell1 = {
        tag: ['Lifetime collection','Character drawing','Goods', 'emoticon'],
        title: 'Character Drawing/Goods/Im Tea/Cuttoon All-in-One Package Online with Salt Toon.',
        des: 'Lecture on creating goods, emoticons, and instagrams through daily life and graffiti with Salt Toon'
      }
      const cell2 = {
        tag: ['1:1 management','Weekly refund','Service plan', 'portfolio'],
        title: 'Learn while solving like a quiz Python deep learning 300 + practice package online.',
        des: 'Deep learning as easy and fun as a game! Solve more than 300 problems to get your hands on experience.'
      }
      const cell3 = {
        tag:['1:1 management','Weekly refund','Service plan', 'portfolio'],
        title:'Completion of service plan Online completion class',
        des:'Service Planning Lectures that are perfect for you who are self-study. Complete my service plan with 15 years+ planner!'
      }
      const cell4 = {
        tag: ['1:1 coaching','Introductory-employment','Data analysis', 'Data engineering'],
        title:'Data Science Online Completion Class',
        des:'From high-quality lectures in real job classes to close care like 1:1 tutoring!'
      }
        return(
            <div className="content1">
            <h2 className="title_content">Bestselling Lecture of the Week</h2>
            <div className="content1_inside">
              <div className="cell1 cell">
                <div className="bg bg1">
                  <div className="card__badge __blue"><div>
                      사전예약
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
                <div className="bg bg3" />
                <div className="cell_body">
                  <div className="cell_tag">
                  {cell3.tag.map((value, index)=>{
                      return <span  className="tag" key={value}>{value}</span>
                    })}
                  </div>
                  <div className="title_cell">
                    {cell3.title}
                  </div>
                  <div className="des_cell">
                    {cell3.des}
                  </div>
                </div>
              </div>
              <div className="cell4 cell">
                <div className="bg bg4" />
                <div className="cell_body">
                  <div className="cell_tag">
                  {cell4.tag.map((value, index)=>{
                      return <span  className="tag" key={value}>{value}</span>
                    })}
                  </div>
                  <div className="title_cell">{cell4.title}</div>
                  <div className="des_cell">{cell4.des}</div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default CompContent_1;
