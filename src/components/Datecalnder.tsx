// "use client";
// import React, { useState } from "react";
// // import DatePicker from "react-datepicker";
// import CalenderUpdate from 'update-calender'
// import "react-datepicker/dist/react-datepicker.css";

// function Datecalnder() {
//   const [value, setValue] = useState([
//     {
//       label: "string",
//       value: "sample1",
//     },
//     {
//       label: "string1",
//       value: "sample2",
//     },
//     {
//       label: "string2",
//       value: "sample3",
//     },
//   ]);
//   const [dateCalender, setDateCalender] = useState(new Date());

//   const chagneDates = (data: any) => {
//     console.log(data, "data date change");
//     setDateCalender(data);
//   };

//   const chagneDates2 = (data: any) => {
//     console.log(data, "data date change");
//     // setValue(data);
//   };
//   const reload = () => {
//     console.log("test reload.");
//   };

//   return (
//     <>
//             {/* <SearchOptions
//        optionNullMsg={<span>Sorry! No data found!</span>}
//        btnPlace="RIGHT"
//        btnText={<span>Search</span>}
//        isLoading={false}
//        isReload={reload}
//        loadingText="Loading..."
//        selectOptions={[
//         {
//           label: "string",
//           value: "sample1",
//         },
//         {
//           label: "string1",
//           value: "sample2",
//         },
//         {
//           label: "string2",
//           value: "sample3",
//         },
//       ]}
//        updateText={chagneDates2}
//        startSearch="type"
//        />
//       <p className="bg-transperant">
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem soluta
//         itaque dolores obcaecati quaerat modi ullam impedit unde consectetur
//         nisi?
//       </p>
//      */} 
//      <div className="row">
//      <CalenderUpdate
//       onChange={chagneDates}
//       value={dateCalender}
//       dateFormat="d/MM/YYYY H:mm"
//       // weekendOff={false}
//       showTime={true}
//       // dateRange={false}
//       // multiDateSelect={false}
      
//       /> 
//       </div>
//     </>
//   );
// }

// export default Datecalnder;

// /**  <DynamicForm
//       formDetails={formObject}
//       formValues={chagneDates2}
//       submitfn={chagneDates}
//       resetbtn={true}
//     /> */

// // const formObject = [
// //   {
// //     name: "username",
// //     type: "text",
// //     placeholder: "Please enter your email or username.",
// //     lable: "Username",
// //     validationobj: {
// //       required: {
// //         value: true,
// //         message: "Please pass the userName",
// //       },
// //     },
// //     somemsg: "user Name |email",
// //   },
// // ];
