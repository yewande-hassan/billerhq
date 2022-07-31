import imgs from "../../../../../public/images/billerHQ-04 1.svg";
export default function Logo({ height = 50, width = 50 }) {
  return <img src={imgs.src} height={height} width={width} alt="nimasa-logo" />;
}
