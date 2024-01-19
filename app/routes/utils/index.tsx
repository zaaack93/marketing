import TestComponent from "../components/Test";

export const tabs=[
    {
        id:'all-customers',
        content:'All',
        panelID:'all-customers-content-one',
        component:<TestComponent />
    },
    {
        id:'accepts-marketing-1',
        content:'Ongoing',
        panelID:'accepts-marketing-content-one'
    },
    {
        id:'repeat-customers-1',
        content:'Draft',
        panelID:'repeat-customers-content-one'
    },
    {
        id:'prospects-1',
        content:'Completed',
        panelID:'prospects-content-one'
    }
  ]