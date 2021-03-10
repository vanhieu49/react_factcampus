import React from "react";
class CompContent_1 extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
      const content1 =[
        {
          tag: ['Lifetime collection','Character drawing','Goods', 'emoticon'],
          title: 'Character Drawing/Goods/Im Tea/Cuttoon All-in-One Package Online with Salt Toon.',
          des: 'Lecture on creating goods, emoticons, and instagrams through daily life and graffiti with Salt Toon'
        },
        {
          tag: ['1:1 management','Weekly refund','Service plan', 'portfolio'],
          title: 'Learn while solving like a quiz Python deep learning 300 + practice package online.',
          des: 'Deep learning as easy and fun as a game! Solve more than 300 problems to get your hands on experience.'
        },
        {
          tag:['1:1 management','Weekly refund','Service plan', 'portfolio'],
          title:'Completion of service plan Online completion class',
          des:'Service Planning Lectures that are perfect for you who are self-study. Complete my service plan with 15 years+ planner!'
        },
        {
          tag: ['1:1 coaching','Introductory-employment','Data analysis', 'Data engineering'],
          title:'Data Science Online Completion Class',
          des:'From high-quality lectures in real job classes to close care like 1:1 tutoring!'
        }
      ]
      const listCell = content1.map((value, index)=>{
        return  <div className={`cell${index+1} cell`}>
                  <div className={`bg bg${index+1}`}>
                    {index ==1||index==0 ?<div className="card__badge __blue"><div>
                        사전예약
                      </div></div> :'' }
                  </div>
                  <div className="cell_body">
                    <div className="cell_tag">
                      {value.tag.map((value, index)=>{
                        return <span  className="tag" key={value}>{value}</span>
                      })}
                    </div>
                    <div className="title_cell">{value.title}</div>
                    <div className="des_cell">
                      {value.des}
                    </div>
                  </div>
                </div>
      }) 
        return(
            <div className="content1">
            <h2 className="title_content">Bestselling Lecture of the Week</h2>
            <div className="content1_inside">
              {listCell}
            </div>
          </div>
        )
    }
}
export default CompContent_1;
