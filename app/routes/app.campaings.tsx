import { Button, InlineGrid, Layout, LegacyCard, Page, Tabs, Text } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import { tabs } from './utils'

type Props = {}

const CampaingsPage = (props: Props) => {
  const [ selected,setSelected ]=useState(0)

  const handleTabsChanged = useCallback((i:number) => {
    setSelected(i);
  }, [setSelected]);

  console.log(tabs)

  return (
    <Page fullWidth>
        <Layout>
        <Layout.Section>
          <InlineGrid columns={2}>
            <Text variant='heading3xl' as='h2'>Compaings</Text>
            <Button>Create new</Button>
          </InlineGrid>
        </Layout.Section>
        <Layout.Section>
            <LegacyCard>
                <Tabs tabs={tabs} selected={selected} onSelect={handleTabsChanged}>
                    <LegacyCard.Section title={tabs[selected].content}>
                        {tabs[selected].component}
                    </LegacyCard.Section>
                </Tabs>

            </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default CampaingsPage