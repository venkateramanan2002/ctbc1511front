import Title from "./Title";

const Upcoming = ({ upcomingData }) => {
  if (upcomingData.length === 0) {
    return <></>;
  }

  return (
    <section className="section">
      <Title subTitle={"Events"} />

      <div className="upcoming-cards-container" id="events">
        {upcomingData?.map((post) => (
          <div key={post?.id} className="upcoming-card">
            <img
              src={post?.media_url}
              alt="instagram photo"
              className="upcoming-photo"
            />

            <p className="upcoming-card-caption">
              {post?.caption.slice(0, 300) + ".... "}
            </p>
            <a
              href={post?.permalink}
              className="link-to-post"
              rel="noreferrer"
              target="_blank"
              aria-label="Read more on Instagram"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Upcoming;
