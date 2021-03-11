import React from "react";
class CompNoticeContent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="notice-content">
              <p>
                Hi. This is Fast Campus.<br /><br />
                Currently, Kakao's simple subscription function is temporarily suspended due 
                to internal system improvement work.
                If you have previously signed up for Kakao, you can log in normally.
                <br /><br />
                We apologize for any inconvenience this may cause.
                We will do our best to get the job done as soon as possible.
                Thank you.
                <br /><br />
                Effective date and time
                <br />
                ▷ 2021.01.19 (Tuesday) ~ Announcement posted upon completion of improvement
                <br /><br />
                2021. 02. 17
              </p>
            </div>
        )
    }
}
export default CompNoticeContent;
