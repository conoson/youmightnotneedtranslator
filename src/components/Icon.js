export function Icon(props) {
  return (
    <div
      {...props}
      className={`aspect-[1/1] w-full flex-grow-0 rounded-md bg-gray-300 bg-[url(https://unsplash.it/64)] bg-cover ${props.className}`}
    ></div>
  );
}
