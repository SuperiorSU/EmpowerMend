import React from "react";

import "./query.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Harass",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Child Abuse", handler: () => {}, id: 2 },
    { text: "rape", handler: () => {}, id: 3 },
    
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button ms-3 "
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container me-1">{optionsMarkup}</div>;
};

export default LearningOptions;