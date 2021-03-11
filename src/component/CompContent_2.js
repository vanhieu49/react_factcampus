import React from "react";
class CompContent_2 extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
      const content2 = [
        {
          tag: ['1:1 management','Weekly refund','Publishing a book', 'Brunch artist registration'],
          title:'Book Publishing Online with Brunch.',
          des:'From registering a brunch writer to publishing your own book. Experience 1:1 with the artist for 55 days!'
        },
        {
          tag: ['1:1 management','Weekly refund','Digital marketing','Performance Marketing','Employment'],
          title: 'Digital Marketing Online Completion Class',
          des: 'A lecture that is perfect for you who are self-taught in digital marketing. From high-quality lectures in real job classes to close care like 1:1 tutoring!',
        },
        {
          tag: ['1:1 coaching','Weekly refund','Excel', 'Data analysis'],
          title: 'Excel+Data Analysis Online Completion Class',
          des: 'Excel Online Completion Class on 27 days, perfect for you who are self-taught! 10 years + Excel /data analysis expert\'s 1:1 close care to complete practical Excel + data analysis skills!',
        },
        {
          tag: ['1:1 management','Weekly refund','Report'],
          title: 'Steal the report of the hottest shooter online completion class',
          des:'If you want to write a report that your boss has no choice but to confirm! Now get unlimited 2:1 coaching from incumbent instructors from large corporations and get paid weekly as much as you study and grow into a full-fledged employee!' ,
        }
      ]

      const listCell = content2.map((value, index)=>{
        return  <div className={`cell${index+1} cell`}>
                  <div className={`bg bg${index+1}`}></div>
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
          <div className="content2">
            <h2 className="title_content">In-class where you can study with a weekly refund</h2>
            <div className="content2_inside">
              {listCell}
            </div>
          </div>
        )
    }
}
export default CompContent_2;
