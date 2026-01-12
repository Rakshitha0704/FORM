// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
//  new code

// import { useState } from "react";

// const schema = {
//   fields: [
//     {
//       name: "confirm",
//       label: "Do you have experience?",
//       type: "select",
//       options: ["yes", "no"],
//       required: true
//     },
//     {
//       name: "years",
//       label: "Years of Experience",
//       type: "number",
//       required: true,
//       condition: {
//         field: "confirm",
//         value: "yes"
//       }
//     },
//     {
//       name:"Name",
//       label:"Name",
//       type:"string",
//       required:true
//     },
//     {
//       name: "email",
//       label: "Email",
//       type: "email",
//       required: true
//     },
//     {
//       name:"Phone number",
//       label:"Phone number",
//       type:"number",
//       required : true
//     },
    
    
//   ]
// };

// export default function App() {
//   const [data, setData] = useState<Record<string, string>>({});
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const shouldShow = (field: any) => {
//     if (!field.condition) return true;
//     return data[field.condition.field] === field.condition.value;
//   };

//   const validate = (field: any, value: string) => {
//     if (field.required && !value) return "This field is required";
//     return "";
//   };

//   const handleChange = (field: any, value: string) => {
//     setData({ ...data, [field.name]: value });
//     setErrors({ ...errors, [field.name]: validate(field, value) });
//   };

//   const handleSubmit = () => {
//     let valid = true;
//     const newErrors: Record<string, string> = {};

//     schema.fields.forEach(field => {
//       if (!shouldShow(field)) return;
//       const error = validate(field, data[field.name]);
//       if (error) valid = false;
//       newErrors[field.name] = error;
//     });

//     setErrors(newErrors);

//     if (valid) {
//       alert("Form submitted successfully!");
//       console.log(data);
//     }
//   };

//   return (
//     <div style={{ padding: 40, maxWidth: 400 }}>
//       <h2>Dynamic Form Builder</h2>

//       {schema.fields.map(field =>
//         shouldShow(field) ? (
//           <div key={field.name} style={{ marginBottom: 16 }}>
//             <label>{field.label}</label>

//             {field.type === "select" ? (
//               <select
//                 value={data[field.name] || ""}
//                 onChange={e => handleChange(field, e.target.value)}
//               >
//                 <option value="">Select</option>
//                 {field.options.map((opt: string) => (
//                   <option key={opt} value={opt}>
//                     {opt}
//                   </option>
//                 ))}
//               </select>
//             ) : (
//               <input
//                 type={field.type}
//                 value={data[field.name] || ""}
//                 onChange={e => handleChange(field, e.target.value)}
//               />
//             )}

//             {errors[field.name] && (
//               <p style={{ color: "red" }}>{errors[field.name]}</p>
//             )}
//           </div>
//         ) : null
//       )}

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }
// ---------------------------------------------------------------------------------------
// import { useState } from "react";
// import "./App.css";

// const schema = {
//   fields: [
//     { name: "name", label: "Full Name", type: "text", required: true },
//     { name: "email", label: "Email Address", type: "email", required: true },
//     { name: "age", label: "Age", type: "number", required: true },

//     {
//       name: "experience",
//       label: "Do you have work experience?",
//       type: "select",
//       options: ["yes", "no"],
//       required: true
//     },
//     {
//       name: "years",
//       label: "Years of Experience",
//       type: "number",
//       required: true,
//       condition: { field: "experience", value: "yes" }
//     },

//     {
//       name: "role",
//       label: "Preferred Role",
//       type: "select",
//       options: ["Frontend", "Backend", "Full Stack"],
//       required: true
//     },

//     {
//       name: "skills",
//       label: "Primary Skill",
//       type: "select",
//       options: ["React", "Node.js", "Python", "Java"],
//       required: true
//     },

//     {
//       name: "relocate",
//       label: "Willing to Relocate?",
//       type: "select",
//       options: ["yes", "no"],
//       required: true
//     },

//     {
//       name: "location",
//       label: "Preferred Location",
//       type: "text",
//       required: true,
//       condition: { field: "relocate", value: "yes" }
//     }
//   ]
// };

