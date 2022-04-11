import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => (
  <Layout>
    <div className="font-PlayfairDisplay flex flex-col justify-center items-center text-center">
      <div className="grid grid-cols-3 grid-rows-1">
        <StaticImage
          src="../images/nyc.jpeg"
          alt="Us standing in Times Square, New York City"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/chch.JPG"
          alt="Us in Christchurch, New Zealand"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/Engagement1_edit.JPG"
          alt="Us on the day we got engaged"
          placeholder="blurred"
        />
      </div>
      <div className="w-5/6">
        <div className="my-10">
          <h1 className="mb-5">We're tying the knot</h1>
          <p>on Saturday 22nd October 2022 at the Wynnum Golf Club, Brisbane</p>
        </div>
        <div className="w-7/12 h-[1px] bg-weddingGreen m-auto"></div>
        <div className="my-10">
          <p className="my-5">
            Welcome to our wedding website - we can’t wait to celebrate our
            special day with you all.
          </p>
          <p className="my-5">
            We created this website as a convient and interactive way to share
            all the important details in the lead up to our big day. You can
            find out about our venue, some accommodation options (if you’re from
            out of town) and also meet our amazing bridal party.
          </p>
          <p className="my-5">
            Also, don’t forget to RSVP and request a song! So please have fun,
            take a look around and if you have any questions, please let us
            know!
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
