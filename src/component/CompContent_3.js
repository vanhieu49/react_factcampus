import React from "react";
class CompContent_3 extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
      const content3 = [
        {
          tag: ['Kwon Oh-sang','Financial Statements','Company analysis', 'M&amp;A','IPO'],
          title:'Kwon Oh Sang Financial Academy-Financial Statement Analysis Basics',
          des:' Online first public CPA/CFA star lecturer Kwon Oh-sang, a real practical story from accountant'
        },
        {
          tag: ['Lifetime collection','Premier'],
          title: 'Finished in 10 Minutes Xida Premier Online.',
          des: 'Young, Al, No, 10 minutes a day, it takes only a month to finish the sida premiere! 1,500 video sources + shortcut key calendar provided just by taking the course!',
        },
        {
          tag: ['Lifetime collection','After effect','C4D'],
          title: 'Motion Graphics Super Gap Package Online.',
          des: '2D&amp;3D motion graphics, Photoshop, and Illustrator are all at once!',
        },
        {
          tag: ['Lifetime collection','Automation','No code', 'Business automation'],
          title: 'Online, a super-gap package of repetitive tasks that ends with 7 tools.',
          des:'Lectures for you who are hit by repetitive work and overtime. Whether it\'s office, finance, marketing or design, don\'t worry now! Here are some tips on how to work smartly, quickly and efficiently! Meet the 7 solution tools now.' ,
        }
      ]
      const listCell = content3.map((value, index)=>{
        return  <div className={`cell${index+1} cell`}>
                  <div className={`bg bg${index+1}`}>
                  {index ==1||index==2||index==3 ?<div className="card__badge __blue"><div>
                      사전예약
                      </div></div> :index==0?<div className="card__badge __red"><div>
                      전체오픈
                      </div></div>:'' }
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
                <div className="content3">
                  <h2 className="title_content">Marketing/Creative/Finance Popular Lecture</h2>
                  <div className="content3_inside">
                    {listCell}
                  </div>
                </div>
        )
    }
}
export default CompContent_3;
