// import React from 'react';

const UserType = () => {
  const userTypes = ['Editor', 'Influencer', 'Businessman', 'Developer', 'Designer', 'Marketer', 'Entrepreneur', 'Writer'];

  return (
    <div className="p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center">Your Identity</h1>

      {/* Flex Container for Options */}
      <div className="flex flex-wrap justify-center gap-4">
        {userTypes.map((type, index) => (
          <div
            key={index}
            className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
            style={{ flexBasis: 'calc(33.333% - 1rem)' }} // Adjust the flex basis for different row layouts
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserType;
