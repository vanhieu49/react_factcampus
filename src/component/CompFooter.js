function CompFooter() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-col">
          <h5 id="footer__content-logo">FAST CAMPUS</h5>
          <ul>
            <li>
              <p>Fast Campus Co., Ltd.</p>
            </li>
            <li>
              <p>Representative Director: Kang-Min Lee</p>
            </li>
            <li>
              <p>Personal Information Manager: Kang-Min Lee</p>
            </li>
            <li>
              <p>Business Number: 810-86-00658</p>
            </li>
            <li>
              <p>
                Office: 15th floor, Miwang Building, 364, Gangnam-daero,
                Gangnam-gu, Seoul
              </p>
            </li>
            <hr />
            <li>
              <p>Mail-order business report number: 2017-Seoul Gangnam-01977</p>
            </li>
            <li className="cool-link">
              <p>
                <span>School establishment operation registration number</span>:
                No. 572 Fast Campus
              </p>
            </li>
            <li>
              <p>Distance Lifelong Education Center</p>
            </li>
          </ul>
        </div>
        <div className="footer__content-col">
          <h5>Company</h5>
          <ul>
            <li>
              <p>
                <span>About Us</span>
              </p>
            </li>
            <li>
              <p>
                <span style={{ color: "#fff", fontWeight: 600 }}>
                  Terms of service
                </span>
              </p>
            </li>
            <li>
              <p>
                <span style={{ color: "#fff", fontWeight: 600 }}>
                  Privacy Policy
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>Cancellation/Refund Policy</span>
              </p>
            </li>
            <li>
              <p>
                <span>Frequently Asked Questions</span>
              </p>
            </li>
            <li>
              <p>
                <span>Notice</span>
              </p>
            </li>
            <hr />
            <li>
              <p>
                <span>Instructor support</span>
              </p>
            </li>
            <li>
              <p>
                <span>Recruitment Guide</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="footer__content-col">
          <h5>Customer Support</h5>
          <ul>
            <li>
              <p>For payment/refund/invoice or other inquiries</p>
            </li>
            <li>
              <p>
                <span>02-501-9396 </span>|<span> help@fastcampus.co.kr</span>
              </p>
            </li>
            <li>
              <p>
                - Open from 10 a.m. to 7 p.m. (Excluding weekends and holidays)
              </p>
            </li>
            <li>
              <p>- Excluding lunch time (12:00~13:00)</p>
            </li>
            <hr />
            <li>
              <p>Subscribe to the newsletter</p>
            </li>
            <li>
              <p>
                <input type="text" placeholder="email address" />
                <button>Subscribe</button>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default CompFooter;
