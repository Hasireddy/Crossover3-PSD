import React from "react";

const Clients = () => {
  return (
    <>
      <div className="clients">
        <h1>What our Client says</h1>
        <h3>People's sharing their thought about our works</h3>

        <div className="allClients">
          <div id="clients1-2">
            <div className="client1 client">
              <img
                src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg"
                style={{
                  width: "25rem",
                  height: 150,
                  borderRadius: 150 / 2,
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red",
                }}
                alt="..."
              />
              <div className="clientTexts">
                <p>
                  "I'm so happy with your company service. Very quickly response
                  and helpful support! Specially support team, so nice and
                  helpful.Thank you a lot!"
                </p>
                <h6 className="land">London,England</h6>
              </div>
            </div>
            <div className="client2 client">
              <img
                src="https://thumbs.dreamstime.com/b/%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D1%8B%D0%B9-%D0%B0%D1%84%D1%80%D0%BE-%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D0%B5%D1%86-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B9-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-%D0%BF%D0%B0%D0%BB%D0%B5%D1%86-%D0%B2%D0%B2%D0%B5%D1%80%D1%85-165241106.jpg"
                alt="..."
                style={{
                  width: "25rem",
                  height: 150,
                  borderRadius: 150 / 2,
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red",
                }}
              />
              <div className="clientTexts">
                <p>
                  "I'm so happy with your company service. Very quickly response
                  and helpful support! Specially support team, so nice and
                  helpful.Thank you a lot!"
                </p>
                <h6 className="land">California,USA</h6>
              </div>
            </div>
          </div>

          <div id="clients3-4">
            <div className="client3 client">
              <img
                src="https://www.medialine.com/media/206d5b7a-7fa8-4459-81ec-204b8c44a703/news_0222_thomas-abt.png?mw=1500"
                alt="..."
                style={{
                  width: "25rem",
                  height: 150,
                  borderRadius: 150 / 2,
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red",
                }}
              />
              <div className="clientTexts">
                <p>
                  "I'm so happy with your company service. Very quickly response
                  and helpful support! Specially support team, so nice and
                  helpful.Thank you a lot!"
                </p>
                <h6 className="land">Jerewan,Armenia</h6>
              </div>
            </div>
            <div className="client4 client">
              <img
                src="https://cgtrust.com/images/Client%20Portal/Hispanic_Business_Woman_Smiling_-_175_dpi_-_350_x233_-_Client_Account_Login.jpg"
                alt="..."
                style={{
                  width: "25rem",
                  height: 150,
                  borderRadius: 150 / 2,
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red",
                }}
              />
              <div className="clientTexts">
                <p>
                  "I'm so happy with your company service. Very quickly response
                  and helpful support! Specially support team, so nice and
                  helpful.Thank you a lot!"
                </p>
                <h6 className="land">Hessen,Germany</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
