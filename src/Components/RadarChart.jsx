import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Radar } from 'react-chartjs-2';

const labels = [
  'Fluency with Data',
  'Voice of the Customer',
  'User Experience Design',
  'Business Outcome Ownership',
  'Product Vision & Roadmappoing',
  'Strategic Impact',
  'Stakeholder Management',
  'Team Leadership',
  'Managing Up',
  'Feature Specification',
  'Product Delivery',
  'Quality Assurance',
];

const options = {
  responsive: true,
  elements: {
    line: {
      borderWidth: 10,
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      angleLines: {
        display: true,
      },
      min: 0,
      max: 3,
      ticks: {
        stepSize: 1,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const optionsMinimal = {
  responsive: true,
  elements: {
    line: {
      borderWidth: 2,
    },
  },
  scales: {
    r: {
      // display: false,
      beginAtZero: true,
      angleLines: {
        display: true,
      },
      min: 0,
      max: 3,
      title: {
        display: false,
      },
      ticks: {
        stepSize: 1,
        display: false,
      },
      grid: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

let sizes = {
  sm: 'xs',
  md: '4xl',
  lg: '6xl',
  auto: 'full',
};

const RadarChart = ({ values, minimal = false, size = sizes.auto }) => {
  let data = {
    labels,
    datasets: [
      {
        label: 'Proficiencies',
        data: values,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 4,
      },
    ],
  };
  return (
    <Flex width={sizes[size]}>
      <Radar data={data} options={minimal ? optionsMinimal : options} />
    </Flex>
  );
};

export default RadarChart;
