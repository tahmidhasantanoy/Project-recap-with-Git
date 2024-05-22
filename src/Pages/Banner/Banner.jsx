import { Box, Button } from "@mui/material";
import video from "../../assets/Video/Untitled Project.mp4";

const Banner = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <video
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={video}
        autoPlay
        loop
        muted
      ></video>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.7)", 
          color: "white",
          fontSize: "2rem", 
          textAlign: "center",
          padding: "20px",
        }}
      >
        Well come to this project.
        <Button style={{marginTop : 10}} variant="contained">Explore More</Button>
      </div>
    </div>
  );
};

export default Banner;
