import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css";
import HomeRows from "../../components/HomeRows";
import ToggleDiv from "../../components/ToggleDiv";
import EmailDiv from "../../components/EmailDiv";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="flex flex-col lg:h-screen addingBgInCSS border-zinc-800 border-b-8">
          <Navbar />
          <div className="flex flex-col h-full justify-center items-center z-10 text-white text-center px-10 lg:px-44 py-14 lg:py-0">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Enjoy big movies, hit series and more from ₹ 149.
            </h1>
            <h3 className="text-2xl my-5 font-semibold">
              Join today. Cancel anytime.
            </h3>
            <EmailDiv />
          </div>
        </div>
        <HomeRows
          title="Enjoy on your TV"
          para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          video={
            <video
              autoPlay
              playsInline
              muted
              loop
              className="absolute top-20 z-0"
              style={{ width: "23.5rem", left: "4.2rem" }}
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          }
        />
        <HomeRows
          title="Download your shows to watch offline"
          para="Save your favourites easily and always have something to watch."
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          leftAlign={true}
        />
        <HomeRows
          title="Watch everywhere"
          para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          video={
            <video
              autoPlay
              playsInline
              muted
              loop
              className="absolute top-10 z-0"
              style={{ width: "19.6rem", left: "6rem" }}
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
          }
        />
        <HomeRows
          title="Create profiles for kids"
          para="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          img="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
          leftAlign={true}
        />
        <div className="py-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h1>
          <ToggleDiv
            title="What is Netflix?"
            paraOne="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices."
            paraTwo="You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
          />
          <ToggleDiv
            title="How much does Netflix Cost?"
            paraOne="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
          />
          <ToggleDiv
            title="Where can I watch?"
            paraOne="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
            paraTwo="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
          />
          <ToggleDiv
            title="How do I cancel?"
            paraOne="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime."
            paraTwo=""
          />
          <ToggleDiv
            title="What can I watch on Netflix?"
            paraOne="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
            paraTwo=""
          />
          <ToggleDiv
            title="Is Netflix good for kids?"
            paraOne="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."
            paraTwo="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
          />
        </div>
        <div className="px-10 pb-20 border-zinc-800 border-b-8">
          <EmailDiv />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
