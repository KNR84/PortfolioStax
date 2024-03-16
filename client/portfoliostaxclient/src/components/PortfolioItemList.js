// //A component responsible for fetching and displaying a list of portfolio items
// import React, { useState, useEffect } from "react";
// import { Button } from "reactstrap";
// import { useNavigate } from "react-router-dom";
// import { getAllPortfolioItems } from "../APIManagers/PortfolioItemViewManager";
// import PortfolioItem from "./PortfolioItem";
// import axios from 'axios';


//   // Function to download photo for a portfolio item
//   // function DownloadFile(id) {
//   //   try {
//   //     const response = axios.get('https://localhost:5001/api/PortfolioDownload/download?portfolioItemID=' + id, {
//   //       headers: {
//   //         'Content-Type': 'image/jpeg'
//   //       }
//   //     });
//   //     return response;
//   //   } catch (error) {
//   //     throw error;
//   //   }
//   // }

//   // function DownloadFile(id) {
//   //     return axios.get('https://localhost:5001/api/PortfolioDownload/download?portfolioItemID=' + id, {
//   //       headers: {
//   //         'Content-Type': 'image/jpeg'
//   //       }
//   //     })
//   //     .then(function (response) {
//   //       return response.data
//   //     })
//   // }

// //   function DownloadFile(pitem) {
// //     return axios.get('https://localhost:5001/api/PortfolioDownload/download?portfolioItemID=' + pitem.id, {
// //       headers: {
// //         'Content-Type': 'image/jpeg'
// //       }
// //     })
// //     .then(function (response) {
// //       pitem.image=response.data
// //     }).catch(error => console.log(error));
// // }

// var config = { responseType: 'blob' }

// // function DownloadFile(pitem) {
// //   return axios.get('https://localhost:5001/api/PortfolioDownload/download?portfolioItemID=' + pitem.id, config)
// //   .then(function (response) {
// //     pitem.blob=response.data
// //   }).catch(error => console.log(error));
// // }

// function response(e) {
//   var urlCreator = window.URL || window.webkitURL;
//   var imageUrl = urlCreator.createObjectURL(this.response);
//   document.querySelector("#image"+e.currentTarget.portfolioItemId).src = imageUrl;
// }


// // //get the actual bytes
// // function DownloadFile(id) {
// //   response = await axios.get('https://localhost:5001/api/PortfolioDownload/download?portfolioItemID='+id,  {
// //     headers: {
// //       'Content-Type': 'image/jpeg'
// //     }
// //   })
// // }

// const PortfolioItemList = () => {
//   const [portfolioItems, setPortfolioItems] = useState([]);
//   const navigate = useNavigate();

//   const updatePortfolioItemsState = () => {
//     return getAllPortfolioItems()
//       .then((portfolioItemArray) => {
//         setPortfolioItems(portfolioItemArray);
//       })
//       .catch((error) => {
//         console.error("Error fetching portfolio items:", error);
        
//       });
//   };

//   useEffect(() => {
//     updatePortfolioItemsState();
//   }, []);

//   const handleAddNewPortfolioItems = () => {
//     navigate("/create/new/portfolioItem");
//   };

//   const handleEdit = (portfolioItemId) => {
//     navigate(`/portfolioItem/edit/${portfolioItemId}`);
//   };

//   // portfolioItems.map((portfolioItem) => (
//   //   // alert(portfolioItem.id);

//   //   // portfolioItem.

//   //   // resp = DownloadFile(portfolioItem.id)
//   //   // portfolioItem.test=resp

//   //   // make our call to the download api and get the photo (pass the id from portfolioItem???)
//   //   // write that photo to something in this html that has yet to be created
 
//   // ));
// for (let i = 0; i < portfolioItems.length; i++){
//   // alert(i)
//   // console.log(portfolioItems[i]);
//   // var data=DownloadFile(portfolioItems[i].id)
//   // var img=DownloadFile(portfolioItems[i].id).then(result => console.log(result))
//   // var img=DownloadFile(portfolioItems[i].id).then(result => console.log(result))
//   // .catch(error => console.log(error));

