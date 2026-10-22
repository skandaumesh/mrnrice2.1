/**
 * Emits a JSON-LD block.
 *
 * The payload is our own data, never user input, so dangerouslySetInnerHTML is
 * safe here — but `<` is still escaped so a stray tag in any field could not
 * close the script element early.
 */
export default function JsonLd({ data }) {
  const json = JSON.stringify(Array.isArray(data) ? data : [data]).replace(
    /</g,
    "\\u003c"
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
