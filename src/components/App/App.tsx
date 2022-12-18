import { ApplicationSettingsContextProvider } from '../../context/ApplicationSettingsContext'
import Router from '../Router'

export default function App() {
  return (
    <div className="app">
      <ApplicationSettingsContextProvider>
        <Router />
      </ApplicationSettingsContextProvider>
    </div>
  )
}
