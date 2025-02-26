import { useState, useEffect, useRef } from "react"

const CardTeamMember = ({ name, role, bio, img, linkedin }) => {

  const [popupState, setPopupState] = useState(false);
  const card = useRef(null);
  const popup = useRef(null);

  useEffect(() => {
    let scrollPosition;

    const openPopup = () => {
      scrollPosition = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollPosition}px`;

      setPopupState(true)
    }
    const closePopup = () => {
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);

      setPopupState(false)
    }

    // Store references to elements
    const cardElement = card.current;
    const popupElement = popup.current;

    cardElement.addEventListener('click', () => openPopup())

    popupElement.addEventListener('click', (e) => {
      if (e.target === e.currentTarget)
        closePopup()
    })

    return () => {
      cardElement.removeEventListener("click", openPopup);
      popupElement.removeEventListener("click", closePopup);
    };

  }, [])


  return (
    <>
      <div ref={card} className="cursor-pointer flex flex-col h-full max-w-78 min-w-70 rounded-4xl bg-stone-200 dark:bg-stone-900 transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-[1.01]">

        {/* Photo */}
        <img
          className="h-75 object-cover rounded-tl-4xl rounded-tr-4xl"
          src={img}
          alt="photo"
        />

        {/* Info Container */}
        <div className="pt-3 pb-4 px-7 flex flex-col">
          <span className="font-medium dark:text-stone-300 text-stone-700">
            {role}
          </span>
          <span className="text-2xl font-semibold">{name}</span>
        </div>

      </div>

      {/* Popup */}
      <div ref={popup} className={`overflow-x-auto p-10 fixed h-dvh w-dvw bg-white/5 top-0 left-0 z-50 backdrop-blur-sm ${popupState ? 'flex' : 'hidden'}`}>

        <div className="flex flex-col items-center h-max w-150 bg-white text-black p-10 m-auto rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)]">

          <div className="flex gap-5">
            <img className="w-50 rounded-full mb-5" src={img} alt="photo" />
            <div className="flex flex-col justify-center">
              <span className="font-medium dark:text-stone-300 text-stone-700">{role}</span>
              <span className="text-2xl font-semibold mb-7">{name}</span>
            </div>
          </div>
          <span className="text-justify">{bio}</span>

        </div>
      </div>
    </>
  );
};

export default CardTeamMember;
