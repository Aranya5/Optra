const StatsCard = ({ title, value, color }) => {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className={`mt-2 text-3xl font-semibold ${color}`}>{value}</p>
      </div>
    );
  };
  
  export default StatsCard;
  