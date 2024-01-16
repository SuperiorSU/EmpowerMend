import React, { useState } from 'react';

function Modal(props) {

  const [Name, setName] = useState('');
 
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Here, you can send the form data to your server using fetch or any other API call method
    const formData = {
      name: name,
      
      email: email,
      contact: contact,
      gender: gender
    };
    console.log(formData); 

    // Example: Sending form data to a server using fetch
    fetch('http://localhost:8080/usernew', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
});
  };
    const rowStyle = {
        background: 'linear-gradient(to right, #FFFFFF, #F0F0F0)', // Define your gradient background
        padding: '20px', // Add padding as needed
        borderRadius: '20px', // Rounded corners
      };

      const validateEmail = (value) => {
        // A simple email validation check. You can use a more robust validation method.
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      };

      const validateContactNumber = (value) => {
        // Validate that the contact number consists of exactly 10 digits.
        return /^\d{10}$/.test(value);
      };


    const name = props.forName
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  let hed,titl,bo;
  const response = [{
    id:'appoint',
    head : 'Book an Apponitment',
    title : 'Register your Apponitment',
    body : 
            <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            name= 'name'
            
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-black">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            
            onChange={(e) => setContact(e.target.value)}
            name="phone"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-black">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
           
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        
      </form>
   
  },
  {
    id:'week',
    head : 'Subscribe',
    title : 'Subscribe Weekly',
    body : <form>
             <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Contact Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="expertPreference" className="block text-sm font-medium text-gray-600">
            Expert Preference
          </label>
          <select
            id="expertPreference"
            name="expertPreference"
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="psychiatrist">Psychiatrist</option>
            <option value="legalExpert">Legal Expert</option>
          </select>
        </div>
        {/* <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
          >
            Cancel
          </button>
        </div> */}
    </form>
  },
  {
    id:'day',
    head : 'Subscribe',
    title : 'Subscribe Daily',
    body : <form>
             <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Contact Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="expertPreference" className="block text-sm font-medium text-gray-600">
            Expert Preference
          </label>
          <select
            id="expertPreference"
            name="expertPreference"
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="psychiatrist">Psychiatrist</option>
            <option value="legalExpert">Legal Expert</option>
          </select>
        </div>
        {/* <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
          >
            Cancel
          </button>
        </div> */}
    </form>
  },
  {
    id:'month',
    head : 'Subscribe',
    title : 'Subscribe Monthly',
    body : <form >
             <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Contact Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="expertPreference" className="block text-sm font-medium text-gray-600">
            Expert Preference
          </label>
          <select
            id="expertPreference"
            name="expertPreference"
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="psychiatrist">Psychiatrist</option>
            <option value="legalExpert">Legal Expert</option>
          </select>
        </div>
        <div className="flex justify-between">
          {/* <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
          >
            Cancel
          </button> */}
        </div>
    </form>
  }
]

if(name=='appoint')
{
    hed = response[0].head
titl=response[0].title
bo = response[0].body
}
else if(name == 'week'){
    hed = response[1].head
titl=response[1].title
bo = response[1].body
}
else if(name == 'day'){
    hed = response[2].head
titl=response[2].title
bo = response[2].body
}
else if(name == 'month'){
    hed = response[3].head
titl=response[3].title
bo = response[3].body
}




  return (
    <div>
      {/* Modal toggle button */}
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
       {hed}
      </button>

      {/* Main modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white w-full md:max-w-2xl p-6 rounded-lg shadow-lg dark:bg-gray-700">
            {/* Modal content */}
            <div className="relative">
              {/* Modal header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                 {titl}
                </h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-6 space-y-6">
                {bo}
              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-end p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={toggleModal , handleSubmit}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  submit
                </button>
                <button
                  onClick={toggleModal}
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
