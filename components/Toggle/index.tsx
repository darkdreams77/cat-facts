import React, { useContext, useEffect, useState } from 'react'
import { ToggleButton, ToggleButtonGroup, useTheme } from '@mui/material'

import { ColorModeContext, ThemeValue } from '../../pages/_app'
import { ContainerToggle } from './styles'

const Toggle = () => {
  const _theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const [theme, setTheme] = useState<ThemeValue>(_theme.palette.mode)

  useEffect(() => {
    setTheme(_theme.palette.mode)
  }, [_theme.palette.mode])

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newTheme: ThemeValue
  ) => {
    if (newTheme !== null) {
      setTheme(newTheme)
      colorMode.toggleColorMode()
    }
  }

  return (
    <ContainerToggle>
      <ToggleButtonGroup
        value={theme}
        exclusive
        onChange={handleChange}
        aria-label="theme"
        size="small"
      >
        <ToggleButton value="light" aria-label="light">
          Light
        </ToggleButton>
        <ToggleButton value="dark" aria-label="dark">
          Dark
        </ToggleButton>
      </ToggleButtonGroup>
    </ContainerToggle>
  )
}

export default Toggle
