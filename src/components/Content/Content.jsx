import React, { useEffect, useState } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import AccountSettings from './AccountSettings'
import Actions from './Actions'
import EmployerSettings from './EmployerSettings'
import CandidateSettings from './CandidateSettings'

const Content = () => {
  const [isEmployer, setIsEmployer] = useState(false);
  const [isCandidate, setIsCandidate] = useState(false);
  const [tabs, setTabs] = useState(['Account Settings']);

  useEffect(() => {
    setIsCandidate(localStorage.getItem("userRole") == "CANDIDATE");
    setIsEmployer(localStorage.getItem("userRole") == "EMPLOYER");
    if (isEmployer) {
      setTabs(['Account Settings', 'Employer Settings'])
    } else if (isCandidate) {
      setTabs(['Account Settings', 'Candidate Settings'])
    }
  })


  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Tabs>
        <TabList px={5}>
          {tabs.map(tab => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <AccountSettings />
          </TabPanel>
          <TabPanel>
            <EmployerSettings />
          </TabPanel>
          <TabPanel>
            <CandidateSettings />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Actions />
    </Box>
  )
}

export default Content
