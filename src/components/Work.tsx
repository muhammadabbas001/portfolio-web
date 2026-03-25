import "./styles/Work.css";
import { assetUrl } from "../utils/assetUrl";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const workProjects = [
  {
    name: "Meezan Bank",
    category: "Fintech",
    tools: "Swift, UIKIT, XML APIs, MVC, Xcode, Git, Postman",
  },
  {
    name: "Wow Earn",
    category: "Blockchain",
    tools:
      "Swift, SwiftUI, Objective C, Chat, VOIP, UCard, CoreData, Clean Architecture, MVVM, Xcode, Git, Postman, SourceTree, Slack, Figma",
  },
  {
    name: "Quranic Calm",
    category: "Health and Wellness",
    tools:
      "Swift, SwiftUI, SOLID, Clean Architecture, MVVM, Xcode, Git, Linear, SourceTree",
  },
  {
    name: "Leaf",
    category: "Lifestyle",
    tools:
      "Swift, SwiftUI, Firebase, Recommbe, MVVM, BitBucket, Jira, SourceTree",
  },
  {
    name: "Abalone",
    category: "Board Game",
    tools: "Swift, SwiftUI, Git, SourceTree, Xcode Cloud, CoreData",
  },
  {
    name: "Gifties",
    category: "Lifestyle",
    tools: "Swift, SwiftUI, Clean Architecture, MVVM, Git, SourceTree",
  },
] as const;

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workProjects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={assetUrl(`/images/project_${index + 1}.png`)}
                alt={`${project.name} — ${project.category}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
