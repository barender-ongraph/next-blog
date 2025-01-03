// app/category/[categoryId]/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Category Not Found
        </h2>
        <p className="text-gray-600">
          The category you&apos;re looking for doesn&lsquo;t exist.
        </p>
      </div>
    </div>
  );
}
