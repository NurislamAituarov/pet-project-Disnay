import Link from 'next/link';

export default function Error() {
  return (
    <>
      <h1>Произошла ошибка</h1>

      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </>
  );
}
