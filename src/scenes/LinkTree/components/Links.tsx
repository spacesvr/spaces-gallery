// @ts-ignore
import Link from "./Link";
import { linkPositions } from "../assets/constants";

type LinksProps = {
  links: {
    link: string;
    desc: string;
    src: string;
  }[];
  color?: string;
  font?: string;
};

const linkArr: any = [];

const Links = (props: LinksProps) => {
  const { links, color, font } = props;

  for (let i = 0; i < links.length; i++) {
    linkArr.push(
      <Link
        position={linkPositions[i].p}
        rotY={linkPositions[i].r}
        text={links[i].desc}
        color={color}
        font={font}
        link={links[i].link}
        src={links[i].src}
        key={i}
      />
    );
  }

  return <group scale={[1 / 20, 1 / 20, 1 / 20]}>{linkArr}</group>;
};

export default Links;
