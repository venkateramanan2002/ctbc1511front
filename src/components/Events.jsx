import useInstagramPosts from "../custom hooks/useInstagramPosts";
import Camps from "./Events page/Camps";
import Seminars from "./Events page/Seminars";
import Workshops from "./Events page/Workshops";

const Events = () => {
  const { loading, error, instaData } = useInstagramPosts();

  const workshopsData = instaData.filter(x => x.media_type !== "VIDEO" && x.caption.includes('workshop')).slice(0, 4);
  const campsData = instaData.filter(x => x.media_type !== "VIDEO" && x.caption.includes('camp')).slice(0, 4);
  const seminarsData = instaData.filter(x => x.media_type !== "VIDEO" && x.caption.includes('seminar')).slice(0, 4);

  if (loading || error) {
    return <></>;
  }

  return (
    <>
      <Workshops data={workshopsData} />
      <Camps data={campsData} />
      <Seminars data={seminarsData}></Seminars>
    </>
  );
};
export default Events;
