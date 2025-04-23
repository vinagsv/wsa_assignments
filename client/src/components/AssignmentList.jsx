import React, { useEffect, useState } from "react";

function AssignmentList({ category, apiBaseUrl, isLoading, setIsLoading }) {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      if (!category) return;

      setIsLoading(true);
      setError(null);

      try {
        // Remove credentials: 'include' to fix CORS issues
        const response = await fetch(
          `${apiBaseUrl}/api/assignments/${category}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
            // Removed credentials: 'include' - this was causing the CORS error
          }
        );

        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }

        const data = await response.json();
        setAssignments(data);
      } catch (err) {
        console.error("Error fetching assignments:", err);
        setError(`Failed to load assignments: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAssignments();
  }, [category, apiBaseUrl, setIsLoading]);

  const handleAssignmentClick = (assignmentName) => {
    const assignmentUrl = `${apiBaseUrl}/assignments/${category}/${assignmentName}/index.html`;
    window.open(assignmentUrl, "_blank");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-teal-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Error</h3>
          <p>{error}</p>
          <button
            className="mt-4 bg-white text-red-500 px-4 py-2 rounded hover:bg-red-100"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <h2 className="text-4xl font-semibold text-center text-white mb-12 font-poppins tracking-wide">
        {category} Assignments
      </h2>
      {assignments.length === 0 ? (
        <div className="text-center text-gray-300 text-xl">
          No assignments found for this category.
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {assignments.map((assignment, index) => (
            <div
              key={index}
              onClick={() => handleAssignmentClick(assignment.name)}
              className="cursor-pointer transition-all hover:scale-105 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 p-6 transform hover:shadow-2xl hover:shadow-purple-400"
            >
              <h3 className="text-3xl font-extrabold text-purple-950 mb-4 font-inter tracking-wide">
                {assignment.name}
              </h3>
              <p className="text-xl text-blue-200 opacity-90 font-inter tracking-tight">
                {assignment.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AssignmentList;
