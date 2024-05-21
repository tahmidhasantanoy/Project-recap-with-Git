import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex", flex: "center" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography fontSize={40} fontWeight={"bold"} color={"InfoText"}>
            React with Git
          </Typography>
          <Typography
            fontSize={20}
            fontWeight={300}
            width={100}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptate laudantium, facilis libero ab fugiat magnam mollitia
            quisquam dolores obcaecati?
          </Typography>
          <Button>Get start</Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
