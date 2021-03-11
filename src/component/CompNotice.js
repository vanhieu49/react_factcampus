import React from "react";
import CompNoticeContent from './CompNoticeContent'
class CompNotice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this)
    }
    toggleDisplay() {
      this.setState((state) => ({
        display: !state.display
      }));
    }
    render(){
        return(
        <div className="notice">
            <h3 className="notice-inside" onClick={this.toggleDisplay}>
              <i className="icon--notice" />
              <a className="notice-title">[Notice] Kakao Easy Subscription Service Temporary Suspension Notice</a>
            </h3>

            {this.state.display ?    <CompNoticeContent />          : ''}
          </div>
        )
    }
}
export default CompNotice;