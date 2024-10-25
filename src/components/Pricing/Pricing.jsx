import React, { useState, useEffect } from "react";
import { Row, Col, Space, Typography, Button, Card, Grid } from "antd";
import basic from "../../assets/basic.png";
import all_data from "../../assets/all_data";

const { useBreakpoint } = Grid;
const { Title, Text } = Typography;
const currencySymbolMap = {
  USD: "$",
  GBP: "£",
  EUR: "€",
  INR: "₹",
  PKR: "₨",
  AUD: "A$",
  CAD: "C$",
  CNY: "¥",
  JPY: "¥",
  RUB: "₽",
  BRL: "R$",
  ZAR: "R",
  MXN: "$",
  SGD: "S$",
  CHF: "CHF",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  NZD: "NZ$",
  KRW: "₩",
  THB: "฿",
  MYR: "RM",
  IDR: "Rp",
  VND: "₫",
  SAR: "﷼",
  AED: "د.إ",
  NGN: "₦",
  EGP: "£",
  KES: "KSh",
  BDT: "৳",
  TRY: "₺",
  HKD: "HK$",
  ILS: "₪",
  ARS: "$",
  CLP: "$",
  COP: "$",
  PEN: "S/",
  PHP: "₱",
  LKR: "Rs",
  QAR: "﷼",
  KWD: "KD",
  OMR: "﷼",
  BHD: "BD",
  JMD: "J$",
  ZWL: "Z$",
  IRR: "﷼",
  IQD: "د.ع",
  JOD: "د.ا",
  LBP: "ل.ل",
  MMK: "K",
  ISK: "kr",
  PLN: "zł",
  HUF: "Ft",
  CZK: "Kč",
  RON: "lei",
  BGN: "лв",
  HRK: "kn",
  UAH: "₴",
  KZT: "₸",
  UZS: "лв",
  GEL: "₾",
  AMD: "֏",
  AZN: "₼",
  BYN: "Br",
  TMT: "T",
  KGS: "с",
  MNT: "₮",
};
const Pricing = () => {
  const screen = useBreakpoint();
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [prices, setPrices] = useState({
    basic: 99,
    pro: 149,
    enterprise: 199,
  });
  // Map country codes to currency symbols

  const fetchCurrencies = async () => {
    try {
      const api_key = "6ec1f09c44cdd1fbb203274c67475489";
      const res = await fetch(
        `http://api.currencylayer.com/list?access_key=${api_key}`
      );
      const data = await res.json();
      setCurrencies(data.currencies);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExchangeRate = async (currency) => {
    try {
      const apikey = "Zm84WOoRBmUglB0ucbMeOA1sPZLPbiVw";
      const res = await fetch(
        `https://api.currencybeacon.com/v1/convert?from=USD&to=${currency}&amount=1&api_key=${apikey}`
      );
      const data = await res.json();
      const rate = data.response.value;
      setExchangeRate(rate);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserLocation = async () => {
    try {
      const apiKey = "478fe52c3fc9487fb0049aa136d319dc";
      const res = await fetch(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
      );
      const data = await res.json();
      const countryCode = data.country_code2;
      const userCurrency = getCurrencyByCountryCode(countryCode) || countryCode;
      console.log(userCurrency);
      setSelectedCurrency(userCurrency);
    } catch (error) {
      console.log("Error fetching user location", error);
    }
  };

  const getCurrencyByCountryCode = (countryCode) => {
    const currencyMap = {
      US: "USD",
      GB: "GBP",
      EU: "EUR",
      IN: "INR",
      PK: "PKR",
      AU: "AUD",
      CA: "CAD",
      CN: "CNY",
      JP: "JPY",
      RU: "RUB",
      BR: "BRL",
      ZA: "ZAR",
      MX: "MXN",
      SG: "SGD",
      CH: "CHF",
      SE: "SEK",
      NO: "NOK",
      DK: "DKK",
      NZ: "NZD",
      KR: "KRW",
      TH: "THB",
      MY: "MYR",
      ID: "IDR",
      VN: "VND",
      SA: "SAR",
      AE: "AED",
      NG: "NGN",
      EG: "EGP",
      KE: "KES",
      BD: "BDT",
      TR: "TRY",
      HK: "HKD",
      IL: "ILS",
      AR: "ARS",
      CL: "CLP",
      CO: "COP",
      PE: "PEN",
      PH: "PHP",
      LK: "LKR",
      QA: "QAR",
      KW: "KWD",
      OM: "OMR",
      BH: "BHD",
      JM: "JMD",
      ZW: "ZWL",
      IR: "IRR",
      IQ: "IQD",
      JO: "JOD",
      LB: "LBP",
      MM: "MMK",
      IS: "ISK",
      PL: "PLN",
      HU: "HUF",
      CZ: "CZK",
      RO: "RON",
      BG: "BGN",
      HR: "HRK",
      UA: "UAH",
      KZ: "KZT",
      UZ: "UZS",
      GE: "GEL",
      AM: "AMD",
      AZ: "AZN",
      BY: "BYN",
      TM: "TMT",
      KG: "KGS",
      MN: "MNT",
    };
    return currencyMap[countryCode];
  };

  const getCurrencySymbol = (currencyCode) => {
    return currencySymbolMap[currencyCode] || currencyCode;
  };

  useEffect(() => {
    fetchCurrencies();
    fetchUserLocation();
  }, []);

  useEffect(() => {
    if (selectedCurrency !== "USD") {
      fetchExchangeRate(selectedCurrency);
    } else {
      setExchangeRate(1);
    }
  }, [selectedCurrency]);

  const formatPrice = (price) => {
    return `${selectedCurrency} ${(price * exchangeRate).toFixed(0)}`;
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        padding: screen.lg ? "74px 20px" : "20px 10px",
        backgroundColor: "#EEEDF5",
        display: "flex",
        flexDirection: "column",
        marginLeft: "0px",
        marginRight: "0px",
      }}
      gutter={[16, 16]}
      id="pricing"
    >
      <Col span={12} style={{ textAlign: "center" }}>
        <Title
          style={{ color: "#0F172A", fontSize: screen.lg ? "56px" : "24px" }}
        >
          Affordable pricing plans
        </Title>
        <Text
          style={{ color: "#6F6C90", fontSize: screen.lg ? "21px" : "12px" }}
        >
          Flexible Plans Tailored to Your Goals
        </Text>
      </Col>
      <Col
        style={{
          display: "flex",
          gap: screen.lg ? "14px" : "8px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{ fontSize: screen.lg ? "21px" : "12px", color: "#170F49" }}
        >
          How many users you have?
        </Typography>
        <div
          style={{
            display: "flex",
            gap: screen.lg ? "14px" : "8px",
            flexDirection: screen.lg ? "row" : "row-reverse",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: screen.lg ? "119px" : "53px",
              fontSize: screen.lg ? "21px" : "13px",
              fontWeight: "700",
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: screen.lg ? "61px" : "27px",
              border: screen.lg ? "1px solid #D9DBE9" : "0.5px solid #D9DBE9",
              borderRadius: screen.lg ? "17px" : "7px",
            }}
          >
            10
          </span>
          <span
            style={{
              fontSize: screen.lg ? "21px" : "12px",
              color: "#170F49",
              fontWeight: "700",
            }}
          >
            users
          </span>
        </div>
      </Col>
      <Col
        xs={24}
        lg={24}
        style={{
          display: "flex",
          flexDirection: screen.lg ? "row" : "column",
          gap: "10px",
        }}
      >
        {/*------------------Card 1--------------------*/}
        <Card
          style={{
            border: "2px solid #EFF0F6",
            borderRadius: "16px",
            padding:screen.lg?"10px":"25px",
            display: "flex",
            width: screen.lg ? "430px" : "285px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <Col>
              <img
                src={basic}
                alt="basic"
                style={{ width: screen.lg ? "84px" : "48px" }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "5px",
              }}
            >
              <Text
                style={{
                  color: "#6F6C90",
                  fontSize: screen.lg ? "21px" : "12px",
                }}
              >
                {all_data.basic_card.subtitle}
              </Text>
              <Title
                style={{
                  color: "#170F49",
                  fontSize: screen.lg ? "28px" : "20px",
                  fontWeight: "700",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                {all_data.basic_card.title}
              </Title>
            </Col>
          </div>
          <Row
            gutter={[8, 14]}
            style={{ marginTop: screen.lg ? "21px" : "12px" }}
          >
            <Col span={24}>
              <Text
                style={{
                  color: "#6F6C90",
                  padding: "0px",
                  fontSize: screen.lg ? "21px" : "12px",
                }}
              >
                {all_data.basic_card.description}
              </Text>
            </Col>
            <Col span={24}>
              <Row align="middle">
                <Title
                  style={{
                    color: "#0F172A",
                    fontSize: screen.lg ? "63px" : "36px",
                    fontWeight: "700",
                    margin: "0px",
                  }}
                >
                  {formatPrice(prices.basic)}
                </Title>
                <Text
                  style={{
                    color: "#6F6C90",
                    fontSize: screen.lg ? "24px" : "12px",
                  }}
                >
                  /monthly
                </Text>
              </Row>
            </Col>
          </Row>
          <Row gutter={[8, 8]} style={{ marginTop: "12px" }}>
            <Col span={24}>
              <Space
                direction="vertical"
                style={{ display: "flex", gap: screen.lg ? "28px" : "14px" }}
              >
                <Typography.Text
                  style={{
                    color: "#170F49",
                    fontSize: screen.lg ? "21px" : "12px",
                    fontWeight: 700,
                    lineHeight: screen.lg ? "23px" : "13px",
                  }}
                >
                  What’s included
                </Typography.Text>
                <Space
                  direction="vertical"
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "center",
                    display: "flex",
                    gap: screen.lg ? "18px" : "10px",
                  }}
                >
                  {[
                    all_data.basic_card.feature_1,
                    all_data.basic_card.feature_2,
                    all_data.basic_card.feature_3,
                    all_data.basic_card.feature_4,
                  ].map((feature, index) => (
                    <Row
                      key={index}
                      align="middle"
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: screen.lg ? "16px" : "10px",
                      }}
                    >
                      <Col>
                        <img
                          src={all_data.basic_card.check_circle}
                          style={{
                            width: screen.lg ? "31px" : "18px",
                            height: screen.lg ? "31px" : "18px",
                          }}
                          alt=""
                        />
                      </Col>
                      <Col>
                        <Typography.Text
                          style={{
                            marginBottom: 0,
                            fontSize: screen.lg ? "21px" : "12px",
                            color: "#170F49",
                            fontWeight: "400",
                            lineHeight: screen.lg ? "23px" : "13px",
                          }}
                        >
                          {feature}
                        </Typography.Text>
                      </Col>
                    </Row>
                  ))}
                </Space>
              </Space>
            </Col>
          </Row>
          <Button
            type="primary"
            style={{
              borderRadius: "52px",
              width: screen.lg ? "362px" : "207px",
              height: screen.lg ? "89px" : "51px",
              backgroundColor: "#22739C",
              borderColor: "#22739C",
              fontSize: screen.lg ? "21px" : "16px",
              fontWeight: "700",
              marginTop: screen.lg? "52px":"25px",
            }}
          >
            Get Started
          </Button>
        </Card>
        {/*----------card 2----------------*/}
        <Card
          style={{
            border: "2px solid #EFF0F6",
            borderRadius: "16px",
            padding: screen.lg ? "10px" : "25px",
            display: "flex",
            width: screen.lg ? "430px" : "285px",
            background:"#22739C",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <Col>
              <img
                src={basic}
                alt="basic"
                style={{ width: screen.lg ? "84px" : "48px" }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "5px",
              }}
            >
              <Text
                style={{
                  color: "#EFF0F6",
                  fontSize: screen.lg ? "21px" : "12px",
                }}
              >
                {all_data.pro_card.subtitle}
              </Text>
              <Title
                style={{
                  color: "#fff",
                  fontSize: screen.lg ? "28px" : "20px",
                  fontWeight: "700",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                {all_data.pro_card.title}
              </Title>
            </Col>
          </div>
          <Row
            gutter={[8, 14]}
            style={{ marginTop: screen.lg ? "21px" : "12px" }}
          >
            <Col span={24}>
              <Text
                style={{
                  color: "#D9DBE9",
                  fontSize: screen.lg ? "21px" : "14px",
                }}
              >
                {all_data.pro_card.description}
              </Text>
            </Col>
            <Col span={24}>
              <Row align="middle">
                <Title
                  style={{
                    color: "#fff",
                    fontSize: screen.lg ? "63px" : "36px",
                    fontWeight: "700",
                    margin: "0px",
                  }}
                >
                  {formatPrice(prices.basic)}
                </Title>
                <Text
                  style={{
                    color: "#D9DBE9",
                    fontSize: screen.lg ? "24px" : "12px",
                  }}
                >
                  /monthly
                </Text>
              </Row>
            </Col>
          </Row>
          <Row gutter={[8, 8]} style={{ marginTop: "12px" }}>
            <Col span={24}>
              <Space
                direction="vertical"
                style={{ display: "flex", gap: screen.lg ? "28px" : "14px" }}
              >
                <Typography.Text
                  style={{
                    color: "#fff",
                    fontSize: screen.lg ? "21px" : "12px",
                    fontWeight: 700,
                    lineHeight: screen.lg ? "23px" : "13px",
                  }}
                >
                  What’s included
                </Typography.Text>
                <Space
                  direction="vertical"
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "center",
                    display: "flex",
                    gap: screen.lg ? "18px" : "10px",
                  }}
                >
                  {[
                    all_data.pro_card.feature_1,
                    all_data.pro_card.feature_2,
                    all_data.pro_card.feature_3,
                    all_data.pro_card.feature_4,
                  ].map((feature, index) => (
                    <Row
                      key={index}
                      align="middle"
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: screen.lg ? "16px" : "10px",
                      }}
                    >
                      <Col>
                        <img
                          src={all_data.pro_card.check_circle}
                          style={{
                            width: screen.lg ? "31px" : "18px",
                            height: screen.lg ? "31px" : "18px",
                          }}
                          alt=""
                        />
                      </Col>
                      <Col>
                        <Typography.Text
                          style={{
                            marginBottom: 0,
                            fontSize: screen.lg ? "21px" : "12px",
                            color: "#D9DBE9",
                            fontWeight: "400",
                            lineHeight: screen.lg ? "23px" : "13px",
                          }}
                        >
                          {feature}
                        </Typography.Text>
                      </Col>
                    </Row>
                  ))}
                </Space>
              </Space>
            </Col>
          </Row>
          <Button
            type="primary"
            style={{
              borderRadius: "52px",
              width: screen.lg ? "362px" : "207px",
              height: screen.lg ? "89px" : "51px",
              backgroundColor: "white",
              color:"#22739C",
              borderColor: "#22739C",
              fontSize: screen.lg ? "21px" : "16px",
              fontWeight: "700",
              marginTop:screen.lg? "52px":"25px",
            }}
          >
            Get Started
          </Button>
        </Card>
        {/*------------------card3--------------------*/}
        <Card
          style={{
            border: "2px solid #EFF0F6",
            borderRadius: "16px",
            padding: screen.lg ? "10px" : "25px",
            display: "flex",
            width: screen.lg ? "430px" : "285px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <Col>
              <img
                src={basic}
                alt="basic"
                style={{ width: screen.lg ? "84px" : "48px" }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "5px",
              }}
            >
              <Text
                style={{
                  color: "#6F6C90",
                  fontSize: screen.lg ? "21px" : "12px",
                }}
              >
                {all_data.enterprise_card.subtitle}
              </Text>
              <Title
                style={{
                  color: "#170F49",
                  fontSize: screen.lg ? "28px" : "20px",
                  fontWeight: "700",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                {all_data.enterprise_card.title}
              </Title>
            </Col>
          </div>
          <Row
            gutter={[8, 14]}
            style={{ marginTop: screen.lg ? "21px" : "12px" }}
          >
            <Col span={24}>
              <Text
                style={{
                  color: "#6F6C90",
                  fontSize: screen.lg ? "21px" : "14px",
                }}
              >
                {all_data.enterprise_card.description}
              </Text>
            </Col>
            <Col span={24}>
              <Row align="middle">
                <Title
                  style={{
                    color: "#0F172A",
                    fontSize: screen.lg ? "63px" : "36px",
                    fontWeight: "700",
                    margin: "0px",
                  }}
                >
                  {formatPrice(prices.basic)}
                </Title>
                <Text
                  style={{
                    color: "#6F6C90",
                    fontSize: screen.lg ? "24px" : "12px",
                  }}
                >
                  /monthly
                </Text>
              </Row>
            </Col>
          </Row>
          <Row gutter={[8, 8]} style={{ marginTop: "12px" }}>
            <Col span={24}>
              <Space
                direction="vertical"
                style={{ display: "flex", gap: screen.lg ? "28px" : "14px" }}
              >
                <Typography.Text
                  style={{
                    color: "#170F49",
                    fontSize: screen.lg ? "21px" : "12px",
                    fontWeight: 700,
                    lineHeight: screen.lg ? "23px" : "13px",
                  }}
                >
                  What’s included
                </Typography.Text>
                <Space
                  direction="vertical"
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "center",
                    display: "flex",
                    gap: screen.lg ? "18px" : "10px",
                  }}
                >
                  {[
                    all_data.enterprise_card.feature_1,
                    all_data.enterprise_card.feature_2,
                    all_data.enterprise_card.feature_3,
                    all_data.enterprise_card.feature_4,
                  ].map((feature, index) => (
                    <Row
                      key={index}
                      align="middle"
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: screen.lg ? "16px" : "10px",
                      }}
                    >
                      <Col>
                        <img
                          src={all_data.basic_card.check_circle}
                          style={{
                            width: screen.lg ? "31px" : "18px",
                            height: screen.lg ? "31px" : "18px",
                          }}
                          alt=""
                        />
                      </Col>
                      <Col>
                        <Typography.Text
                          style={{
                            marginBottom: 0,
                            fontSize: screen.lg ? "21px" : "12px",
                            color: "#170F49",
                            fontWeight: "400",
                            lineHeight: screen.lg ? "23px" : "13px",
                          }}
                        >
                          {feature}
                        </Typography.Text>
                      </Col>
                    </Row>
                  ))}
                </Space>
              </Space>
            </Col>
          </Row>
          <Button
            type="primary"
            style={{
              borderRadius: "52px",
              width: screen.lg ? "362px" : "207px",
              height: screen.lg ? "89px" : "51px",
              backgroundColor: "#22739C",
              borderColor: "#22739C",
              fontSize: screen.lg ? "21px" : "16px",
              fontWeight: "700",
              marginTop:screen.lg? "52px":"25px",
            }}
          >
            Get Started
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Pricing;
