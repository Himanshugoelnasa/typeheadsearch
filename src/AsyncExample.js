import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AsyncTypeahead} from 'react-bootstrap-typeahead'
const SEARCH_URI = 'http://localhost:5050/ai/v1/api/search/search-conversations';
//const SEARCH_URI = 'https://api.github.com/search/users';

const AsyncExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(`${SEARCH_URI}/${query}`)
      .then((resp) => resp.json())
      .then(({ data }) => {
        setOptions(data);
        setIsLoading(false);
        
    });  
  };

  const limitWords = (text, wordLimit) => {
    const words = text.split(' '); // Split the string into words
    if (words.length <= wordLimit) return text; // Return the original text if within limit
    return words.slice(0, wordLimit).join(' ') + '...'; // Limit and add ellipsis
  }

  const onSearchClick = (option) => {
    console.log(option);
    
  }


  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      minLength={3}
      onSearch={handleSearch}
      onChange={(selectedOption) => onSearchClick(selectedOption)}
      labelKey="content"
      options={options}
      placeholder="Search for a Github user..."
      renderMenuItemChildren={(option) => (
        <>
          <span>{limitWords(option.content, 10) }</span>
        </>
      )}
    />
  );
};

export default AsyncExample;
