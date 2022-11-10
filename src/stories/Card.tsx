import { Card as MuiCard, Box, InputLabel, Typography, CardMedia, Checkbox, FormControlLabel } from "@mui/material"
import React, { useState } from "react"
import "@fontsource/plus-jakarta-sans"
import "./button.css"
import floodZoneImage from "./assets/flood-zone.png"

interface CardProps {}

export const Card = ({ ...props }: CardProps) => {
  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    setChecked((c) => !c)
  }

  return (
    <MuiCard
      onClick={handleClick}
      sx={{
        position: "relative",
        borderRadius: "10px",
        width: "max-content",
        cursor: "pointer",
        background: "#FFFFFF",
        "&:after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: `1px solid ${checked ? "#3D8479" : "#EFEFEF"}`,
          borderRadius: "10px",
          boxSizing: "border-box"
        },
        ...(checked
          ? {
              boxShadow: "0px 0px 0px 2px #65E9D9"
            }
          : {
              boxShadow: "none",
              "&:hover": {
                boxShadow: "0px 0px 0px 2px #65E9D9",
                "&:after": {
                  display: "none"
                },
                "& > .MuiCardMedia-root": {
                  borderColor: "transparent"
                }
              }
            })
      }}
    >
      <CardMedia
        component="div"
        sx={{
          width: "229px",
          height: "100px",
          background: `url(${floodZoneImage})`,
          backgroundPosition: "-1px -1px",
          backgroundSize: "calc(100% + 2px)",
          boxSizing: "border-box",
          borderRadius: "10px 10px 0 0",
          border: `1px solid ${checked ? "#3D8479" : "#EFEFEF"}`,
          borderBottom: "none"
        }}
      />
      <Box sx={{ p: "15px" }}>
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={checked}
              disabled={true}
              sx={{
                p: 0,
                m: 0,
                color: "#616161 !important",
                "&.Mui-checked": {
                  color: "#21B6A8 !important"
                },
                "& .MuiSvgIcon-root": {
                  width: "18px",
                  height: "18px"
                }
              }}
            />
          }
          label={
            <Typography
              variant="body2"
              fontFamily="Plus Jakarta Sans"
              sx={{
                ml: "8px"
              }}
            >
              Flood zone 3
            </Typography>
          }
          sx={{
            m: 0,
            pl: "1px",
            cursor: "pointer !important"
          }}
        />
      </Box>
    </MuiCard>
  )
}
