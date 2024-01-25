import { ActionFunction } from '@remix-run/node'
import { Page } from '@shopify/polaris'
import React from 'react'
import { authenticate } from '~/shopify.server'

type Props = {}
//send automation email when user is created

// 1 setup webhook
// create automation

export const action: ActionFunction = async ({ request }) => {

  //TRIGGER WEBHOOK

  const {admin,session} = await authenticate.admin(request)
  const webhook = new admin.rest.resources.Webhook({session})
  ///create a webhook on the system
  if(webhook){
    console.log(webhook,"-------------webhook hit create user----------------")
    webhook.address=""
    webhook.topic="customers/create"
    webhook.format="json"
    console.log("-------------webhook succesfully created----------------")
    await webhook.save({update:true})
  
  }

  return null
} 

const AutomationsPage = (props: Props) => {
  return (
    <Page>app.automations</Page>
  )
}

export default AutomationsPage