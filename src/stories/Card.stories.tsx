import React, { useState } from "react"
import { Button } from "@mui/material"
import { ComponentMeta, Story } from "@storybook/react"

import { Card } from "./Card"
import floodZoneImage from "./assets/flood-zone.png"

export default {
  title: "Test/Card",
  component: Card
} as ComponentMeta<typeof Card>

const Template: Story = ({ cardImage, cardLabel }) => <Card cardImage={cardImage} cardLabel={cardLabel} />

// Uncontrolled component test story
export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  cardImage: floodZoneImage,
  cardLabel: "Flood zone 3"
}

const ControlledTemplate: Story = ({ cardImage, cardLabel }) => {
  const TestControlledComponent = function () {
    const [checked, setChecked] = useState<boolean>(false)
    return (
      <div>
        <Button variant="contained" onClick={() => setChecked((c: boolean) => !c)} sx={{ marginBottom: 2 }}>
          Toggle
        </Button>
        <Card
          cardImage={cardImage}
          cardLabel={cardLabel}
          checked={checked}
          onClick={(newChecked) => {
            setChecked(newChecked)
          }}
        ></Card>
      </div>
    )
  }

  return <TestControlledComponent />
}

// Controlled component test story
export const Controlled = ControlledTemplate.bind({})
Controlled.args = {
  cardImage: floodZoneImage,
  cardLabel: "Flood zone 3"
}
