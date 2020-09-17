import React, { useState } from "react";
import randomstring from "randomstring";
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Navigation from "./Navigation";
import Header from "./Header";
import SearchPanel from "./SearchPanel";
import PostFilter from "./PostFilter";
import PostList from "./PostList";
import AddForm from "./AddForm";
import NotFound from "./NotFound";
import Catalog from "./Catalog";



import "../css/App.css";

export default function App() {

  const [movies, setMovies] = useState([
        {label: "Titanic(Netflix)", important: false, like: false, id: randomstring.generate(5),},
        { label: "Inception (advice from Anna)", important: true, like: false, id: randomstring.generate(5) },
        { label: "Tenet (new,cinema)", important: true, like: false, id: randomstring.generate(5) }
      ]);

  const [term, setTerm] = useState('');
  
  const [filter, setFilter] = useState('all');
  
  const onDelete = (id) => {
    const updatedItems = movies.filter(item => item.id !== id);
    setMovies(updatedItems);
  };


  const onAdd = (body) => {
    if(body.length > 0) {
        const newItem = {
            label: body,
            important: true,
            like: false,
            id: randomstring.generate(5)
        };
        setMovies([...movies, newItem]);
    }
  }

  const onToggleImportant = (id) => {
    const updatedMovies = movies.map(item => {
        if (item.id === id) {
            item.important = !item.important;
            return item;
        } else {
            return item;
        }
    });
    setMovies(updatedMovies);
  }


  const onToggleLiked = (id) => {
    const updatedMovies = movies.map(item => {
        if (item.id === id) {
            item.like = !item.like;
            return item;
        } else {
            return item;
        }
    });
    setMovies(updatedMovies);
  }

  const searchPost = (movies, term) => {
    //if empty or user deleted term
    if(term.length === 0) {
        return movies
    }
    
    return movies.filter(item => {
        return item.label.toLowerCase().includes(term)
      //return item.label.indexOf(term) > -1 does not work with lowerCase
    })
  }

  const filterPost = (movies, filter) => {
    if (filter === 'like') {
        return movies.filter(item => item.like)
    } else if (filter === 'important') {
        return movies.filter(item => !item.important)
    }else {
        return movies
    }
  }


  const onUpdateSearch = (searchTerm) => {
    setTerm(searchTerm)
  }

  const onFilterSelect = (searchFilter) => {
    setFilter(searchFilter)
  }

  const liked = movies.filter(item => item.like).length;
  const watched = movies.filter(item => !item.important).length;
  const allPosts = movies.length;
  
  const visiblePosts = filterPost(searchPost(movies, term), filter)

    return (
      <BrowserRouter>
      <div className="app">
      <Navigation />
          <Switch>
          
            <Route path="/" exact>
              <Header 
                liked={liked}
                watched={watched}
                allPosts={allPosts}
              />
              <div className="search-panel d-flex">
                <SearchPanel onUpdateSearch={onUpdateSearch}/>
                <PostFilter 
                  filter={filter}
                  onFilterSelect={onFilterSelect}
                />
              </div>
              <PostList 
                posts={visiblePosts} 
                onDelete={onDelete} 
                onToggleImportant={onToggleImportant}
                onToggleLiked={onToggleLiked}
              />
              <AddForm 
                onAdd={onAdd}
              />
              </Route>
              <Route exact path="/catalog" component={Catalog} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }

  
