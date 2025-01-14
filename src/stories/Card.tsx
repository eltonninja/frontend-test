import { Card as MuiCard, Box, Typography, CardMedia, Checkbox, FormControlLabel, useTheme } from "@mui/material"
import React, { useState, useCallback } from "react"
interface CardProps {
  cardImage: string
  cardLabel: string
  checked?: boolean
  onClick?: (newChecked: boolean) => void
}

export const Card = ({ cardImage, cardLabel, onClick, checked: controlledChecked }: CardProps) => {
  const theme = useTheme()

  const isControlled = controlledChecked !== undefined
  const [internalChecked, setInternalChecked] = useState<boolean>(false)
  const checked = isControlled ? controlledChecked : internalChecked

  const setChecked = useCallback(
    (newChecked: boolean): void => {
      if (isControlled) {
        onClick && onClick(newChecked)
      } else {
        setInternalChecked(newChecked)
      }
    },
    [isControlled, onClick]
  )

  const handleClick = () => {
    setChecked(!checked)
  }

  return (
    <MuiCard
      onClick={handleClick}
      sx={{
        position: "relative",
        borderRadius: "10px",
        width: "229px",
        cursor: "pointer",
        background: theme.palette.primary.contrast,
        "&:after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: `1px solid ${checked ? theme.palette.primary.dark : theme.palette.grey[200]}`,
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
          width: "100%",
          height: "100px",
          background: `url(${cardImage})`,
          backgroundPosition: "-1px -1px",
          backgroundSize: "calc(100% + 2px)",
          boxSizing: "border-box",
          borderRadius: "10px 10px 0 0",
          border: `1px solid ${checked ? theme.palette.primary.dark : theme.palette.grey[200]}`,
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
                  color: `${theme.palette.primary.main} !important`
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
              sx={{
                ml: "8px"
              }}
            >
              {cardLabel}
            </Typography>
          }
          sx={{
            display: "flex",
            m: 0,
            pl: "1px",
            cursor: "pointer !important"
          }}
        />
      </Box>
    </MuiCard>
  )
}
