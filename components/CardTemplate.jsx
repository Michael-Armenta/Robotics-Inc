/* eslint-disable react/prop-types */

// The following component is used to make a templatate literal of a card, and export it.

export default function CardTemplate(props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
      <img className="rounded-t-lg" src={props.image} alt={props.name} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Cost: ${props.cost}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Email: {props.email}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Specialty: {props.specialty}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Years in Service: {props.age}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Available: {props.available == true ? "Available" : "Unavailable"}
        </p>
      </div>
    </div>
  );
}
