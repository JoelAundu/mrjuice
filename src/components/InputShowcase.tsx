import React, { useState } from "react";
import Input from "./inputs/Input";
import TextInput from "./inputs/TextInput";
import NumberInput from "./inputs/NumberInput";
import SelectInput from "./inputs/SelectInput";
import TextareaInput from "./inputs/TextareaInput";
import CheckboxInput from "./inputs/CheckboxingInput";
// CheckboxInput

// Placeholder icon
const SearchIcon = () => <span>🔍</span>;

const InputsShowcase = () => {
  // State for form data
  const [formData, setFormData] = useState({
    search: "",
    username: "",
    age: 25,
    role: "developer",
    bio: "",
    agree: false,
  });

  // State for submitted data (to simulate mutation/query)
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a mutation/query
    alert("Submitting data: " + JSON.stringify(formData, null, 2));
    setSubmittedData(formData);
  };

  const handleQuery = () => {
    // Simulate a query
    alert("Querying data: " + JSON.stringify(formData, null, 2));
  };

  const roles = [
    { value: "developer", label: "Developer" },
    { value: "designer", label: "Designer" },
    { value: "manager", label: "Manager" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
        🌟 MrJuice UI Inputs Showcase 🌟
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Input Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input with Icon (Search) */}
            <Input
              label="Search"
              leftIcon={<SearchIcon />}
              value={formData.search}
              onChange={(e) => setFormData({ ...formData, search: e.target.value })}
              className="!bg-gray-50"
              inputClassName="!text-blue-600"
            />

            {/* TextInput (Label Outside) */}
            <TextInput
              label="Username"
              labelOutside
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="!bg-gray-50"
              inputClassName="!border-blue-300 !text-blue-600"
              labelClassName="!text-blue-600"
            />

            {/* NumberInput */}
            <NumberInput
              label="Age"
              value={formData.age}
              onChange={(value) => setFormData({ ...formData, age: value })}
              min={18}
              max={100}
              className="!bg-gray-50"
              inputClassName="!text-blue-600"
              buttonClassName="!bg-blue-100 !text-blue-600"
            />

            {/* SelectInput */}
            <SelectInput
              label="Role"
              options={roles}
              value={formData.role}
              onChange={(value) => setFormData({ ...formData, role: value })}
              className="!bg-gray-50"
              selectClassName="!border-blue-300 !text-blue-600"
            />

            {/* TextareaInput */}
            <TextareaInput
              label="Bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={3}
              className="!bg-gray-50"
              textareaClassName="!border-blue-300 !text-blue-600"
            />

            {/* CheckboxInput */}
            <CheckboxInput
              label="Agree to Terms"
              checked={formData.agree}
              onChange={(checked) => setFormData({ ...formData, agree: checked })}
              className="!bg-gray-50"
              inputClassName="accent-blue-600"
              labelClassName="!text-blue-600"
            />

            {/* Submit and Query Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit (Mutation)
              </button>
              <button
                type="button"
                onClick={handleQuery}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Query
              </button>
            </div>
          </form>
        </div>

        {/* Display Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Submitted Data</h2>
          {submittedData ? (
            <pre className="text-sm text-gray-700 bg-gray-50 p-4 rounded-md">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          ) : (
            <p className="text-gray-500">Submit the form to see the data here.</p>
          )}
        </div>

        {/* Customization Examples */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Customized Inputs</h2>
          <div className="space-y-4">
            {/* Custom TextInput (Label Inside) */}
            <TextInput
              label="Email"
              value=""
              onChange={() => {}}
              className="!bg-purple-50"
              inputClassName="!border-purple-300 !text-purple-600 background-color: #f3e8ff !important;"
            />

            {/* Custom NumberInput */}
            <NumberInput
              label="Quantity"
              value={5}
              onChange={() => {}}
              className="!bg-green-50"
              inputClassName="!text-green-600"
              buttonClassName="!bg-green-100 !text-green-600"
            />

            {/* Custom SelectInput */}
            <SelectInput
              label="Department"
              options={[{ value: "hr", label: "HR" }, { value: "it", label: "IT" }]}
              value="hr"
              onChange={() => {}}
              className="!bg-red-50"
              selectClassName="!border-red-300 !text-red-600"
            />

            {/* Custom TextareaInput */}
            <TextareaInput
              label="Notes"
              value=""
              onChange={() => {}}
              className="!bg-yellow-50"
              textareaClassName="!border-yellow-300 !text-yellow-600"
            />

            {/* Custom CheckboxInput */}
            <CheckboxInput
              label="Subscribe"
              checked={true}
              onChange={() => {}}
              className="!bg-pink-50"
              inputClassName="accent-pink-600"
              labelClassName="!text-pink-600"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600">
        <p>Built with ❤️ by MrJuice UI Team</p>
        <p>Version 1.0.9 | © 2025</p>
      </footer>
    </div>
  );
};

export default InputsShowcase;