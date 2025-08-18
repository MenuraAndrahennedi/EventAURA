import React, { useState } from "react";
import axios from "axios";
import '../../../css/ArtistInput.scss';

const ArtistInput = ({ selectedArtists ,setSelectedArtists }) => {
    // State for search term input
    const [searchTerm, setSearchTerm] = useState("");
    // State for storing search results from API
    const [searchResults, setSearchResults] = useState([]);
    // State for storing new artist data
    const [newArtist, setNewArtist] = useState({
        name: "",
        role: "",
        bio: "",
       
    });
    // Toggle between search mode and add-new mode
    const [isAddingNew, setIsAddingNew] = useState(false);

     /**
     * Handle search input change
     * - Updates searchTerm
     * - Sends a request to the API to get matching artists
     * - Clears results if search term is empty
     */
    const handleSearch = async (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term.trim() === "") {
            // Expecting an array of artist objects from backend
            setSearchResults([]);
            return;
        }

        try {
            const response = await axios.get(`/artists/search?query=${term}`);
            setSearchResults(response.data); // API should return array of artists
        } catch (error) {
            console.error("Error fetching artists", error);
        }
    };

    // Handle selecting an existing artist from search results
    /**
     * Handle selection of an existing artist
     * - Prevents duplicates in selectedArtists
     * - Clears search term and results after selection
     */
    const handleSelectArtist = (artist) => {
        if (!selectedArtists.some((a) => a.id === artist.id)) {
            setSelectedArtists([...selectedArtists, artist]);
        }
        setSearchTerm("");
        setSearchResults([]);
    };

    
    /**
     * Handle changes in the "Add New Artist" form
     * - Updates form state based on input fields
     * - Handles both text and file inputs
     */
    const handleNewArtistChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setNewArtist({ ...newArtist, [name]: files[0] });
        } else {
            setNewArtist({ ...newArtist, [name]: value });
        }
    };

    
    /**
     * Save new artist to backend
     * - Submits FormData to handle file uploads if needed
     * - Adds new artist to selectedArtists list
     * - Resets form and closes "Add New" mode
     */
    const handleAddNewArtist = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            for (let key in newArtist) {
                formData.append(key, newArtist[key]);
            }

            const response = await axios.post("/artists", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            const addedArtist = response.data;
            setSelectedArtists([...selectedArtists, addedArtist]);
            setNewArtist({ name: "", role: "", bio: ""});
            setIsAddingNew(false);
        } catch (error) {
            console.error("Error adding new artist", error);
        }
    };

    
    /**
     * Remove an artist from the selected list
     * - Filters out the artist by id
     */
    const handleRemoveArtist = (id) => {
        setSelectedArtists(selectedArtists.filter((artist) => artist.id !== id));
    };

    return (
        <div className="artist-input">
            <div className="header-container">
            {/* <h3></h3> */}
            </div>

            {/* Display Search or Add New Artist form */}
            {!isAddingNew ? (
                <>
                    {/* Search input field */}
                    <div className="add-artist-form">
                        <input
                            type="text"
                            placeholder="Search or add a new artist"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        {/* Show "Add New" button when search term exists */}
                        {searchTerm && (
                                <button onClick={() => setIsAddingNew(true)}>
                                    Add New
                                </button>
                            )}
                    </div>

                    {/* Search results list */}
                    <ul>
                        {searchResults.map((artist) => (
                            <li
                                key={artist.id}
                                className="artist-item"
                                onClick={() => handleSelectArtist(artist)}>
                                <span className="artist-name">
                                    {artist.name} ({artist.role})
                                </span>
                            </li>
                        ))}

                        {/* If no results found, allow adding as new artist */}
                        {searchTerm && searchResults.length === 0 && (
                            <li
                                className="artist-item"
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() => setIsAddingNew(true)}
                            >
                                Add "{searchTerm}" as a new artist
                            </li>
                        )}
                    </ul>
                </>


                ) : (

                // Add new artist form
                <div className="add-artist-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter artist name"
                        value={newArtist.name}
                        onChange={handleNewArtistChange}
                    />
                    <input
                        type="text"
                        name="role"
                        placeholder="Enter role (e.g., Singer)"
                        value={newArtist.role}
                        onChange={handleNewArtistChange}
                    />
                    <textarea
                        name="bio"
                        placeholder="Enter bio"
                        value={newArtist.bio}
                        onChange={handleNewArtistChange}
                    ></textarea>

                    <div className="button-group">
                    <button onClick={handleAddNewArtist}>Save Artist</button>
                    <button className="cancel-btn" onClick={() => setIsAddingNew(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {/* Display selected artists list */}
            <div>
                <h4>Selected Artists:</h4>
                <ul>
                    {selectedArtists.map((artist) => (
                        <li key={artist.id} className="artist-item">
                            <span className="artist-name">
                            {artist.name} ({artist.role})
                            </span>
                            <div>
                            <button onClick={() => handleRemoveArtist(artist.id)}>
                                Remove
                            </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ArtistInput;
