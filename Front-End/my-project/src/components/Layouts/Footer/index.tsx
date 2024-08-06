import { medias } from "./medias";
import { quickLinks } from "./medias";
import "./style.css";
interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (): JSX.Element => {
  return (
    <>
      <footer className="footer-box">
        <ul className="quicklink">
          {quickLinks.map((quicklink) => {
            return (
              <li key={quicklink.id}>
                <a href={quicklink.path}>{quicklink.name}</a>
              </li>
            );
          })}
        </ul>
        <ul className="medias">
          {medias.map((media) => {
            return (
              <li key={media.id}>
                <a href={media.link}>
                  <media.logo size={24} className="rosa"/>
                </a>
              </li>
            );
          })}
        </ul>

        <aside>
          <p className="copy-right">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
