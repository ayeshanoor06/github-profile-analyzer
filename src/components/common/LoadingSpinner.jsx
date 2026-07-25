function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

      <p className="mt-4 text-gray-600">
        Loading GitHub profile...
      </p>
    </div>
  );
}

export default LoadingSpinner;