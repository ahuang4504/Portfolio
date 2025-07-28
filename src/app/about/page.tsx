import PhotoGallery from "@/components/PhotoGallery";

export default function About() {
  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="condensed-margin">
          <h1 className="font-heading text-4xl md:text-5xl text-[#2F4156] mb-4">
            About Me
          </h1>
          <p className="text-lg text-[#666666] max-w-2xl">
            Get to know the person behind the code - my story and interests.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <div className="box-3d p-6">
              <div className="text-left mb-6">
                <h2 className="font-heading text-3xl text-[#2F4156]">
                  My Story
                </h2>
              </div>
              <p className="text-[#666666] leading-relaxed mb-3">
                I started coding in high school and I've been hooked ever since!
                What really keeps me going is just wanting to understand how
                everything works. I have a love-hate relationship with getting
                into the nitty-gritty of computers because it frustrates me to
                no end, but the Aha! moments make up for it. Classes like
                Compilers were exactly my kind of thing.
              </p>
              <p className="text-[#666666] leading-relaxed">
                I've also picked up experience in varying areas along the way. I
                minored in Data Science and worked as a research assistant as an
                undergrad and now I'm looking to bring all of that together as I
                focus on full-stack development.
              </p>
            </div>

            {/* <div className="box-3d p-6">
              <div className="text-left mb-6">
                <h2 className="font-heading text-3xl text-[#2F4156]">
                  My Interests
                </h2>
              </div>
              <div className="space-y-2">
                <p className="text-[#666666]">
                  Exploring emerging technologies like AI/ML and blockchain
                </p>
                <p className="text-[#666666]">
                  Building developer tools that improve team productivity
                </p>
                <p className="text-[#666666]">
                  Contributing to open-source projects and the dev community
                </p>
                <p className="text-[#666666]">
                  System design and scalable architecture patterns
                </p>
                <p className="text-[#666666]">
                  DevOps practices and cloud infrastructure automation
                </p>
              </div>
            </div> */}

            <div className="box-3d p-6">
              <div className="text-left mb-6">
                <h2 className="font-heading text-3xl text-[#2F4156]">
                  Staying Active
                </h2>
              </div>
              <p className="text-[#666666] leading-relaxed mb-3">
                Growing up, I played almost every sport imaginable, so staying
                active has always been central to my life. My family loves
                hiking which fostered my appreciation for the outdoors. It's
                been a lifelong dream of mine to hike the mountains of the West
                Coast!
              </p>
              <p className="text-[#666666] leading-relaxed mb-4">
                When I'm not on the trails, I love playing a variety of sports.
                My current rotation include:
              </p>
              <div className="mb-4 space-y-1 ml-4">
                <p className="text-[#666666] text-sm">{">"} Volleyball</p>
                <p className="text-[#666666] text-sm">{">"} Basketball</p>
                <p className="text-[#666666] text-sm">{">"} Badminton</p>
                <p className="text-[#666666] text-sm">{">"} Ultimate Frisbee</p>
                <p className="text-[#666666] text-sm">{">"} Table Tennis</p>
                <p className="text-[#666666] text-sm">{">"} Flag Football</p>
                <p className="text-[#666666] text-sm">{">"} Tennis</p>
                <p className="text-[#666666] text-sm">{">"} Bouldering</p>
                <p className="text-[#666666] text-sm">{">"} Snowboarding</p>
              </div>
              <p className="text-[#666666] leading-relaxed">
                When I get more free time, I'm also planning on challenging
                myself by training for either a marathon or triathlon with my
                brother as well!
              </p>
            </div>

            <div className="box-3d p-6">
              <div className="text-left mb-6">
                <h2 className="font-heading text-3xl text-[#2F4156]">
                  Everything Else
                </h2>
              </div>
              <p className="text-[#666666] leading-relaxed mb-3">
                {/* I'm also rediscovering creative outlets that I didn't fully
                appreciate when I was a kid. Guitar, piano, and drawing all felt
                like obligations during childhood lessons, but I now find myself
                genuinely enjoying these hobbies on my own terms. Currently, I'm
                learning Nocturne Op. 9 No. 2 by Chopin on the piano, playing
                fingerstyle on my guitar, and drawing houseplants! */}
                I'm also now picking up old hobbies that I didn't fully
                appreciate as a kid. Currently, I'm learning Nocturne Op. 9 No.
                2 by Chopin on the piano, playing fingerstyle on my guitar, and
                drawing houseplants!
              </p>
              <p className="text-[#666666] leading-relaxed mb-4">
                I also LOVE music and am always looking for new recommendations.
                On average, I listen to about 150,000 minutes a year (or at
                least according to Spotify Wrapped). My current favorite artists
                include:
              </p>
              <div className="mb-4 space-y-1 ml-4">
                <p className="text-[#666666] text-sm">{">"} Fiji Blue</p>
                <p className="text-[#666666] text-sm">{">"} offonoff</p>
                <p className="text-[#666666] text-sm">{">"} Yuna</p>
                <p className="text-[#666666] text-sm">{">"} Lexie Liu</p>
                <p className="text-[#666666] text-sm">{">"} Niki</p>
                <p className="text-[#666666] text-sm">{">"} James Alyn</p>
                <p className="text-[#666666] text-sm">{">"} DELACOUR</p>
                <p className="text-[#666666] text-sm">{">"} Kcik</p>
                <p className="text-[#666666] text-sm">{">"} FrostTop</p>
              </div>
            </div>
          </div>

          <div className="mt-65 md:sticky md:top-1/2 md:-translate-y-1/2">
            <PhotoGallery />
          </div>
        </div>
      </div>
    </div>
  );
}
