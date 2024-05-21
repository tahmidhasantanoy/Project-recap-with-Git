import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Signup = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="lg"
      p={30}
      m={0}
    >
      {/* Right Side - Form */}
      <Grid
        p={0}
        item
        xs={12}
        md={6}
        display="flex"
        justifyContent="flex-center"
        alignItems="center"
      >
        <Box
          width="100%"
          maxWidth={400}
          p={3}
          borderRadius={2}
          boxShadow={3}
          bgcolor="background.paper"
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Sign up
          </Typography>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Grid>
    </Container>
  );
};

export default Signup;
