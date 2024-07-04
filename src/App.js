import React, { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const myinterval = setInterval(()=>{
      setCount(0);
    },1000)
    return () => clearInterval(myinterval);
  },[])

const handleClick = () => {
  if(count<3){
    setCount(count+1);
  }
};



  return (
  <div style={{textAlign:'center', marginTop:'100px'}}>
  <button style={{  backgroundColor: '#4CAF50',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'}} onClick={handleClick}>Click me!</button>
    <p>{count} times clicked</p>
    </div>
  );
}
export default App;