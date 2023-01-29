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

// export default memo(ChildComp, areEqual);

// function areEqual(prevProps, nextProps) {
//   return prevProps.user.name === nextProps.user.name && prevProps.list === nextProps.list;
// }

//  {/* <div>{user.name}</div> */}

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
