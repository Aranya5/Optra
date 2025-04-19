const Whistleblower = () => {
    // ... (previous state)
  
    return (
      <div className="container py-8">
        <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Anonymous Report</h1>
          
          {/* WARNING MESSAGE */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationIcon className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Important Notice</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    False accusations may result in disciplinary action per 
                    <a href="/company-policy" className="underline ml-1">Company Policy §4.3</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Report form remains the same */}
          <form onSubmit={handleSubmit}>
            {/* ... existing form fields ... */}
          </form>
        </div>
      </div>
    );
  };