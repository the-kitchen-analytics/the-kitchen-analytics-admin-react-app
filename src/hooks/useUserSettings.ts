import { useContext } from 'react'
import { UserSettingsContext } from '../context/UserSettingsContext'

export default function useUserSettings() {
  return useContext(UserSettingsContext)
}