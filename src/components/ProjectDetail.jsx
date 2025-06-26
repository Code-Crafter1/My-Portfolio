// // import { useParams } from "react-router-dom";
// // import MyWork from "./MyWork"; // Import project data

// // const ProjectDetail = () => {
// //   const { id } = useParams();
// //   const project = MyWork.find((item) => item.id === id);

// //   if (!project) {
// //     return (
// //       <div className="text-center text-white mt-20">Project not found</div>
// //     );
// //   }

// //   return (
// //     // <div className="text-white bg-black min-h-screen px-6 py-10">
// //     <div className="text-white bg-black min-h-screen px-6 py-10 relative">
// //       {/* 🔙 Back Button */}
// //       <button
// //         onClick={() => navigate("/projects/timeline")}
// //         className="absolute top-6 left-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
// //       >
// //         ← Back to Projects
// //       </button>
// //       <img
// //         src={project.image}
// //         alt={project.name}
// //         className="w-full max-w-4xl mx-auto rounded-lg mb-8 object-cover"
// //       />
// //       <h1 className="text-4xl font-bold text-center mb-4">{project.name}</h1>
// //       <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8 text-center">
// //         {project.fullDescription}
// //       </p>

// //       <div className="max-w-3xl mx-auto space-y-4 text-center">
// //         <p>
// //           <strong className="text-pink-500">Technologies:</strong>{" "}
// //           {project.technologies.join(", ")}
// //         </p>
// //         <p>
// //           <strong className="text-pink-500">Hosted Link:</strong>{" "}
// //           {project.live ? (
// //             <a
// //               href={project.live}
// //               className="text-cyan-400 underline"
// //               target="_blank"
// //               rel="noreferrer"
// //             >
// //               Visit Site
// //             </a>
// //           ) : (
// //             "Not Hosted"
// //           )}
// //         </p>
// //         <p>
// //           <strong className="text-pink-500">GitHub Link:</strong>{" "}
// //           <a
// //             href={project.github}
// //             className="text-cyan-400 underline"
// //             target="_blank"
// //             rel="noreferrer"
// //           >
// //             View Code
// //           </a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjectDetail;

// import { useNavigate, useParams } from "react-router-dom";
// import MyWork from "./MyWork"; // Import project data

// const ProjectDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate(); // ✅ needed for Back button

//   const project = MyWork.find((item) => item.id === id);

//   if (!project) {
//     return (
//       <div className="text-center text-white mt-20">Project not found</div>
//     );
//   }

//   return (
//     <div className="text-white bg-black min-h-screen px-4 md:px-10 py-10 relative">
//       {/* 🔙 Back Button */}
//       <button
//         onClick={() => navigate("/projects/timeline")}
//         className="absolute top-4 left-4 md:top-6 md:left-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
//       >
//         ← Back to Projects
//       </button>

//       <img
//         src={project.image}
//         alt={project.name}
//         className="w-full max-w-4xl mx-auto rounded-lg mb-8 object-cover"
//       />

//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
//         {project.name}
//       </h1>

//       <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 mb-8 text-center">
//         {project.fullDescription}
//       </p>

//       <div className="max-w-3xl mx-auto space-y-4 text-center text-sm md:text-base">
//         <p>
//           <strong className="text-pink-500">Technologies:</strong>{" "}
//           {project.technologies.join(", ")}
//         </p>
//         <p>
//           <strong className="text-pink-500">Hosted Link:</strong>{" "}
//           {project.live ? (
//             <a
//               href={project.live}
//               className="text-cyan-400 underline"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Visit Site
//             </a>
//           ) : (
//             "Not Hosted"
//           )}
//         </p>
//         <p>
//           <strong className="text-pink-500">GitHub Link:</strong>{" "}
//           <a
//             href={project.github}
//             className="text-cyan-400 underline"
//             target="_blank"
//             rel="noreferrer"
//           >
//             View Code
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;

import { useNavigate, useParams } from "react-router-dom";
import MyWork from "./MyWork";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = MyWork.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="text-center text-white mt-20">Project not found</div>
    );
  }

  return (
    <div className="text-white bg-[#0f0f0f] min-h-screen px-4 md:px-10 pt-16 md:pt-10 pb-10 relative">
      {/* 🔙 Back Button */}
      <div className="md:absolute md:top-6 md:left-6 mb-8">
        <button
          onClick={() => navigate("/projects/timeline")}
          className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
        >
          ← Back to Projects
        </button>
      </div>

      {/* Project Image */}
      {/* <img
        src={project.image}
        alt={project.name}
        className="w-full max-w-4xl mx-auto rounded-lg mb-8 object-cover"
      /> */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full max-w-4xl mx-auto rounded-lg mb-8 object-cover border-4 border-pink-400 shadow-lg"
      />

      {/* Project Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        {project.name}
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 mb-8 text-center">
        {project.fullDescription}
      </p>

      {/* Details */}
      <div className="max-w-3xl mx-auto space-y-4 text-center text-sm md:text-base">
        <p>
          <strong className="text-pink-500">Technologies:</strong>{" "}
          {project.technologies.join(", ")}
        </p>
        <p>
          <strong className="text-pink-500">Hosted Link:</strong>{" "}
          {project.live ? (
            <a
              href={project.live}
              className="text-cyan-400 underline"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          ) : (
            "Not Hosted"
          )}
        </p>
        <p>
          <strong className="text-pink-500">GitHub Link:</strong>{" "}
          <a
            href={project.github}
            className="text-cyan-400 underline"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
