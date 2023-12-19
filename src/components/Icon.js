export function Icon(props) {
  return (
    <div
      key={props.key}
      class={`w-full aspect-[1/1] flex-grow-0 rounded-md bg-gray-300 bg-[url(https://unsplash.it/64)] bg-cover ${props.class}`}
    ></div>
  );
}
