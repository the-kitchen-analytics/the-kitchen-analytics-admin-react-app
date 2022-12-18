import { useContext } from 'react'
import { ApplicationSettingsContext } from '../context/ApplicationSettingsContext'

export default function useApplicationSettings() {
  return useContext(ApplicationSettingsContext)
}