import _GoogleFontLoader from "react-google-font-loader";

const GoogleFontLoader = () => {
  return (
    <_GoogleFontLoader
      fonts={[
        {
          font: "Lalezar",
          weights: [400],
        },
      ]}
    />
  );
};

export default GoogleFontLoader;
