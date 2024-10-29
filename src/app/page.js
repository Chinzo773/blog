'use client'

import { useEffect, useState } from "react"
import Block from "./components/block"
import Parent from './components/Parent'

const Page = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    const fetchData = async () => {
        try {
            const dataRaw = await fetch(`https://dev.to/api/articles?per_page=9&page=${page}`);
            const datas = await dataRaw.json();
            const filteredData = datas.filter(item => 
                item.title.toLowerCase().includes(search.toLowerCase())
            );
            setData(filteredData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [page, search]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1); // Reset page to 1 on new search
    };

    return (
        <Parent>
            <div>
                <input 
                    type="text" 
                    placeholder="Search articles..." 
                    onChange={handleSearchChange} 
                />
                <div id="outerContainer">
                    {data.length > 0 ? (
                        data.map(item => (
                            <Block key={item.id} data={item} />
                        ))
                    ) : (
                        <p>No articles found.</p>
                    )}
                </div>
                <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                    <div className="butt">
                        <button
                            className="prev"
                            onClick={() => {
                                if (page > 1) setPage(page - 1);
                            }}
                        >
                            Previous Page
                        </button>
                    </div>
                    <span className="page-number">Page {page}</span>
                    <div className="nextbutt">
                        <button
                            className="next"
                            onClick={() => setPage(page + 1)}
                        >
                            Next Page
                        </button>
                    </div>
                </div>
            </div>
        </Parent>
    );
}

export default Page;
