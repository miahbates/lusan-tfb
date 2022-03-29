import React from "react";

//create context and set initial value to empty array
export const WishListContext = React.createContext({
  wishList: [],
  setWishList: () => {},
});

// wishlist provider
export function WishListProvider({ children }) {
  const [wishList, setWishList] = React.useState([]);
  return (
    <WishListContext.Provider value={[wishList, setWishList]}>
      {children}
    </WishListContext.Provider>
  );
}

export function useWishListContext() {
  return React.useContext(WishListContext);
}