// export default function App() {
//   const [data, setData] = useState<Record<string, string>>({});
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const shouldShow = (field: any) => {
//     if (!field.condition) return true;
//     return data[field.condition.field] === field.condition.value;
//   };

//   const validate = (field: any, value: string) => {
//     if (field.required && !value) return "This field is required";
//     return "";
//   };

//   const handleChange = (field: any, value: string) => {
//     setData({ ...data, [field.name]: value });
//     setErrors({ ...errors, [field.name]: validate(field, value) });
//   };

//   const handleSubmit = () => {
//     let valid = true;
//     const newErrors: Record<string, string> = {};

//     schema.fields.forEach(field => {
//       if (!shouldShow(field)) return;
//       const error = validate(field, data[field.name]);
//       if (error) valid = false;
//       newErrors[field.name] = error;
//     });

//     setErrors(newErrors);

//     if (valid) {
//       alert("Form submitted successfully!");
//       console.log(data);
//     }
//   };

//   return (
//     <div className="page">
//       <form className="form-card">
//         <h2>Job Application Form</h2>

//         {schema.fields.map(field =>
//           shouldShow(field) ? (
//             <div key={field.name} className="field">
//               <label>{field.label}</label>

//               {field.type === "select" ? (
//                 <select
//                   value={data[field.name] || ""}
//                   onChange={e => handleChange(field, e.target.value)}
//                 >
//                   <option value="">Select</option>
//                   {field.options.map((opt: string) => (
//                     <option key={opt} value={opt}>
//                       {opt}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   type={field.type}
//                   value={data[field.name] || ""}
//                   onChange={e => handleChange(field, e.target.value)}
//                 />
//               )}

//               {errors[field.name] && (
//                 <span className="error">{errors[field.name]}</span>
//               )}
//             </div>
//           ) : null
//         )}

//         <button type="button" onClick={handleSubmit}>
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// }
// --------------------------------------
import { useState } from "react";
import "./App.css";

// Type definitions for fields
type FieldType = "text" | "email" | "number" | "select";

interface FieldCondition {
  field: string;
  value: string;
}

interface Field {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  condition?: FieldCondition;
}

// Schema definition
const schema: { fields: Field[] } = {
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "age", label: "Age", type: "number", required: true },
    {
      name: "experience",
      label: "Do you have work experience?",
      type: "select",
      options: ["yes", "no"],
      required: true,
    },
    {
      name: "years",
      label: "Years of Experience",
      type: "number",
      required: true,
      condition: { field: "experience", value: "yes" },
    },
    {
      name: "role",
      label: "Preferred Role",
      type: "select",
      options: ["Frontend", "Backend", "Full Stack"],
      required: true,
    },
    {
      name: "skills",
      label: "Primary Skill",
      type: "select",
      options: ["React", "Node.js", "Python", "Java"],
      required: true,
    },
    {
      name: "relocate",
      label: "Willing to Relocate?",
      type: "select",
      options: ["yes", "no"],
      required: true,
    },
    {
      name: "location",
      label: "Preferred Location",
      type: "text",
      required: true,
      condition: { field: "relocate", value: "yes" },
    },
  ],
};

export default function App() {
  const [data, setData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Check if field should be displayed based on condition
  const shouldShow = (field: Field) => {
    if (!field.condition) return true;
    return data[field.condition.field] === field.condition.value;
  };

  // Validate a field
  const validate = (field: Field, value: string) => {
    if (field.required && !value) return "This field is required";
    return "";
  };

  // Handle field value change
  const handleChange = (field: Field, value: string) => {
    setData({ ...data, [field.name]: value });
    setErrors({ ...errors, [field.name]: validate(field, value) });
  };

  // Handle form submission
  const handleSubmit = () => {
    let valid = true;
    const newErrors: Record<string, string> = {};

    schema.fields.forEach((field) => {
      if (!shouldShow(field)) return;
      const error = validate(field, data[field.name]);
      if (error) valid = false;
      newErrors[field.name] = error;
    });

    setErrors(newErrors);

    if (valid) {
      alert("Form submitted successfully!");
      console.log(data);
    }
  };

  return (
    <div className="page">
      <form className="form-card">
        <h2>Job Application Form</h2>

        {schema.fields.map((field) =>
          shouldShow(field) ? (
            <div key={field.name} className="field">
              <label>{field.label}</label>

              {field.type === "select" ? (
                <select
                  value={data[field.name] || ""}
                  onChange={(e) => handleChange(field, e.target.value)}
                >
                  <option value="">Select</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  value={data[field.name] || ""}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
              )}

              {errors[field.name] && (
                <span className="error">{errors[field.name]}</span>
              )}
            </div>
          ) : null
        )}

        <button type="button" onClick={handleSubmit}>
          Submit Application
        </button>
      </form>
    </div>
  );
}
