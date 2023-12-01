import InstaGallery from "./InstaGallery";
import Upcoming from "./Upcoming";
import useInstagramPosts from "../custom hooks/useInstagramPosts";

const InstagramData = () => {
  const {  loading, error,instaData } = useInstagramPosts();
  const upcomingData = instaData?.filter(x => x.media_type !== "VIDEO" && x.caption.includes('#upcoming'));
  const galleryData = instaData?.filter(x => x.media_type !== "VIDEO" && x.caption.includes('#ctbcindia')).slice(0,6);

  if (loading || error) {
    return <></>;
  }

  return (
    <>
      {galleryData && <InstaGallery galleryData={galleryData}></InstaGallery>}
      {upcomingData && <Upcoming upcomingData={upcomingData}></Upcoming>}
    </>
  );
};

export default InstagramData;
