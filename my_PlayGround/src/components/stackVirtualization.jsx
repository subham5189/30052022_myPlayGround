import React from 'react'
import useVirtual from "react-cool-virtual";
import "./styles.scss";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList } from "react-window";
import { makeStyles } from "@material-ui/styles";


// export const useStyles = makeStyles((theme) => ({ 

//     body {
//         font-family: sans-serif;
//         background: #fff;
//       }
      
//       app {
//         padding: 0 1rem;
//       }
//       p {
//         color: #333;
//       }
      
//       outer {
//         border: 1px solid #ddd;
//         border-radius: 4px;
//       }
      
//       item {
//         display: flex;
//         justify-content: center;
//         align-items: center;
      
//         &dark {
//           background: #e5e5e5;
//         }
//       } 
// }))

const stackVirtualization = ({ rowHeights }) => {
//   const { outerRef, innerRef, items } = useVirtual({
//     itemCount: rowHeights.length,
//     itemSize: (idx) => rowHeights[idx]
//   });

  return (
    <div
      className="outer"
      style={{ width: "300px", height: "300px", overflow: "auto" }}
      ref={outerRef}
    >
      {/* <div ref={innerRef}> */}
        {items.map(({ index, size }) => (
          <div
            key={index}
            className={`item ${index % 2 ? "dark" : ""}`}
            style={{ height: `${size}px` }}
          >
            ♻️ {index}
          </div>
        ))}
      {/* </div> */}
    </div>
  );
};

export default stackVirtualization;
