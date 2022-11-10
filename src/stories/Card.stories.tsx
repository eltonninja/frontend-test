import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Card } from "./Card"

export default {
  title: "Test/Card",
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

// Uncontrolled component
export const Uncontrolled = Template.bind({})
Uncontrolled.args = {}

// Controlled component set checked
export const Controlled_Checked = Template.bind({})
Controlled_Checked.args = {
  checked: true
}

// Controlled component set unchecked
export const Controlled_Unchecked = Template.bind({})
Controlled_Unchecked.args = {
  checked: false
}
