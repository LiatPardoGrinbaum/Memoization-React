import React, { memo } from "react";

const ChildeComp = ({ list }) => {
  console.log("child component rendered");

  return (
    <div>
      <p>Hello</p>
      {/* <div>{user.name}</div> */}
      <div>
        {list.map((num, idx) => {
          return <span key={idx}>{`${num} `}</span>;
        })}
      </div>
    </div>
  );
};

// function areEqual(prevProps, nextProps) {
//   return prevProps.user.name === nextProps.user.name;
// }

// export default memo(ChildeComp, areEqual);
export default memo(ChildeComp);

/* 

import React, { memo } from "react";

const ChildeComp = ({ list, signedIn }) => {
  console.log("child component rendered");
  console.log(signedIn);
  return (
    <div>
      <button className="btn btnAdd">Add number</button>
      <div>
        {list.map((num, idx) => {
          return <span key={idx}>{`${num} `}</span>;
        })}
      </div>
    </div>
  );
};

// function areEqual(prevProps, nextProps) {
//   return prevProps.list === nextProps.list;
// }

// export default memo(ChildeComp, areEqual);
export default memo(ChildeComp);

// <div>{user.name}</div>
//onClick={onHandleUpdate}
*/
