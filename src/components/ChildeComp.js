import React, { memo } from "react";

const ChildeComp = ({ list, user, onHandleUpdate }) => {
  console.log("child component rendered");
  // console.log(list);
  return (
    <div>
      <button onClick={onHandleUpdate}>Add number to List</button>
      {list.map((num, idx) => {
        return <span key={idx}>{`${num} `}</span>;
      })}

      {/*  <div>{user.name}</div> */}
    </div>
  );
};

/* function areEqual(prevProps, nextProps) {
  // comparing the name and age of the data object
  return prevProps.name === nextProps.name;
} */

// export default memo(ChildeComp);
export default memo(ChildeComp);