//   // var img=DownloadFile(portfolioItems[i].id).then(function (photo) {
//   //     return photo
//   //   })
//   //   .catch(error => console.log(error));

//   // console.log("downloading file")
//   // console.log(portfolioItems[i])
//   // DownloadFile(portfolioItems[i])
//   // console.log("after download")
//   // console.log(portfolioItems[i])

 
//   // const blob = new Blob(portfolioItems[i].blob, { type: "image/png" });
//   // console.log("myblob: " + blob);

//   // var url = URL.createObjectURL(blob)

//   // var blobObj = new Blob([atob(portfolioItems[i].image)], { type: "image/jpeg" });
//   // var url = window.URL.createObjectURL(blobObj);

//   // console.log("myurl: " + url)

//   // var url = window.URL.createObjectURL(portfolioItems[i].image);



//   // portfolioItems[i].url=url
//   // portfolioItems[i].url = url

//   // console.log("double check blob")
//   // console.log("portfolio-item-blob: "+portfolioItems[i].blob)

//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", 'https://localhost:5001/api/PortfolioDownload/download?portfolioItemID=' + portfolioItems[i].id);
//   xhr.responseType = "blob";
//   xhr.portfolioItemId = portfolioItems[i].id
//   xhr.onload = response;
//   // xhr.onload = wrapResponse(45);
//   xhr.send(null);

//   var imgName="image"+portfolioItems[i].id

//   // console.log(imgName)

//   portfolioItems[i].imageTagName=imgName

  



//   // console.log("my data is")
//   // console.log(img.data)
//   // portfolioItems[i].image=img.data
//   // console.log("that was my data")
//   // console.log(portfolioItems[i])
//   // console.log("that was my portfortolio data")


//   // portfolioItems[i].image=

// }
// //  var responses = Promise.all(portfolioItems.map(portfolioItem => DownloadFile(portfolioItem.id)))

// //   alert(responses)

  

//   //render an html element to catch the photo
//   // return (
//   //   <div className="container">
//   //     <div className="row justify-content-center">
//   //       <div className="cards-column">
//   //         <Button onClick={handleAddNewPortfolioItems} className="mb-4">
//   //           Add New Portfolio Item
//   //         </Button>
//   //         {portfolioItems.map((portfolioItem) => (
            
//   //           <PortfolioItem
//   //             key={portfolioItem.id}
//   //             portfolioItem={portfolioItem}
//   //             onEdit={handleEdit} // Pass handleEdit as a prop
//   //           />
//   //         ))}
//   //       </div>
//   //     </div>
//   //   </div>
//   // );

//     return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="cards-column">
//           <Button onClick={handleAddNewPortfolioItems} className="mb-4">
//             Add New Portfolio Item
//           </Button>
//           {portfolioItems.map((portfolioItem) => (
//             <div key={portfolioItem.id} className="portfolio-item">
//               {/* <img src={portfolioItem.url} alt={`Portfolio item ${portfolioItem.id}`} /> */}
//               {/* <img className={portfolioItem.URL} src={"data:image/jpeg;base64," + portfolioItem.blob}></img> */}
//               <img id={portfolioItem.imageTagName}/>
//               <PortfolioItem
//                 portfolioItem={portfolioItem}
//                 onEdit={handleEdit}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioItemList;





// // // //possible solution 
// // import React, { useState, useEffect } from "react";
// // import { Button } from "reactstrap";
// // import { useNavigate } from "react-router-dom";
// // import { getAllPortfolioItems } from "../APIManagers/PortfolioItemViewManager";
// // import PortfolioItem from "./PortfolioItem";
// // import axios from 'axios';

// // const PortfolioItemList = () => {
// //   const [portfolioItems, setPortfolioItems] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     updatePortfolioItemsState();
// //   }, []);

// //   const updatePortfolioItemsState = () => {
// //     return getAllPortfolioItems()
// //       .then((portfolioItemArray) => {
// //         alert("hello")

