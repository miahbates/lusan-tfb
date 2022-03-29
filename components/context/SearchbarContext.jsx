import React from "react";

//create context and set initial value to null
export const SearchContext = React.createContext({
  searchTerm: null,
  setSearchTerm: () => {},
});

// searchbar provider
export function SearchbarProvider({ children }) {
  const [searchTerm, setSearchTerm] = React.useState(null);
  return (
    <SearchContext.Provider value={[searchTerm, setSearchTerm]}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  return React.useContext(SearchContext);
}
