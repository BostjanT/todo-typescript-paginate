import React from "react";
import { List, Pages } from "./styled.list";

type Paginate = {
  totalPosts: number;
  postsPerPage: number;
  paginate: (number: number) => void;
};

const Pagination: React.FC<Paginate> = ({
  totalPosts,
  postsPerPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pages>
      <ul>
        {pageNumbers.map((number) => (
          <List key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </List>
        ))}
      </ul>
    </Pages>
  );
};

export default Pagination;
