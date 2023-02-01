import Form from "./Form"
//import List from "./List"
//import Cell from "./Cell";

import {useState, useEffect} from "react";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType,setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        if (!response.ok) throw Error ("Did not receive expected data");
        const data  = await response.json();
        setItems(data);
        console.log(data);
      }
      catch (err) {
        console.log(err.message);
      }
    }

    fetchItems();
  }, [reqType])

  return (
    <div className="App">
      <>
        <Form 
          reqType={reqType}
          setReqType={setReqType}>
        </Form>
        {/*<List items = {items}/>*/}
        <table>
          <tbody>
            {items.map((item) => (
              <tr>
                {Object.entries(item).map(([key, value]) => {
                  return (
                    <td key={key}>
                      {JSON.stringify(value)}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>

      </>
    </div>
  );
}

export default App;