// //         // Fetch photo for each portfolio item
// //         Promise.all(portfolioItemArray.map(portfolioItem => DownloadFile(portfolioItem.id)))
// //           .then(responses => {
// //             const updatedPortfolioItems = portfolioItemArray.map((portfolioItem, index) => ({
// //               ...portfolioItem,
// //               image: responses[index].data // Assuming response contains image data
// //             }));
// //             setPortfolioItems(updatedPortfolioItems);
// //           })
// //           .catch(error => {
// //             console.error("Error downloading photos:", error);
// //             setPortfolioItems(portfolioItemArray); // Set portfolio items without images
// //           });
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching portfolio items:", error);
// //       });
// //   };

// //   const handleAddNewPortfolioItems = () => {
// //     navigate("/create/new/portfolioItem");
// //   };

// //   const handleEdit = (portfolioItemId) => {
// //     navigate(`/portfolioItem/edit/${portfolioItemId}`);
// //   };

// //   // Function to download photo for a portfolio item
// //   async function DownloadFile(id) {
// //     try {
// //       const response = await axios.get('https://localhost:5001/api/PortfolioDownload/download?portfolioItemID=' + id, {
// //         headers: {
// //           'Content-Type': 'image/jpeg'
// //         }
// //       });
// //       return response;
// //     } catch (error) {
// //       throw error;
// //     }
// //   }

// //   return (
// //     <div className="container">
// //       <div className="row justify-content-center">
// //         <div className="cards-column">
// //           <Button onClick={handleAddNewPortfolioItems} className="mb-4">
// //             Add New Portfolio Item
// //           </Button>
// //           {portfolioItems.map((portfolioItem) => (
// //             <div key={portfolioItem.id} className="portfolio-item">
// //               <img src={portfolioItem.image} alt={`Portfolio item ${portfolioItem.id}`} />
// //               <PortfolioItem
// //                 portfolioItem={portfolioItem}
// //                 onEdit={handleEdit}
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PortfolioItemList;


//after refactor
// import React, { useState, useEffect } from "react";
// import { Button } from "reactstrap";
// import { useNavigate } from "react-router-dom";
// import { getAllPortfolioItems } from "../APIManagers/PortfolioItemViewManager";
// import PortfolioItem from "./PortfolioItem";



// var config = { responseType: 'blob' }



// function response(e) {
//   var urlCreator = window.URL || window.webkitURL;
//   var imageUrl = urlCreator.createObjectURL(this.response);
//   document.querySelector("#image" + e.currentTarget.portfolioItemId).src = imageUrl;
// }




// const PortfolioItemList = () => {
//   const [portfolioItems, setPortfolioItems] = useState([]);
//   const navigate = useNavigate();

//   const updatePortfolioItemsState = () => {
//     return getAllPortfolioItems()
//       .then((portfolioItemArray) => {
//         setPortfolioItems(portfolioItemArray);
//       })
//       .catch((error) => {
//         console.error("Error fetching portfolio items:", error);

//       });
//   };

//   useEffect(() => {
//     updatePortfolioItemsState();
//   }, []);

//   const handleAddNewPortfolioItems = () => {
//     navigate("/create/new/portfolioItem");
//   };

//   const handleEdit = (portfolioItemId) => {
//     navigate(`/portfolioItem/edit/${portfolioItemId}`);
//   };


//   for (let i = 0; i < portfolioItems.length; i++) {


//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", 'https://localhost:5001/api/PortfolioDownload/download?portfolioItemID=' + portfolioItems[i].id);
//     xhr.responseType = "blob";
//     xhr.portfolioItemId = portfolioItems[i].id
//     xhr.onload = response;
//     xhr.send(null);

//     var imgName = "image" + portfolioItems[i].id
//     portfolioItems[i].imageTagName = imgName

//   }


//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="cards-column">
//           <Button onClick={handleAddNewPortfolioItems} className="mb-4">
//             Add New Portfolio Item
//           </Button>
//           {portfolioItems.map((portfolioItem) => (
//             <div key={portfolioItem.id} className="portfolio-item">
//               <img id={portfolioItem.imageTagName} />
//               <PortfolioItem
//                 portfolioItem={portfolioItem}
//                 onEdit={handleEdit}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioItemList;

