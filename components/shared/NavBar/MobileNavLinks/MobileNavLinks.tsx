export const MobileNavLinks = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setIsMenuOpen(false)}
      className='h-[100dvh] w-full fixed z-50 top-0 bg-secondary-100 inset-0'
    >
      MobileNavLinks
    </div>
  );
};
