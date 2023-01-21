import React from "react";

const useIterator = () => {
  const [current, setCurrent] = React.useState(1);


  return {
    current,
    setCurrent
  };
};

export default useIterator;
