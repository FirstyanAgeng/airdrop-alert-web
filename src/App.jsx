import { Layout, Button, Row, Col, Typography, Card } from "antd";
import { FaTelegramPlane, FaTwitter, FaDiscord } from "react-icons/fa";
import AirdropImg from "./assets/airdrop.png";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const LandingPage = () => {
  return (
    <Layout>
      {/* Header */}
      <Header style={{ backgroundColor: "#001529", padding: "0 50px" }}>
        <div style={{ color: "#fff", fontSize: "24px", fontWeight: "bold" }}>
          Airdrop Alert
        </div>
      </Header>

      {/* Hero Section */}
      <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
        <Row
          gutter={16}
          justify="center"
          align="middle"
          style={{ minHeight: "60vh" }}
        >
          <Col xs={24} md={12} style={{ textAlign: "center" }}>
            <Title>Airdrop Alerts for Latest Crypto Projects</Title>
            <Paragraph>
              Stay updated with the latest and upcoming airdrops in the crypto
              space. Join now to receive alerts and never miss an opportunity!
            </Paragraph>
            <Button type="primary" size="large">
              Join Airdrop Alerts
            </Button>
          </Col>
          <Col xs={24} md={12}>
            <img src={AirdropImg} alt="Airdrop" style={{ maxWidth: "100%" }} />
          </Col>
        </Row>
      </Content>

      {/* Airdrop List Section */}
      <Content style={{ padding: "50px", backgroundColor: "#ffffff" }}>
        <Title level={2} style={{ textAlign: "center" }}>
          Upcoming Airdrops
        </Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card title="Project A" bordered={false}>
              <p>Date: 25th September</p>
              <p>Reward: 1000 Tokens</p>
              <Button type="link">Details</Button>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title="Project B" bordered={false}>
              <p>Date: 30th September</p>
              <p>Reward: 500 Tokens</p>
              <Button type="link">Details</Button>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title="Project C" bordered={false}>
              <p>Date: 1st October</p>
              <p>Reward: 2000 Tokens</p>
              <Button type="link">Details</Button>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer */}
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#001529",
          color: "#fff",
        }}
      >
        <div>
          <Button
            type="link"
            href="https://t.me/airdropalerts"
            icon={<FaTelegramPlane />}
            style={{ color: "#fff" }}
          >
            Telegram
          </Button>
          <Button
            type="link"
            href="https://twitter.com/airdropalerts"
            icon={<FaTwitter />}
            style={{ color: "#fff" }}
          >
            Twitter
          </Button>
          <Button
            type="link"
            href="https://discord.gg/airdropalerts"
            icon={<FaDiscord />}
            style={{ color: "#fff" }}
          >
            Discord
          </Button>
        </div>
        <div>Airdrop Alert ©2024</div>
      </Footer>
    </Layout>
  );
};

export default LandingPage;
