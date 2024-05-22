import { Box, Button, Typography } from "@mui/material";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <Box my={10} sx={{ display: "flex", justifyContent:'center' }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography fontSize={40} fontWeight={"bold"} color={"InfoText"}>
            React with Git
          </Typography>
          <Typography
            fontSize={20}
            fontWeight={300}
            width={700}
            textAlign={"center"}
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptate laudantium, facilis libero ab fugiat magnam mollitia
            quisquam dolores obcaecati?
          </Typography>
          <Button size="medium" color="warning" variant="contained">Get start</Button>
        </Box>
      </Box>

      <Banner/>
    </>
  );
};

export default Home;
