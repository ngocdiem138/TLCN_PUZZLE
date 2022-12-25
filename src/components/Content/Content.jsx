import React, { useEffect, useState } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import AccountSettings from './AccountSettings'
import EmployerSettings from './EmployerSettings'
import CandidateSettings from './CandidateSettings'

class Content extends React.Component {
  render() {
    console.log("isCandidate",this.props.isCandidate);
    console.log("isEmployer",this.props.isEmployer);

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
            {this.props.tabs.map(tab => (
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
            {
              this.props.isEmployer?
                <TabPanel>
                  <EmployerSettings />
                </TabPanel> : null
            }

            {
              this.props.isCandidate?
                <TabPanel>
                  <CandidateSettings />
                </TabPanel> : null
            }
          </TabPanels>
        </Tabs>

      </Box>
    )
  }
}

export default Content
