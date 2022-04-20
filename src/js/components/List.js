
import React from "react";
import { connect } from "react-redux";


const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map((el, i) => (
      <li key={i}>{el.title}</li>
      ))}
  </ul>
);

const mapStateToProps = state => {
  return { articles: state.articles };
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;