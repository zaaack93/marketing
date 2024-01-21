import { Button, InlineGrid, Layout, LegacyCard, Page, Tabs, Text } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import { tabs } from './utils'
import CreateCompainForm from './components/CreateCompainForm'

type Props = {}

const CampaingsPage = (props: Props) => {
  const [ selected,setSelected ]=useState(0)

  const handleTabsChanged = useCallback((i:number) => {
    setSelected(i);
  }, [selected]);


  console.log(tabs)

  return (
    <Page fullWidth  title="Compaings" compactTitle primaryAction={{content: 'Create new'}}>
        <Layout>
        <Layout.Section>
            <LegacyCard>
                <Tabs tabs={tabs} selected={selected} onSelect={handleTabsChanged}>
                    <LegacyCard.Section title={tabs[selected].content}>
                        {tabs[selected].component}
                    </LegacyCard.Section>
                </Tabs>

            </LegacyCard>
        </Layout.Section>

        <Layout.Section>
          <CreateCompainForm />
        </Layout.Section>

      </Layout>
    </Page>
  )
}

export default CampaingsPage
