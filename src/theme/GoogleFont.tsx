import FontLoader from 'react-google-font-loader';

const GoogleFontLoader = () => {
  return (
    <FontLoader
      fonts={[
        {
          font: 'Lalezar',
          weights: [400],
        },
      ]}
    />
  );
};

export default GoogleFontLoader;
