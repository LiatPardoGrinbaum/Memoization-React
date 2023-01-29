import React, { memo } from "react";
const ChildComp = ({ list, user }) => {
  console.log("child component rendered");

  return (
    <div>
      <p>Hello {user.name}</p>
      <div>
        {list.map((num, idx) => {
          return <span key={idx}>{`${num} `}</span>;
        })}
      </div>
    </div>
  );
};
export default memo(ChildComp);
