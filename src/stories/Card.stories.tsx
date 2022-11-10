import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Card } from "./Card"
import floodZoneImage from "./assets/flood-zone.png"

export default {
  title: "Test/Card",
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

// Uncontrolled component
export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  cardImage: floodZoneImage,
  cardLabel: "Flood zone 3"
}

// Controlled component set checked
export const Controlled_Checked = Template.bind({})
Controlled_Checked.args = {
  cardImage: floodZoneImage,
  cardLabel: "Flood zone 3",
  checked: true
}

// Controlled component set unchecked
export const Controlled_Unchecked = Template.bind({})
Controlled_Unchecked.args = {
  cardImage: floodZoneImage,
  cardLabel: "Flood zone 3",
  checked: false
}
