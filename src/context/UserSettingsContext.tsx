import { createContext } from 'react'
import { useApplicationSettings, useLocalStorage } from '../hooks'

const UserSettingsContext = createContext({} as SettingsContextProviderValue)

const UserSettingsContextProvider = (props: SettingsContextProviderProps) => {

  const { settings: systemSettings } = useApplicationSettings()

  const [settings, setSettings] = useLocalStorage('userSettings', {
    accentColor: ''
  } as Settings)

  const setSettingsWrapper = (name: string, value: unknown) => {
    setSettings((prevSettings: Settings) => ({ ...prevSettings, [name]: value }))
  }

  return (
    <UserSettingsContext.Provider
      value={{ settings: { ...systemSettings, ...settings }, setSetting: setSettingsWrapper }}
    >
      {
        props.children
      }
    </UserSettingsContext.Provider>
  )
}

export { UserSettingsContext, UserSettingsContextProvider }