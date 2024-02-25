import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import ThemeProvider from "@/components/ThemeProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stitchack",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
