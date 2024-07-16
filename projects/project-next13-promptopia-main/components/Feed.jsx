'use client';

import React, { useState, useEffect } from 'react'
import PromptCard from './PromptCard';

const PromptCardList = ({data, handleTagClick}) => {
  console.log(data);
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}



const Feed = () => {
  const [searchText, setSearchText] = useState("")
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchedResults, setSearchedResults] = useState([])
  const [posts, setPosts] = useState([]);

  const handleTagClick = (tagName) => {
    setSearchText(tagName)

    const searchResult = filterPrompts(tagName)
    setSearchedResults(searchResult)
  }

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(setTimeout(() => {
      const searchResult = filterPrompts(e.target.value);
      setSearchedResults(searchResult)
    }, 500))
  }

  //method that search
  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i") // flag for case-insensitive search
    return posts.filter((item) => 
      regex.test(item.creator.username) || regex.test(item.tag) || regex.test(item.prompt))
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data)
    }
  
    fetchPosts()
  }, [])
  

  return (
    <section className='feed'>
      <form className='
      relative w-full flex-center'>
        <input type='text' placeholder='Search for a tag or username'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
        >
        </input>
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList
        data={posts}
        handleTagClick={handleTagClick}
      />
      )

      }

    </section>
  )
}

export default Feed