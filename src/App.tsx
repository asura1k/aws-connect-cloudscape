import {
  AppLayout,
  Box,
  Button,
  Container,
  ContentLayout,
  Header,
  SideNavigation,
  SpaceBetween,
} from "@cloudscape-design/components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ContactCenter from "./pages/contact-center";

export default function App() {
  return (
    <Router>
      <AppLayout
        navigation={
          <SideNavigation
            header={{
              text: "Dashboard",
              href: "/",
            }}
            items={[
              {
                type: "link",
                text: "Contact Center",
                href: "/contact-center",
              },
              {
                type: "link",
                text: "Other services",
                href: "/other-services",
              },
              {
                type: "link",
                text: "Cloudscape",
                href: "/cloudscape",
              },
            ]}
            activeHref={window.location.pathname}
          />
        }
        content={
          <ContentLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/contact-center" element={<ContactCenter />} />
              <Route path="/other-services" element={<OtherServices />} />
              <Route path="/cloudscape" element={<Cloudscape />} />
            </Routes>
          </ContentLayout>
        }
      />
    </Router>
  );
}

function Cloudscape() {
  return (
    <Container>
      <SpaceBetween size="l">
        <Header>This is built using Cloudscape components</Header>
        <Button href="https://cloudscape.design/" external>
          Check out the documentation
        </Button>
      </SpaceBetween>
    </Container>
  );
}

function OtherServices() {
  return (
    <Box>
      <Header>Other services</Header>
    </Box>
  );
}
