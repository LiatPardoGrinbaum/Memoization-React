import React, { memo } from "react";

const ChildeComp = ({ list, onHandleUpdate }) => {
  console.log("child component rendered");
  // console.log(list);
  return (
    <div>
      <button className="btn btnAdd" onClick={onHandleUpdate}>
        Add number
      </button>
      <div>
        {list.map((num, idx) => {
          return <span key={idx}>{`${num} `}</span>;
        })}
      </div>
    </div>
  );
};

/* function areEqual(prevProps, nextProps) {
  // comparing the name and age of the data object
  return prevProps.name === nextProps.name;
} */

// export default memo(ChildeComp);
export default memo(ChildeComp);

// <div>{user.name}</div>
