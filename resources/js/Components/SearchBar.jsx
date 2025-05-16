import { useState} from 'react'
import { Form, FormControl, InputGroup, Dropdown } from 'react-bootstrap';
import '../../css/style.scss';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';


const SearchBar = ({ onFilterChange, onSearch }) => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        onSearch(value); 
    };

    const handleFilterSelect = (selectedFilter) => {
        setFilter(selectedFilter);
        setSearch('');
        onFilterChange(selectedFilter);
    };

    const handleSearchSubmit = async () => {
    if (search.trim() === '') {
        alert('Please enter a search term.');
        return;
    }

    try {
        const response = await axios.post('/event/exists', { search });

        if (response.data.exists) {
            router.visit('/events/results', {
                method: 'post',
                data: {
                    search,
                    filter,
                },
            });

            onSearch(search); // optional
        } else {
            alert('No event found with that name.');
        }
    } catch (error) {
        console.error('Error checking event existence', error);
    }
};


    return (
        <section className="search-bar bg-light py-3">
            <div className="container d-flex justify-content-center">
                <InputGroup className="w-75">
                    <Dropdown onSelect={handleFilterSelect}>
                        <Dropdown.Toggle variant="outline-secondary">
                            Filter: {filter}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="All">All</Dropdown.Item>
                            <Dropdown.Item eventKey="Upcoming">Upcoming</Dropdown.Item>
                            <Dropdown.Item eventKey="Past">Past</Dropdown.Item>
                            <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <FormControl
                        placeholder="Search events"
                        value={search}
                        onChange={handleSearchChange}
                    />

                    <InputGroup.Text onClick={handleSearchSubmit} style={{ cursor: 'pointer' }}>
                        <BsSearch />
                    </InputGroup.Text>
                </InputGroup>
            </div>
        </section>
    );
};


export default SearchBar
