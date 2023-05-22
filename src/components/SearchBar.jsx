import { useState } from 'react';
import Fuse from 'fuse.js';

import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { DataScroller } from 'primereact/datascroller';


import { Button } from 'primereact/button';


import data from '../../questions.json';


export default function SearchBar() {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);


    const handleSearch = (event) => {
        // const matches = fuse.search(query);
        const matches = fuse.search(event.target.value);

        // setResults(matches);
        setResults(matches.map(result => result.item));

    };

    const options = {
        threshold: 0.3,
        includeScore: true,
        shouldSort: true,
        includeMatches: true,
        distance: 50,
        minMatchCharLength: 3,
        keys: ['question', 'answer']
    }

    const fuse = new Fuse(data, options);

    const itemTemplate = (result) => {
        return (
            <>
                <div>
                    <h4>Question: {result.question}</h4>
                    <p>Answer: {result.answer}</p>
                </div>
            </>
        );
    }

    console.log(results);
    return (
        <>
            <div className="flex flex-column gap-2 align-items-center justify-content-center ">

                {/* <form onSubmit={handleSearch}> */}
                <InputText
                    value={query}

                    onChange={
                        (e) => {
                            setQuery(e.target.value);
                            handleSearch(e);
                        }
                    }

                    type='search'
                    autoFocus={true}
                    placeholder="Type your question here..."
                    className="search-bar p-inputtext-lg p-d-block p-mb-2"
                    size={50}

                />
                <DataScroller
                    value={results}
                    itemTemplate={itemTemplate}
                    rows={10}
                    inline
                />
            </div>
        </>
    );
}
