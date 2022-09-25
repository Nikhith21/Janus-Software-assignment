import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      getData()
  }, [])

  const getData = async () => {
    //Using fetch
    const response = await fetch("https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/address/&lt;contract_address&gt;/tra
    nsactions/?quote-currency=USD&amp;format=JSON&amp;page-size=5&amp;key=ckey_docs")
    const data = await response.json()
    setItems(data.data.items)
    
    //using axios
    /**
    try {
      const response = await axios.get('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/address/&lt;contract_address&gt;/tra
nsactions/?quote-currency=USD&amp;format=JSON&amp;page-size=5&amp;key=ckey_docs');
      console.log(response.data.data);
      setItems(response.data.data.items)
         } catch (err) {
      // Handle Error Here
      console.error(err);
     }
     **/
  }

  return (
    <div className="App">
      {console.log(items)}
      Welcome 
      <ul>
        {items.map(item => (
          <li key={item.chain_id}>
            {item.name}
          </li>
        ))}
      </ul>
      </div>
  );
}

export default App;
