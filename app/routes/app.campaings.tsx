import { Layout, LegacyCard, Page, Tabs } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import { tabs } from './utils'
import CreateCompainForm from './app.createcompainform'

type Props = {}


const CampaingsPage = (props: Props) => {
  const [ selected,setSelected ]=useState(0)
  const [activate, setActivate] = useState(false);


  const handleTabsChanged = useCallback((i:number) => {
    setSelected(i);
  }, [selected]);

  return (
    <Page fullWidth  title="Compaings" primaryAction={{content: 'Create new',onAction:()=>{setActivate(true)}}}>
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
          <CreateCompainForm activate={activate} setActivate={setActivate} />
        </Layout.Section>

      </Layout>
    </Page>
  )
}

export default CampaingsPage
