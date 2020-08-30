import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { API_KEY, API_URL } from "../../config";

import "../../styles/search.css";

export default function Search() {
  let [query, setQuery] = useState("");
  let [results, setResults] = useState("");

  // 검색 입력창
  function handleSearchInput(e) {
    setQuery(e.target.value);
  }

  // 엔터키 검색
  function enterKeyPress(e) {
    if (e.keyCode === 13) {
      handleSearchSubmit(e);
    }
  }

  // 검색값 요청: 인기도에 따라 정렬
  function handleSearchSubmit(e) {
    // 새로고침 방지
    e.preventDefault();

    axios
      .get(
        `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
      )
      .then((res) => {
        let searchResults = res.data.results.sort(
          (a, b) => b.popularity - a.popularity
        );
        // 로컬 state로 관리
        setResults(searchResults);
      })
      .catch((err) => {
        console.log(err);
        alert("검색결과가 존재하지 않습니다");
      });
    // 초기화
    setQuery("");
  }

  // SearchResult 컴포넌트 매핑
  function resultMap(results) {
    // console.log(results);
    // 응답받은 검색값 존재하는 경우
    if (results) {
      return results.map((result, i) => {
        return <SearchResult result={result} key={i} />;
      });
    }
  }

  return (
    <div className="Search">
      <h1>Search</h1>
      <div className="search_container">
        <SearchBar
          query={query}
          handleSearchInput={handleSearchInput}
          handleSearchSubmit={handleSearchSubmit}
          enterKeyPress={enterKeyPress}
        />
        {resultMap(results)}
      </div>
    </div>
  );
}
