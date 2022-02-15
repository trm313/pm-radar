import React from 'react';
import { Flex, Text, Heading, Link, Button } from '@chakra-ui/react';

import ExampleRadarCharts from './ExampleRadarCharts';

const Section = ({ children, headingText }) => (
  <Flex direction="column" my="4">
    <Heading>{headingText}</Heading>
    {children}
  </Flex>
);

const GetStartedContent = () => {
  return (
    <Flex direction="column" maxWidth="xl" px="4">
      <Section headingText="What is this?">
        <Text fontSize="xs" my="4">
          Inspired by:{' '}
          <Link
            href="https://www.ravi-mehta.com/product-manager-roles/"
            isExternal
            color="blue.500"
            mx="2"
          >
            What’s Your Shape? A Product Manager’s Guide to Growing Yourself and
            Your Team
          </Link>
        </Text>
        <ExampleRadarCharts />
        <Text>
          Use your colleagues to help you find your true shape. Make a copy of
          this survey template and send it to your colleagues, with anonymous
          responses, in a "360-review" style.
        </Text>
        <Text>
          This web app will let you connect to the results, average them, and
          visualize a radar chart with your shape.
        </Text>
        <Link
          href="https://docs.google.com/forms/d/1Y761wY83t5LiDxzx3VUNfNFv6UFX6hA1x6ak0Rgj6Sw/copy"
          isExternal
          mx="2"
        >
          <Button size="sm">Copy Template</Button>
        </Link>
      </Section>
      <Section headingText="How does it work?">
        <Text>lorem ipsum</Text>
      </Section>
    </Flex>
  );
};

export default GetStartedContent;

/*
      <Text>
        2. On the "Responses" tab, click the "View Responses in Google Sheets"
        button to have form responses automatically send to a Google Sheet
      </Text>
      <Text>3. Send the form to whomever you wish</Text>
      <Text>When you are ready to visualize your results:</Text>
      <Text>4. Connect your Google account</Text>
      <Text>5. Add the ID of that Google Sheet into this web application</Text>
      */
