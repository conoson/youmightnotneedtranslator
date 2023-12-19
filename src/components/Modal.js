export function Modal({isOpen, setIsOpen}) {

  return (
    <div
      class="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-[rgba(0,0,0,0.4)] pt-16"
      hidden={isOpen}
      onClick={(e) => {setIsOpen(true)}}
    >
      <div class="mx-auto my-[5%] border border-[#888] bg-white p-5 w-4/5" onClick={e=>e.stopPropagation()}>
        <span class="float-right text-2xl font-bold text-[#aaa] hover:text-black hover:no-underline hover:cursor-pointer">
          &times;
        </span>
        <p>Select a language:</p>
        <select name="languages" id="languages">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* <!-- Add more languages as needed --> */}
        </select>
      </div>
    </div>
  );
}
