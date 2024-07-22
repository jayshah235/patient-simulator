import image from "../../assests/images/logo.png";

export const InitialLoadUi = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(${-50}%, ${-50}%)`,
        width: "70px",
      }}
    >
      <img src={image} alt="logo" />
    </div>
  );
};
