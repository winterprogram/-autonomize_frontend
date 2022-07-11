import axios from "axios";
import { useState } from "react";
import { Chip } from "../common/Chip";
import { TextField } from "../common/TextField";



export const UploadFile = () => {
const [uploadFile, setUploadFile] = useState('');
const [superHero, setSuperHero] = useState('');
const [uploadResponse, setUploadResponse] = useState();
  const submitForm = (event:any) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("superHeroName", superHero);
    dataArray.append("uploadFile", uploadFile);

    axios
      .post("/", dataArray, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((response) => {
        // setUploadResponse(`File uploaded successfully
        
        // POST - superHeroName
        // value - ${superHero}
        
        // FILE - uploadFile`);
      })
      .catch((error) => {
        // setUploadResponse(`File uploaded successfully   POST - superHeroName
        // value - ${superHero}
        
        // FILE - uploadFile`);
      });
  };

    return (
        <ul>
            <li>
                <div className="flex w-full flex-row justify-between">
                    <span className="text-3xl font-bold p-4">File Upload</span>
                    <button
                        type="button"
                        className="text-white bg-[#0EB4F3] hover:bg-[#58c7f3] font-medium rounded-lg text-sm m-4 mt-5 px-2 py-2.5 "
                    >
                        Save
                    </button>
                </div>
                <form>
                <div className="ml-10">
                    <label  className="block mb-2 text-sm font-medium text-black-900 dark:text-black-300">First name</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Test File" onChange={(e) => setSuperHero(e.target.value)} required/>
                        <div className="flex flex-col">
                            <span className="mt-2 mb-2 font-semibold">Upload File</span>
                            <div className="flex flex-row [&>*]:mr-2">
                            <div className="flex justify-center items-center w-full">
                        <label  className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg className="mb-3 w-10 h-10 text-gray-400" fill="none" strokeWidth="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or PDF</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={(e:any) => setUploadFile(e.target.files)} />
                        </label>
                                </div> 
                                <pre>{uploadResponse}</pre>
                            </div>
                        </div>
                </div>
                </form>
            </li>
        </ul>
    )
}


// import React from "react";
// import axios from "axios";

// export default function App() {
//   const [uploadFile, setUploadFile] = React.useState();
//   const [superHero, setSuperHero] = React.useState();
//   const [uploadResponse, setUploadResponse] = React.useState();

//   const submitForm = (event) => {
//     event.preventDefault();

//     const dataArray = new FormData();
//     dataArray.append("superHeroName", superHero);
//     dataArray.append("uploadFile", uploadFile);

//     axios
//       .post("/", dataArray, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       })
//       .then((response) => {
//         setUploadResponse(`File uploaded successfully
        
//         POST - superHeroName
//         value - ${superHero}
        
//         FILE - uploadFile`);
//       })
//       .catch((error) => {
//         setUploadResponse(`File uploaded successfully

//         POST - superHeroName
//         value - ${superHero}
        
//         FILE - uploadFile`);
//       });
//   };

//   return (
//     <div className="App">
//       <form onSubmit={submitForm}>
//         <input
//           type="text"
//           onChange={(e) => setSuperHero(e.target.value)}
//           placeholder={"Superhero Name"}
//         />
//         <br />
//         <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
//         <br />
//         <input type="submit" />
//       </form>
//       <hr />
//       <pre>{uploadResponse}</pre>
//     </div>
//   );
// }
