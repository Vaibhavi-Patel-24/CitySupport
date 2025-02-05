import React from "react";
import { Box, Typography, Badge } from "@mui/material";
import { keyframes } from "@emotion/react";

const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const announcements = [
    { text: "Check out newly added Events!", isNew: true },
    { text: "Happening Elections in Mehsana | know insights of city", isNew: false },
];

export default function HomeMarquee(){
    return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFE4B8",
        color: "#FF0000",
        padding: "8px 0",
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          animation: `${marquee} 15s linear infinite`,
          minWidth: "200%",
        }}
      >
        {[...announcements, ...announcements].map((announcement, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", marginRight: "50px" }}>
            {announcement.isNew && (
              <Badge
                badgeContent={"NEW"}
                color="primary"
                sx={{ marginRight: "10px" }}
              />
            )}
            <Typography
              variant="body1"
              sx={{ fontWeight: "regular", padding: "0 10px" }}
            >
              {announcement.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
    );
}