import {
  Box,
  Header,
  Container,
  Grid,
  SpaceBetween,
  Button,
  Select,
  ButtonDropdown,
  StatusIndicator,
  Table,
} from "@cloudscape-design/components";
import { useState } from "react";

export default function ContactCenter() {
  // Add state for disposition selection
  const [selectedDisposition, setSelectedDisposition] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [agentStatus, setAgentStatus] = useState<{
    label: string;
    value: string;
  }>({
    label: "Offline",
    value: "offline",
  });

  // Add disposition options
  const dispositionOptions = [
    { label: "Inquiry Resolved", value: "inquiry_resolved" },
    { label: "Follow-up Required", value: "follow_up" },
    { label: "Escalated to Supervisor", value: "escalated" },
    { label: "Customer Callback Requested", value: "callback" },
    { label: "Information Provided", value: "info_provided" },
    { label: "Technical Issue", value: "technical" },
    { label: "Complaint Filed", value: "complaint" },
    { label: "Account Updated", value: "account_updated" },
    { label: "Service Request", value: "service_request" },
    { label: "Sales Lead", value: "sales_lead" },
    { label: "No Action Required", value: "no_action" },
  ];

  const statusOptions = [
    { label: "Available", value: "available" },
    { label: "Offline", value: "offline" },
    { label: "Break", value: "break" },
    { label: "Lunch", value: "lunch" },
    { label: "Meeting", value: "meeting" },
    { label: "Training", value: "training" },
  ];

  const handleRecordingAction = (action: string) => {
    // Implement recording logic
    console.log(`Recording ${action}`);
  };

  return (
    <Grid gridDefinition={[{ colspan: 4 }, { colspan: 8 }]}>
      <Container>
        <Grid gridDefinition={[{ colspan: 6 }, { colspan: 6 }]}>
          <SpaceBetween direction="horizontal" size="xs" alignItems="center">
            <StatusIndicator
              type={agentStatus.value === "available" ? "success" : "stopped"}
            ></StatusIndicator>
            <Select
              selectedOption={agentStatus}
              onChange={({ detail }) =>
                setAgentStatus(
                  detail.selectedOption as { label: string; value: string }
                )
              }
              options={statusOptions}
            />
          </SpaceBetween>

          <SpaceBetween size="xs" direction="horizontal">
            <Button iconName="call" />
            <Button iconName="contact" />
            <Button iconName="contact" />
            <Button iconName="settings" />
          </SpaceBetween>
        </Grid>
      </Container>

      <SpaceBetween size="l">
        <Container
          header={
            <Header variant="h2" description="Customer contact information">
              Contact Attributes
            </Header>
          }
        >
          <Table
            columnDefinitions={[
              {
                id: "attribute",
                header: "Attribute",
                cell: (item) => (
                  <Box variant="awsui-key-label">{item.attribute}</Box>
                ),
              },
              {
                id: "value",
                header: "Value",
                cell: (item) => (
                  <Box variant="awsui-gen-ai-label">{item.value}</Box>
                ),
              },
            ]}
            items={[
              { attribute: "Queue Name", value: "-" },
              { attribute: "Broker Name", value: "-" },
              { attribute: "Broker Code", value: "-" },
            ]}
            variant="borderless"
          />
        </Container>

        <Container header={<Header variant="h2">Contact Disposition</Header>}>
          <Select
            placeholder="Select an intent during call"
            options={dispositionOptions}
            selectedOption={selectedDisposition || null}
            onChange={({ detail }) =>
              setSelectedDisposition(
                detail.selectedOption as { label: string; value: string }
              )
            }
            filteringType="auto"
            expandToViewport
            ariaLabel="Select contact disposition"
          />
        </Container>

        <Container header={<Header variant="h2">Actions</Header>}>
          <SpaceBetween size="l">
            <Grid gridDefinition={[{ colspan: 6 }, { colspan: 6 }]}>
              <ButtonDropdown
                items={[
                  { text: "Option 1", id: "1" },
                  { text: "Option 2", id: "2" },
                ]}
                variant="normal"
              >
                Transfer Options
              </ButtonDropdown>

              <SpaceBetween direction="horizontal" size="xs">
                <Select
                  selectedOption={{ value: "+1", label: "+1" }}
                  options={[{ value: "+1", label: "+1" }]}
                  onChange={() => {}}
                />
                <Button iconName="call">call</Button>
              </SpaceBetween>
            </Grid>

            <Box>
              <SpaceBetween size="xs">
                <Box variant="awsui-key-label">Recording status: -</Box>
                <Grid
                  gridDefinition={[
                    { colspan: 3 },
                    { colspan: 3 },
                    { colspan: 3 },
                    { colspan: 3 },
                  ]}
                >
                  <Button
                    fullWidth
                    onClick={() => handleRecordingAction("start")}
                  >
                    Start
                  </Button>
                  <Button
                    fullWidth
                    onClick={() => handleRecordingAction("stop")}
                  >
                    Stop
                  </Button>
                  <Button
                    fullWidth
                    onClick={() => handleRecordingAction("pause")}
                  >
                    Pause
                  </Button>
                  <Button
                    fullWidth
                    onClick={() => handleRecordingAction("resume")}
                  >
                    Resume
                  </Button>
                </Grid>
              </SpaceBetween>
            </Box>

            <Box>
              <Select
                placeholder="Select a queue"
                options={[
                  {
                    label: "Queue 1",
                    value: "queue1",
                  },
                  {
                    label: "Queue 2",
                    value: "queue2",
                  },
                ]}
                selectedOption={null}
                onChange={({ detail }) => console.log(detail.selectedOption)}
              />
            </Box>
          </SpaceBetween>
        </Container>
      </SpaceBetween>
    </Grid>
  );
}
