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
      <body className="w-full h-screen flex flex-col justify-center items-center">
        <h2>Something went wrong!</h2>
        <button
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
