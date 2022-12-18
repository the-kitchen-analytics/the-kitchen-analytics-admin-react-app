import { createContext, useState } from 'react'

const ApplicationSettingsContext = createContext({} as SettingsContextProviderValue)

const ApplicationSettingsContextProvider = (props: SettingsContextProviderProps) => {

  const [settings, setSettings] = useState({
    controlsSize: 'large',
  } as Settings)

  const setSettingsWrapper = (name: string, value: any) => {
    setSettings(prevSettings => ({ ...prevSettings, [name]: value }))
  }

  return (
    <ApplicationSettingsContext.Provider value={{ settings, setSetting: setSettingsWrapper }}>
      {
        props.children
      }
    </ApplicationSettingsContext.Provider>
  )
}

export { ApplicationSettingsContext, ApplicationSettingsContextProvider }