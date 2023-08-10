import React from 'react'

const SelectedSuggestionContext = React.createContext({
  selectedSuggestionId: null,
  setSelectedSuggestionId: (id: string) => {}
})

export default SelectedSuggestionContext