import React, { useState, useEffect } from "react";
import { ItemList } from "./spring1.style";
import { useSpring, useTrail, animated, config } from "react-spring";

const Spring1 = props => {
  const [ toggle, set ] = useState(true);

  const data = [
    "oaksdpoak",
    "asdadsdasd",
    "dddsadsdsa",
    "dddasdadaa",
    "ssssadasdas",
    "assdddadass"
  ];

  const trail = useTrail(data.length, {
    config: config.stiff,
    from: { marginLeft: -105, opacity: 0 },
    to: { marginLeft: 0, opacity: 1 }
  });

  const spring = useSpring({
    to: {
      opacity: toggle ? 1 : 0,
      color: 'green',
      
    },
    from: {
      opacity: 0,
      color: 'red'
    }
  })

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {trail.map((props, index) => (
        <ItemList as={animated.div} style={props} key={index} color='#eeeeee'>
          {data[index]}
          <button onClick={ () => set(!toggle) } >Toggle</button>
          </ItemList>
          ))}
          <animated.div style={ spring }>
            toggleable text
          </animated.div>
    </div>
  );
};

export default Spring1;
