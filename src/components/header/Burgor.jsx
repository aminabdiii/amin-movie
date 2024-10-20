function Burgor({ onClick }) {
  return (
    <a
      href="#"
      className={`text-3xl px-2 sm:hidden xs:max-sm:text-4xl`}
      onClick={onClick}>
      <i className="bi bi-list"></i>
    </a>
  );
}

export default Burgor;
