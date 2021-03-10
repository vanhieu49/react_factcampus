import React from "react";
class CompContent_4 extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
      const cell1 = {
        tag: ['Lifetime collection','100 hours','React', 'View'],
        title: 'One-stop front-end development super-gap package Online.',
        des: '  Lifetime collection with a one-time payment of 1,000 won per hour | Front-end study, what should I start with?  Don\'t worry any more! Over 20 stacks that a frontend developer must tackle can be mastered in a 100-hour online course. Check out the\'Completed Curriculum for Front-End Developers\', which includes hands-on practice on high-quality projects that can be used as a service now!'
      }
      const cell2 = {
        tag: ['Lifetime collection','Python'],
        title: 'Python Web Development All-in-One Package Online.',
        des: 'It\'s easy to learn, but Python with high practical use, from basic grammar to practical examples! Start with online lectures!'
      }
      const cell3 = {
        tag:['Lifetime collection','Data Analysis Tool','Training'],
        title:'One-stop data analysis tools super-gap package Online.',
        des:'7 data analysis tools in one lecture? Launching of super cost performance lectures for beginners! Learn data analysis easier and more fun with 200 hands-on exercises and project progress for each tool!'
      }
      const cell4 = {
        tag: ['Lifetime collection','Machine learning','Python'],
        title:'Learn while solving like a quiz Python Machine Learning 300 + practice package online.',
        des:'Machine learning as easy and fun as a game! Solve more than 300 problems to get your hands on experience.'
      }
        return(
          <div className="content4">
            <h2 className="title_content">Programming/Data Science Popular Lecture</h2>
            <div className="content4_inside">
              <div className="cell1 cell">
                <div className="bg bg1">
                  <div className="card__badge __yellow"><div>
                      2차오픈
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
                  <div className="card__badge __red"><div>
                      전체오픈
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
                  <div className="card__badge __yellow"><div>
                      1차오픈
                    </div></div>
                </div>
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
                <div className="bg bg4">
                  <div className="card__badge __yellow"><div>
                      1차오픈
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
export default CompContent_4;
