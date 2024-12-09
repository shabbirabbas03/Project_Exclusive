import { FooterContent } from "../constant";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white p-10 gap-6 sm:p-10 lg:grid lg:grid-cols-4 sm:justify-center sm:flex-wrap">
      <aside className="flex flex-col sm:items-start sm:gap-4">
        <h1 className="text-2xl font-bold py-3">Exclusive</h1>
        <h4 className="text-xl font-medium text-gray-400 py-3">Subscribe</h4>
        <p className="text-base py-4 text-center text-gray-400">
          Get 10% off your first order
        </p>
        <label className="input input-bordered bg-white flex items-center gap-2 w-full sm:max-w-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 mix-blend-difference"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow text-black"
            placeholder="Enter your email"
          />
        </label>
      </aside>

      {FooterContent.map((item) => (
        <nav
          key={item.title}
          id={item.title}
          className="flex flex-col sm:items-start"
        >
          <h2 className="text-xl font-medium gap-6 py-4 text-center">
            {item.title}
          </h2>
          {item.content.map((subItem) => (
            <a
              href="#"
              key={subItem}
              className="link link-hover max-w-44 py-2 text-base text-center text-gray-400"
            >
              {subItem}
            </a>
          ))}
        </nav>
      ))}

      <aside className="flex flex-col items-center sm:gap-4 lg:items-start">
        <h2 className="text-xl font-medium py-4">Download App</h2>
        <p className="text-xs font-medium text-center sm:text-left">
          Save $3 with App New User Only
        </p>
        <div className="flex gap-2 py-2 justify-center sm:justify-start">
          <img
            src="Footer/footer-1.svg"
            alt="footer-1"
            height="100"
            width="100"
          />
          <div className="gap-3">
            <article className="flex gap-3">
              <button className="btn btn-outline border-2 rounded-md">
                <figure className="flex justify-between gap-2 items-center max-w-40 max-h-16">
                  <img
                    src="Footer/footer-2.svg"
                    alt="footer-2"
                    height="32"
                    width="32"
                  />
                  <article className="text-start">
                    <h1 className="text-xs font-medium">GET IT ON</h1>
                    <span className="text-lg">Google Play</span>
                  </article>
                </figure>
              </button>
            </article>
            <article className="flex gap-3 mt-2">
              <button className="btn btn-outline border-2 rounded-md">
                <figure className="flex justify-between gap-3 items-center max-w-40 max-h-16">
                  <img
                    src="Footer/footer-3.svg"
                    alt="footer-3"
                    height="32"
                    width="32"
                  />
                  <article className="text-start">
                    <h1 className="text-xs font-medium">Download on the</h1>
                    <span className="text-lg">App Store</span>
                  </article>
                </figure>
              </button>
            </article>
          </div>
        </div>
        <div className="flex justify-between items-center py-3 gap-6 sm:justify-center">
          <img src="Footer/footer-4.svg" alt="footer-4" />
          <img src="Footer/footer-5.svg" alt="footer-5" />
          <img src="Footer/footer-6.svg" alt="footer-6" />
          <img src="Footer/footer-7.svg" alt="footer-7" />
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
