import BlogSection from "./BlogSection";
import SearchBar from "./SearchBar";
import TitleImageBlog from "./TitleImageBlog";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { useState } from "react";

const Blog = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <>
      <Header />
      <TitleImageBlog />
      <SearchBar onSearch={handleSearch} />
      <BlogSection search={search} />
      <Footer />
    </>
  );
};

export default Blog;
