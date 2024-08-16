import { FiTwitter, FiGlobe, FiYoutube } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-24 p-12 text-2xl">
      <div className="pb-4 lg:flex justify-evenly grid place-items-center gap-y-8">
        <div>
          <p>Copyright {year}</p>
        </div>

        <div>
          <a href={"https://www.twitter.com/"}>
            <FiTwitter />
          </a>
        </div>

        <div>
          <a href={"https://www.globe.com/"}>
            <FiGlobe />
          </a>
        </div>
        <div>
          <a href={"https://www.youtube.com/"}>
            <FiYoutube />
          </a>
        </div>
      </div>

      <div className="text-center mt-8 mb-8 lg:mb-2">
        <p>Made by Jesse</p>
      </div>
    </div>
  );
}
