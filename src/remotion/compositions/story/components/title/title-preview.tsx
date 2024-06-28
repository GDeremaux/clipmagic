import { AbsoluteFill, staticFile, useVideoConfig } from "remotion";
import InputContext from "../input-context";
import { useContext } from "react";
import getUnits, { vw, vh } from "../../../../lib/get-units";

const TitlePreview = () => {
  const input = useContext(InputContext);
  
  const title = input.storySettings.title;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center"
      }} 
    >
      <div
        style={{
          width: vw(80),
          height: "fit-content",
          backgroundColor: "white",
          padding: vw(4),
          borderRadius: vw(3),
          display: "flex",
          rowGap: vw(2),
          flexDirection: "column",
          boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.5)"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: vw(2),
          }}
        >
          <img
            src="https://www.redditstatic.com/avatars/avatar_default_04_C18D42.png"
            style={{
              width: vw(9),
              height: vw(9),
              borderRadius: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: vw(1)
            }}
          >
            <h1
              style={{
                fontSize: vw(3),
                fontFamily: "SF-Pro",
                fontWeight: "700",
                margin: 0,
                display: "flex",
                alignItems: "center",
                columnGap: vw(1)
              }}
            >
              John Lee
              <img
                src={staticFile("/icons/blue-checkmark.png")}
                style={{
                  height: vw(3)
                }}
              />
            </h1>
            <img
              src={staticFile("/misc/10-reddit-icons.png")}
              style={{
                height: vw(3),
              }}
            />
          </div>
        </div>
        <h1
          style={{
            fontSize: vw(5),
            fontFamily: "SF-Pro",
            fontWeight: "700",
            margin: 0,
          }}
        >
          {title}
        </h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: vw(1),
              alignItems: "center"
            }}
          >
            <img
              src={staticFile("/icons/reddit-heart-icon.png")}
              style={{
                height: vw(3.5),
              }}
            />
            <span
              style={{
                fontSize: vw(3.5),
                fontFamily: "SF-Pro",
                color: "#FF4500",
                fontWeight: "500"
              }}
            >
              9.9k+
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: vw(1),
              alignItems: "center",
              opacity: 0.5
            }}
          >
            <img
              src={staticFile("/icons/share-icon.png")}
              style={{
                height: vw(4),
              }}
            />
            <span
              style={{
                fontSize: vw(3.5),
                fontFamily: "SF-Pro",
                color: "black",
                fontWeight: "500",
              }}
            >
              99+
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}

export default TitlePreview;