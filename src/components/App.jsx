import React, { useState } from "react";
import randomstring from "randomstring";

import Header from "./Header";
import SearchPanel from "./SearchPanel";
import PostFilter from "./PostFilter";
import PostList from "./PostList";
import AddForm from "./AddForm";
import CatLogo from "../img/cat2.jpg";
import Catalog from "./Catalog";
import Footer from "./Footer";

import "../css/App.css";

export default function App() {
  const [movies, setMovies] = useState([
    {
      label: "Forest Gump",
      important: false,
      like: false,
      id: randomstring.generate(5),
    },
    {
      label: "Inception (advice from Anna)",
      important: true,
      like: false,
      id: randomstring.generate(5),
    },
    {
      label: "Tenet (new,cinema)",
      important: true,
      like: false,
      id: randomstring.generate(5),
    },
  ]);

  const [term, setTerm] = useState("");

  const [filter, setFilter] = useState("all");

  const onDelete = (id) => {
    const updatedItems = movies.filter((item) => item.id !== id);
    setMovies(updatedItems);
  };

  const onAdd = (body) => {
    if (body.length === 0) {
      alert("you added empty item");
    } else if (movies.find((item) => item.label === body)) {
      alert("Movie already exists");
    } else {
      const newItem = {
        label: body,
        important: true,
        like: false,
        id: randomstring.generate(5),
      };
      setMovies([...movies, newItem]);
    }
  };

  const onToggleImportant = (id) => {
    const updatedMovies = movies.map((item) => {
      if (item.id === id) {
        item.important = !item.important;
        return item;
      } else {
        return item;
      }
    });
    setMovies(updatedMovies);
  };

  const onToggleLiked = (id) => {
    const updatedMovies = movies.map((item) => {
      if (item.id === id) {
        item.like = !item.like;
        return item;
      } else {
        return item;
      }
    });
    setMovies(updatedMovies);
  };

  const searchPost = (movies, term) => {
    //if empty or user deleted term
    if (term.length === 0) {
      return movies;
    }

    return movies.filter((item) => {
      return item.label.toLowerCase().includes(term);
      //return item.label.indexOf(term) > -1 does not work with lowerCase
    });
  };

  const filterPost = (movies, filter) => {
    if (filter === "like") {
      return movies.filter((item) => item.like);
    } else if (filter === "important") {
      return movies.filter((item) => !item.important);
    } else {
      return movies;
    }
  };

  const onUpdateSearch = (searchTerm) => {
    setTerm(searchTerm);
  };

  const onFilterSelect = (searchFilter) => {
    setFilter(searchFilter);
  };

  const liked = movies.filter((item) => item.like).length;
  const watched = movies.filter((item) => !item.important).length;
  const allPosts = movies.length;

  const visiblePosts = filterPost(searchPost(movies, term), filter);

  return (
    <div className="app" id="top">
      <Header liked={liked} watched={watched} allPosts={allPosts} />
      <div className="search-panel d-flex">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <PostFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <PostList
        posts={visiblePosts}
        onDelete={onDelete}
        onToggleImportant={onToggleImportant}
        onToggleLiked={onToggleLiked}
      />
      <AddForm onAdd={onAdd} />
      <div className="d-flex justify-content-center logoWrapper">
        <img src={CatLogo} alt="logo" className="logoHome" />
      </div>
      <Catalog onAdd={onAdd} />
      <Footer />
    </div>
  );
}
