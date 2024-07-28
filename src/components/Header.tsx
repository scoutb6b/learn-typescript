import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-700 p-4 text-xl font-semibold text-white flex justify-between">
      <Link to="/">Blog</Link>
      <Link to="/contact">お問い合わせ</Link>
    </header>
  );
};

export default Header;
