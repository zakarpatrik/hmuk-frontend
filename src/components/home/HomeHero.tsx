import { HomeApiResponse, Payload } from '../../api/types';

export interface HomeDataProps {
  homeData: Payload<HomeApiResponse> | undefined;
}

const HomeHero = (props: HomeDataProps) => {
  return (
    <div className="container flex py-28 items-center">
      <div className="relative flex w-full">
        <h1 className="text-[4.5rem] font-semibold font-title w-1/2 z-10 pb-60 pt-20 px-0">
          {props.homeData?.data.attributes.Cim}
        </h1>
        <img
          src="src/assets/hero.webp"
          alt="hmuk hero"
          className="absolute top-0 right-0 w-9/12"
        />
      </div>
    </div>
  );
};

export default HomeHero;
