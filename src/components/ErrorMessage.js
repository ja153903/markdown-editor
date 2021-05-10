export default function ErrorMessage({ text }) {
  return (
    <div className="border-2 rounded-md border-red-500">
      <p className="px-3 py-3 text-red-500">{text}</p>
    </div>
  );
}
