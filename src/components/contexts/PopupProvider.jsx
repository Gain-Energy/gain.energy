import { createContext, useContext, useState } from 'react';

const PopupContext = createContext()

export const usePopup = () => useContext(PopupContext)

export const PopupProvider = ({ children }) => {
    const [popupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => setPopupOpen(prevState => !prevState)

    return (
    <PopupContext.Provider value={{ popupOpen, togglePopup }}>
        {children}
    </PopupContext.Provider>
    )
}