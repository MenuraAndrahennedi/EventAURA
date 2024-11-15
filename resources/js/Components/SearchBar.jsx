import { useState } from 'react'
import { Form, FormControl, InputGroup, Dropdown } from 'react-bootstrap';
import '../style.scss';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleFilterSelect = (filterValue) => setFilter(filterValue);

  return (
   <>
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

            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>

          </InputGroup>
        </div>
      </section>
      </>
  )
}

export default SearchBar
