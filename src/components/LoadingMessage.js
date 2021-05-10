export default function LoadingMessage({ text }) {
  return (
    <div className="border-2 rounded-md border-yellow-500">
      <p className="px-3 py-3 text-yellow-500 animate-pulse">{text}</p>
    </div>
  );
}
