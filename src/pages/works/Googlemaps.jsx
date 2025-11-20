import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Arrow from "../../components/Arrow";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";

const GoogleMapsAlbum = () => {
  const infoItems = [
    { title: "Service Type", value: "Web App / Mobile" },
    { title: "Project Format", value: "Feature Design" },
    { title: "Duration", value: "1 day" },
    { title: "My Role", value: "UI/UX Design" },
    { title: "Tools Used", value: "Figma" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInPageWrapper>
      <section className="space-y-10 md:space-y-4">
        <Arrow />
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-16 lg:px-32 xl:px-56 md:pt-12">
          <div className="md:w-1/2 flex-1 mb-4 md:mb-20 h-[300px]">
            <img
              src="/googlemaps-album/thumbnail.png"
              alt="Google Maps Album Feature Thumbnail"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">
                Google Maps – New Album Feature Design
              </h1>
              <div className="h-[0.8px] bg-border mt-4" />
            </div>
            <InfoList items={infoItems} />
          </div>
        </div>
        {/* Overview Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            Overview
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            I expanded the existing Lists feature in Google Maps and designed a
            new album function. The goal was to make organizing and sharing
            added photos more intuitive while maintaining consistency with the
            original app.
          </p>
        </div>
        {/* Background Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            Background
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            During spring break, I went on a trip to Jasper, Canada, with my
            friends. Since it was a group trip, we used a shared Google Maps
            list to organize and coordinate all of our destinations. After the
            trip, I tried sharing our travel photos through Slack, but quickly
            found the process inconvenient—Slack doesn’t offer an album feature,
            and it only allows up to 10 photos to be uploaded at once. <br />
            This experience made me realize how useful it would be if Google
            Maps allowed users to create photo albums for each place in their
            travel list. Being able to save, share, and revisit memories
            directly within the app would make the entire travel experience much
            smoother. This idea became the starting point for my redesign.
          </p>
        </div>

        {/* Problem Identification Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            Identifying the Problems & Generating Ideas
          </h2>
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-700">
                The existing Lists feature allowed users to save and organize
                places, but there was no way to create a visually appealing
                album with photos and notes. The challenge was to enhance the
                functionality without overcomplicating the UI.
              </p>
              <div>
                <p className="text-lg font-bold">
                  Here are some specific issues I identified:
                </p>
                <ul class="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Many messaging apps do not offer built-in album features for
                    photo sharing, and when they do support photo sharing, the
                    number of photos that can be sent at once is often limited.
                  </li>
                  <li>
                    The more photos there are to share, the longer it takes for
                    users to find the ones they need.
                  </li>
                  <li>
                    Users often want to leave comments on shared photos to add
                    context or share their thoughts.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <p className="leading-relaxed text-gray-700">
                First of all, I analyzed the current Lists feature page by page
                and identified opportunities to introduce a new album feature.
                <br />
                The existing app allows users to create lists for sharing by
                selecting the "You" tag and choosing "Shared" when configuring
                the list details.
              </p>

              {/* Existing Flow Images */}
              <div className="flex flex-col gap-24">
                {["existing-flow.png", "flow.png"].map((src, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row flex-1 gap-10">
                      <div className="flex flex-col gap-2">
                        {idx === 1 ? (
                          <p>
                            Next, I created user stories and, while comparing
                            them with the existing app flow, brainstormed
                            potential ideas for each screen.
                            <br />
                            (The text in red indicates the parts that were
                            incorporated into this design.)
                          </p>
                        ) : (
                          ""
                        )}
                        <img
                          src={`/googlemaps-album/${src}`}
                          alt="Lists Page Before"
                          className="h-full object-cover border border-border rounded max-w-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* UI Design Section */}
        <div
          id="final-ui"
          className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background"
        >
          <h2 className="text-2xl text-center text-accent font-medium">
            Final UI Design
          </h2>
          {/* Final Design */}
          <div className="w-full space-y-2">
            <div>
              <p className="text-lg md:text-xl font-medium">New Screens</p>
              <p className="text-base">Here’s the album feature I designed.</p>
            </div>
            <div>
              <img
                src="/googlemaps-album/final-ui.png"
                alt="Album Feature Page"
                className="h-full object-cover rounded"
              />
            </div>
          </div>
          {/* Additional UI Screens */}
          <div className="flex flex-col w-full gap-8">
            <p class="border-b border-gray-400 border-dashed my-4"></p>
            <div className="w-full space-y-3">
              <p className="text-lg md:text-xl font-medium">More details</p>
              {/* Row 1 */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row gap-8 items-center md:justify-between">
                  {["modal.png", "list.png"].map((src, idx) => (
                    <div
                      key={idx}
                      className="w-full h-[500px] sm:h-[800px] md:max-w-[480px] md:h-[500px]"
                    >
                      <img
                        src={`/googlemaps-album/${src}`}
                        alt="Album Page"
                        className="object-contain rounded"
                      />
                      {idx === 0 ? (
                        <p className="text-base md:text-sm text-gray-700 pt-2">
                          After setting up the list information, the design
                          allows users to freely choose whether to use the album
                          feature via a half-modal, preventing unexpected
                          features from appearing suddenly and causing
                          confusion.
                        </p>
                      ) : (
                        <p className="text-base md:text-sm text-gray-700 pt-2">
                          Initially, the list was designed to automatically
                          switch from “Destinations” to “Album” after the trip,
                          based on the travel dates entered by the user.
                          However, since users may still want to review their
                          “Destinations,” the design was updated to let them
                          switch between “Destinations” and “Album” using tags,
                          independent of the dates.
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="flex flex-col items-center lg:flex-row gap-8 lg:items-start md:justify-between">
                  <div className="w-full sm:h-[800px] md:max-w-[480px] md:h-[620px]">
                    <img
                      src="/googlemaps-album/album.png"
                      alt="Album Page"
                      className="object-contain rounded"
                    />
                    <p className="text-base md:text-sm text-gray-700 pt-2">
                      I displayed albums by location and chose smaller album
                      cards to keep scrolling minimal, since users often visit
                      many places when traveling. I also separated albums with
                      photos from those without, so users can quickly understand
                      their options and take intuitive actions.
                    </p>
                  </div>
                  <div className="w-full h-[500px] sm:h-[800px] md:max-w-[480px] md:h-[620px]">
                    <img
                      src="/googlemaps-album/album-detail.png"
                      alt="Album Detail Page"
                      className="object-contain rounded"
                    />
                    <p className="text-sm text-gray-700 pt-2">
                      I explored several ways to display photos, such as
                      individual cards and horizontal scrolling. But since users
                      often have many photos, I decided that a vertical,
                      camera-roll-style layout would help them find what they
                      need more quickly. For comments, which are lower in
                      priority compared to photos, I kept the section compact
                      and used horizontal scrolling so users can browse all
                      comments without taking up too much space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Learnings Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-2xl text-center text-accent font-medium">
            Learnings
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            Throughout this project, I focused on keeping the design consistent
            by reusing existing components whenever I could, and only improving
            the parts that really needed it—without changing the overall user
            flow too much. Through this process, I learned how important it is
            to respect the existing information architecture and the user
            experience people are already familiar with. I realized that
            improving an existing app requires careful decisions so the update
            doesn’t disrupt what users are used to.
          </p>
          <Link to="/" className="hover:opacity-80 pt-10">
            <div className="flex items-center gap-1">
              <MdOutlineArrowBackIosNew className="w-5 h-3" />
              <p className="text-sm underline">Home</p>
            </div>
          </Link>
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default GoogleMapsAlbum;