// //after refactor and styling 
// import React, { useState, useEffect } from "react";
// import { Button } from "reactstrap";
// import { useNavigate } from "react-router-dom";
// import { getAllPortfolioItems } from "../APIManagers/PortfolioItemViewManager";
// import PortfolioItem from "./PortfolioItem";
// import "./PortfolioItemList.css"; // Import CSS file for styling

// function PortfolioItemList() {
//   const [portfolioItems, setPortfolioItems] = useState([]);
//   const navigate = useNavigate();

//   const updatePortfolioItemsState = () => {
//     return getAllPortfolioItems()
//       .then((portfolioItemArray) => {
//         setPortfolioItems(portfolioItemArray);
//       })
//       .catch((error) => {
//         console.error("Error fetching portfolio items:", error);
//       });
//   };

//   useEffect(() => {
//     updatePortfolioItemsState();
//   }, []);

//   const handleAddNewPortfolioItems = () => {
//     navigate("/create/new/portfolioItem");
//   };

//   const handleEdit = (portfolioItemId) => {
//     navigate(`/portfolioItem/edit/${portfolioItemId}`);
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="cards-column">
//           <div className="add-New-Item-Button">
//           <Button onClick={handleAddNewPortfolioItems} className="mb-4">
//             Add New Portfolio Item
//           </Button>
//           </div>
//           {portfolioItems.map((portfolioItem) => (
//             <div key={portfolioItem.id} className="portfolio-card">
//               <div className="portfolio-details">
//                 <div className="portfolio-image">
//                   <img
//                     src={`https://localhost:5001/api/PortfolioDownload/download?portfolioItemID=${portfolioItem.id}`}
//                     alt="Portfolio Item"
//                   />
//                 </div>
//                 <PortfolioItem
//                   portfolioItem={portfolioItem}
//                   onEdit={handleEdit}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortfolioItemList;


//after completing crud
//after refactor and styling 
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { deletePortfolioItem, getAllPortfolioItems} from "../APIManagers/PortfolioItemViewManager";
import PortfolioItem from "./PortfolioItem";
import "./PortfolioItemList.css"; // Import CSS file for styling

function PortfolioItemList() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const navigate = useNavigate();

  const getPortfolioItems = () => {
    getAllPortfolioItems().then((allPortfolioItems) => setPortfolioItems(allPortfolioItems));
  };


  const updatePortfolioItemsState = () => {
    return getAllPortfolioItems()
      .then((portfolioItemArray) => {
        setPortfolioItems(portfolioItemArray);
      })
      .catch((error) => {
        console.error("Error fetching portfolio items:", error);
      });
  };

  useEffect(() => {
    updatePortfolioItemsState();
  }, []);

  const handleAddNewPortfolioItems = () => {
    navigate("/create/new/portfolioItem");
  };

  const handleEdit = (portfolioItemId) => {
    navigate(`/portfolioItem/edit/${portfolioItemId}`);
  };
  

  const handleDelete = (id) => { 
    const confirmDelete = window.confirm("Are you sure you would like to delete this portfolio item?");
    if (confirmDelete) {
        // if Bad Request window.alert this category has dependencies it would go here...
      deletePortfolioItem(id).then(() => { 
        getPortfolioItems();
      });
    }
  };



  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          <div className="add-New-Item-Button">
          <Button onClick={handleAddNewPortfolioItems} className="mb-4">
            Add New Portfolio Item
          </Button>
          </div>
          {portfolioItems.map((portfolioItem) => (
            <div key={portfolioItem.id} className="portfolio-card">
              <div className="portfolio-details">
                <div className="portfolio-image">
                  <img
                    src={`https://localhost:5001/api/PortfolioDownload/download?portfolioItemID=${portfolioItem.id}`}
                    alt="Portfolio Item"
                  />
                </div>
                <PortfolioItem
                  portfolioItem={portfolioItem}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItemList;








