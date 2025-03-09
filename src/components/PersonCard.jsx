import { useState, useEffect, useRef, useCallback } from "react"

const CardTeamMember = ({ name, role, bio, img, linkedin }) => {

  const [popupState, setPopupState] = useState(false);
  const card = useRef(null);
  const popup = useRef(null);
  const popupCloseBtnLight = useRef(null);
  const popupCloseBtnDark = useRef(null);

  const scrollPosition = useRef(0);

  const openPopup = useCallback(() => {
    scrollPosition.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.overflowY = 'auto';
    document.body.style.top = `-${scrollPosition.current}px`;
    setPopupState(true)
  }, []);

  const closePopup = useCallback(() => {
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    document.body.style.overflowY = 'scroll';
    window.scrollTo(0, scrollPosition.current);

    setPopupState(false)
  }, []);

  useEffect(() => {
    const cardElement = card.current;
    const popupElement = popup.current;
    const popupCloseLightElement = popupCloseBtnLight.current;
    const popupCloseDarkElement = popupCloseBtnDark.current;

    if (!cardElement || !popupElement || !popupCloseLightElement || !popupCloseDarkElement) return;

    const handleClosePopup = (e) => {
      if (e.target === e.currentTarget) closePopup();
    };

    cardElement.addEventListener('click', openPopup)
    popupElement.addEventListener('click', handleClosePopup)
    popupCloseLightElement.addEventListener('click', handleClosePopup)
    popupCloseDarkElement.addEventListener('click', handleClosePopup)

    return () => {
      cardElement.removeEventListener("click", openPopup);
      popupElement.removeEventListener("click", handleClosePopup);
      popupCloseLightElement.removeEventListener("click", handleClosePopup);
      popupCloseDarkElement.removeEventListener("click", handleClosePopup);
    };

  }, [])


  return (
    <>
      <div ref={card} className="group cursor-pointer flex flex-col h-full max-w-79 min-w-77 rounded-4xl bg-white dark:bg-stone-900">

        {/* Photo */}
        <div className="h-75 overflow-hidden rounded-tl-4xl rounded-tr-4xl">
          <img
            className="size-full object-cover transition-all duration-400 ease-in-out group-hover:scale-[1.03]"
            src={img}
            alt="photo"
          />
        </div>

        {/* Info Container */}
        <div className="p-7 pt-5 flex flex-col">
          <span className="font-medium dark:text-stone-300 text-stone-700">
            {role}
          </span>
          <span className="text-2xl font-semibold">{name}</span>
        </div>

      </div>

      {/* Popup */}
      <div ref={popup} className={`overflow-x-auto p-5 team3:pt-20 pt-10 fixed h-dvh w-dvw bg-white/5 dark:bg-black/5 top-0 left-0 z-50 backdrop-blur-lg ${popupState ? 'flex' : 'hidden'}`}>

        <div className="relative flex flex-col h-max team3:w-180 team2:w-150 w-115 bg-white dark:bg-stone-800 p-0 team3:p-6 mx-auto rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.165)]">

          <img ref={popupCloseBtnLight} src="/close-light.svg" className="absolute right-5 top-5 cursor-pointer fa-regular fa-xmark w-6 h-6 opacity-30 hover:opacity-50 transition-all duration-200 self-end block dark:hidden"></img>
          <img ref={popupCloseBtnDark} src="/close-dark.svg" className="absolute cursor-pointer fa-regular fa-xmark w-6 h-6 opacity-30 hover:opacity-60 transition-all duration-200 self-end hidden dark:block"></img>

          <div className="p-7 team3:p-10 w-fit flex flex-col items-center">
            <img className="w-50 rounded-full shadow-lg" src={img} alt="photo" />
            <span className="team2:text-lg text-base font-medium dark:text-stone-300 text-stone-700 mt-7 text-center">{role}</span>
            <span className="w-fit text-3xl team2:text-4xl team3:text-5xl font-semibold text-center mt-1">{name}</span>
            <a href={linkedin} target="_blank" className="mt-4  ml-0.5 size-5 team2:size-6 opacity-90 hover:opacity-100 transition-opacity duration-200 hover:shadow-sm"><img className="" src="/linkedin-light-blue.png" alt="linkedn-img" /></a>
            <span className="mt-7 team3:mt-10 text-sm team2:text-base">{bio}</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default CardTeamMember;
