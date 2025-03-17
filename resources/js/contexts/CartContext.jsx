// resources/js/contexts/CartContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // const [cart, setCart] = useState({
    //     golden: 0,
    //     silver: 0,
    //     bronze: 0,
    // });
    const [cart, setCart] = useState({});

    const [lockedTickets, setLockedTickets] = useState({}); // New state for locked tickets
    const [guestId, setGuestId] = useState(null);

    // Fetch cart data from the server (session) on component mount
    
        const fetchCart = async () => {
            try {
                const response = await axios.get("/cart-get");
                setCart(response.data);
                setLockedTickets(response.data.locked_tickets || {}); 
                setGuestId(response.data.guest_id);
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };
    
        useEffect(() => {
            fetchCart();
        }, []);
    


    // Update cart on the server whenever the state changes
    const updateCart = async (updatedCart,eventId) => {
        try {
            if (!eventId) {
                console.error("Error: eventId is undefined in updateCart");
                return;
            }
        console.log("Sending request to update cart:", updatedCart, eventId);

        // setCart((prevCart) => ({
        //     ...prevCart,
        //     [eventId]: { ...prevCart[eventId], ...updatedCart },
        // }));
        setCart((prevCart) => ({
            ...prevCart,
            [eventId]: {
                ...(prevCart[eventId] || {}), // Preserve existing tickets for the event
                ...updatedCart,
            },
        }));

        // Send update to the server
         const response = await axios.post("http://127.0.0.1:8000/cart-update", { ...updatedCart, event_id: eventId });

        console.log("Response from server:", response.data);

        // fetchCart();
        setCart(response.data.cart); 
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    
    };

    return (
        <CartContext.Provider value={{ cart, updateCart ,lockedTickets,guestId }}>
            {children}
        </CartContext.Provider>
    );
};
