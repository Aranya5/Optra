import { StarIcon } from '@heroicons/react/solid';

const Rating = ({ value, onChange }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="focus:outline-none"
        >
          <StarIcon
            className={`h-6 w-6 ${star <= value ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        </button>
      ))}
    </div>
  );
};

export default Rating;
