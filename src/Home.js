import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "./components/Card";
import styled from "styled-components";
import axios from "axios";
import Navbar from "./components/Navbar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("price");

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "price") {
        return a.price - b.price;
      } else if (sortType === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  const onLoad = async () => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    console.log(resp.data);
    setProducts(resp.data);
  };

  useEffect(() => {
    onLoad();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const cardPerPage = 12;
  const lastIndex = currentPage * cardPerPage;
  const firstIndex = lastIndex - cardPerPage;
  const cards = filteredProducts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredProducts.length / cardPerPage);

  const pageNumbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changePage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SortSelect
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="price">Sort by Price</option>
            <option value="category">Sort by Category</option>
          </SortSelect>
        </SearchBar>
      </div>
      <CardGrid>
        {cards.map((product) => (
          <Card
            key={product.id}
            imageSrc={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </CardGrid>
      <Navigation>
        <ul>
          <li>
            <a onClick={prePage}>Prev</a>
          </li>
          {pageNumbers.map((n) => (
            <li key={n}>
              <a onClick={() => changePage(n)}>{n}</a>
            </li>
          ))}
          <li>
            <a href="#" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </Navigation>
      <Footer>
        <span>Copyrights with Arun Kumar</span>
      </Footer>
    </div>
  );
};

export default Home;

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  flex-grow: 1;
  margin-right: 10px;
`;

const SortSelect = styled.select`
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  background-color: #f1f3f6;
  @media screen and (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  height: 80px;
  font-size: 1.5rem;
`;
