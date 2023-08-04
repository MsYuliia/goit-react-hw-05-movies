import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      width="80"
      height="80"
      colors={['#690026', '#751919', '#803946', '#803960', '#734166']}
      wrapperClass="colorRing"
      wrapperStyle={{}}
      ariaLabel="color-ring-loading"
    />
  );
};
