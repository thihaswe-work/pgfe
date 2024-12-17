"use client"; // Error boundaries must be Client Components

export default function GlobalError() {
  // {
  //   error,
  //   reset,
  // }: {
  //   error: Error & { digest?: string };
  //   reset: () => void;
  // }
  return (
    // global-error must include html and body tags
    <html>
      <body className="w-full h-screen flex flex-col justify-center items-center gap-3">
        <h2 className="text-md">Oops!Something went wrong!</h2>
        <button
          className="border-2 border-white p-2 rounded-lg"
          onClick={() => {
            window.location.reload();
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
