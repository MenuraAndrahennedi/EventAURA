import React, { useState } from "react";
import axios from "axios";
import '../../../css/ArtistInput.scss';

const ArtistInput = ({ selectedArtists ,setSelectedArtists }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    const [newArtist, setNewArtist] = useState({
        name: "",
        role: "",
        bio: "",
       
    });
    const [isAddingNew, setIsAddingNew] = useState(false);

    // Handle search input
    const handleSearch = async (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term.trim() === "") {
            setSearchResults([]);
            return;
        }

        try {
            const response = await axios.get(`/artists/search?query=${term}`);
            setSearchResults(response.data); // Assumes API returns an array of artists
        } catch (error) {
            console.error("Error fetching artists", error);
        }
    };

    // Handle selecting an existing artist
    const handleSelectArtist = (artist) => {
        if (!selectedArtists.some((a) => a.id === artist.id)) {
            setSelectedArtists([...selectedArtists, artist]);
        }
        setSearchTerm("");
        setSearchResults([]);
    };

    // Handle adding a new artist
    const handleNewArtistChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setNewArtist({ ...newArtist, [name]: files[0] });
        } else {
            setNewArtist({ ...newArtist, [name]: value });
        }
    };

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

    // Remove an artist from the selected list
    const handleRemoveArtist = (id) => {
        setSelectedArtists(selectedArtists.filter((artist) => artist.id !== id));
    };

    return (
        <div className="artist-input">
           <div className="header-container">
        <h3></h3>
    </div>
            {!isAddingNew ? (
                <>
                <div className="add-artist-form">
                    <input
                        type="text"
                        placeholder="Search or add a new artist"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                     {searchTerm && (
                            <button onClick={() => setIsAddingNew(true)}>
                                Add New
                            </button>
                        )}
                    </div>
                    <ul>
                        {searchResults.map((artist) => (
                            <li
                                key={artist.id}
                                className="artist-item"
                                onClick={() => handleSelectArtist(artist)}
                            >
                                <span className="artist-name">
                                {artist.name} ({artist.role})
                                </span>
                            </li>
                        ))}
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
                    {/* <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleNewArtistChange}
                    /> */}
                    <div className="button-group">
                    <button onClick={handleAddNewArtist}>Save Artist</button>
                    <button className="cancel-btn" onClick={() => setIsAddingNew(false)}>Cancel</button>
                    </div>
                </div>
            )}

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
