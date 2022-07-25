import React, { useState, useEffect } from "react";
// import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { useHistory } from "react-router-dom";
import Pool from '../UserPool';

import axios from "axios";

function App() {

  // if (!authorized){
  //   return <Redirect to="/login"/>
  // }

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");

  let history = useHistory();



  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    let SearchUrl;
    // our api to fetch the search result

    for (let i=0; i<posts.length; i++){

      if (posts[i]['DocumentName'] == searchTerm){
        SearchUrl=posts[i]['DocumentUrl'];
        window.open(SearchUrl, '_blank');
        break;
      }
    }

  };

  useEffect(() => {
    const loadPosts = async () => {
    //   setLoading(true);
      const response = await axios.post(
        "https://84pmbhca41.execute-api.us-east-1.amazonaws.com/dev/getdocuments"
      );
      setPosts(response.data);
    //   setLoading(false);
    };

    loadPosts();
  }, []);

  return (

    
    <div className="App">
      <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand text-light" >Document Management System</a>
        <form class="form-inline">
          <button class="btn btn-outline-danger my-2 my-sm-0" onClick={()=> history.push("/")}>Logout</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            ChangePassword
          </button>
        </form>
      </nav>
    
      <h1>Search</h1>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {posts
            .filter((item) => {
              const searchTerm = value;
              const fullName = item.DocumentName;

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.DocumentName)}
                className="dropdown-row"
                key={item.DocumentName}
              >
                {item.DocumentName}
              </div>
            ))}
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    



    </div>


  



  );
}

export default App;





// import React, { useEffect } from "react";
// import { useState } from "react";
// import "./styles.css";
// import  ApiData  from "./ApiData"
// import axios from 'axios'

// var data = require("./MOCK_DATA.json");
// // const ApiUrl = 'https://39cr7g427g.execute-api.us-east-1.amazonaws.com/dev/getdocuments'

// export default () => {

//   const [value, setValue] = useState("");


//   const onChange = (event) => {
//     setValue(event.target.value);
//   };

//   const onSearch = (searchTerm) => {
//     setValue(searchTerm);
//     // our api to fetch the search result
//     console.log("search ", searchTerm);
//   };


//   return (
//     <div className="App">
//       <h1>Search</h1>

//       <div className="search-container">
//         <div className="search-inner">
//           <input type="text" value={value} onChange={onChange} />
//           <button onClick={() => onSearch(value)}> Search </button>
//         </div>
//         <div className="dropdown">
//           {data
//             .filter((item) => {
//               const searchTerm = value.toLowerCase();
//               const fullName = item.full_name.toLowerCase();

//               return (
//                 searchTerm &&
//                 fullName.startsWith(searchTerm) &&
//                 fullName !== searchTerm
//               );
//             })
//             .slice(0, 10)
//             .map((item) => (
//               <div
//                 onClick={() => onSearch(item.full_name)}
//                 className="dropdown-row"
//                 key={item.full_name}
//               >
//                 {item.full_name}
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// // import "./App.css";
// import axios from "axios";

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [searchTitle, setSearchTitle] = useState("");

//   useEffect(() => {
//     const loadPosts = async () => {
//       setLoading(true);
//       const response = await axios.get(
//         "https://84pmbhca41.execute-api.us-east-1.amazonaws.com/dev/getdocuments"
//       );
//       setPosts(response.data);
//       setLoading(false);
//     };

//     loadPosts();
//   }, []);

//   return (
//     <div className="App">
//       <h3>Search Filter</h3>
//       <input
//         style={{ width: "30%", height: "25px" }}
//         type="text"
//         placeholder="Search..."
//         onChange={(e) => setSearchTitle(e.target.value)}
//       />
//       {loading ? (
//         <h4>Loading ...</h4>
//       ) : (
//         posts
//           .filter((value) => {
//             if (searchTitle === "") {
//               return value;
//             } else if (
//               value.title.toLowerCase().includes(searchTitle.toLowerCase())
//             ) {
//               return value;
//             }
//           })
//           .map((item) => <h5 key={item.DocumentName}></h5>)
//       )}
//     </div>
//   );
// }

// export default App;



